---
title: "How to Build a Custom AWS Security Group Monitoring Service with Python and Slack"
date: "2026-03-31"
author: "Inheritx Cloud Engineering Team"
category: "Cloud Security & Infrastructure"
tags: ["AWS", "Security", "Python", "Slack Automation", "EC2", "CloudTrail"]
meta_description: "Learn a practical, hands-on approach to monitoring AWS Security Group changes using a custom Python service on EC2, CloudTrail, and Slack Webhooks."
---

# How to Build a Custom AWS Security Group Monitoring Service with Python and Slack

Managing cloud infrastructure at scale is a complex challenge, and one of the most critical components of your AWS security posture is the **Security Group**. These virtual firewalls control inbound and outbound traffic to your EC2 instances and other resources. A single unauthorized or accidental modification—such as opening port 22 or 3389 to the public internet (`0.0.0.0/0`)—can expose your entire environment to severe risks.

While AWS offers native monitoring tools, sometimes engineering teams need a custom, state-aware solution without diving into the complexities of serverless architectures (like EventBridge and Lambda). 

In this guide, the [Inheritx](https://www.inheritx.com) Cloud Engineering team walks you through building a resilient, custom **Python-based monitoring service** running on an EC2 instance. This service actively tracks Security Group states, correlates changes with AWS CloudTrail, and alerts your team natively in **Slack**.

---

## Architecture Overview

Instead of relying on event-driven serverless triggers, this approach uses a dedicated Linux service that continuously audits the state of your Security Groups. 

The flow is straightforward and highly effective:
1. **AWS CloudTrail** logs all management events across your account.
2. A **Python script** running on a designated EC2 instance periodically hashes the current state of all Security Groups.
3. If the script detects a change in the hash (indicating a rule modification), it queries CloudTrail to identify the exact API call, the user responsible, and the timestamp.
4. The script formats this critical data and pushes an alert directly to a **Slack Incoming Webhook**.

---

## Step-by-Step Implementation Guide

### Step 1: Enable AWS CloudTrail (Management Events)
The foundation of this audit strategy is AWS CloudTrail. 
1. Navigate to the CloudTrail console.
2. Ensure you have a trail configured to log **Management Events**. Security Group modifications (like `AuthorizeSecurityGroupIngress` and `RevokeSecurityGroupIngress`) fall under this category.

### Step 2: Prepare Your EC2 "Auditor" Instance
You will need a lightweight EC2 instance to run the monitoring scripts. We recommend a basic Ubuntu machine.
Ensure the following packages are installed:
* Python 3
* `pip`
* `boto3` (The AWS SDK for Python)
* `requests` (To send payloads to Slack)

### Step 3: Configure IAM Permissions
Your EC2 instance needs precise permissions to read your AWS environment. Avoid using static credentials; instead, attach an **IAM Role** to the EC2 instance with the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeSecurityGroups",
        "cloudtrail:LookupEvents"
      ],
      "Resource": "*"
    }
  ]
}
```

### Step 4: Generate a Slack Webhook
In your Slack workspace, create an **Incoming Webhook** tied to your preferred security or DevOps channel (e.g., `#aws-security-alerts`). Save the provided URL; your Python script will need it to transmit messages.

### Step 5: The Core Python Logic
The heart of this solution is the Python script (`sg-monitor.py`). This script fetches your current security groups, creates an MD5 hash, and compares it to a previously saved hash. If a change is detected, it queries CloudTrail to find exactly what was altered and pushes a formatted alert to Slack.

Create the file `/home/ubuntu/sg-monitor.py` and add the following code:

```python
import boto3
import json
import hashlib
import os
import requests
import pytz
from datetime import datetime, timedelta

# Slack Webhook (Replace with your actual Webhook URL)
WEBHOOK_URL = '<WEBHOOK_URL>'

# Local file path to track the last known state of security groups
HASH_FILE = '/home/ubuntu/sg_snapshot.hash'

# Be sure to set your target AWS Region
REGION = '<REGION>'

def get_security_groups():
    session = boto3.Session()
    ec2 = session.client('ec2', region_name=REGION)
    response = ec2.describe_security_groups()

    filtered_sgs = []
    for sg in response['SecurityGroups']:
        filtered_sgs.append({
            'GroupId': sg['GroupId'],
            'GroupName': sg['GroupName'],
            'IpPermissions': sg.get('IpPermissions', []),
            'IpPermissionsEgress': sg.get('IpPermissionsEgress', [])
        })

    # Sorting keys prevents false positives from JSON dictionary reordering
    sg_data = json.dumps(filtered_sgs, sort_keys=True)
    return sg_data

def get_hash(data):
    return hashlib.md5(data.encode('utf-8')).hexdigest()

def get_recent_sg_events():
    session = boto3.Session()
    cloudtrail = session.client('cloudtrail', region_name=REGION)

    now = datetime.utcnow()
    start_time = now - timedelta(minutes=10) # Review the last 10 minutes

    event_names = [
        'AuthorizeSecurityGroupIngress',
        'RevokeSecurityGroupIngress',
        'AuthorizeSecurityGroupEgress',
        'RevokeSecurityGroupEgress',
        'UpdateSecurityGroupRuleDescriptionsIngress',
        'UpdateSecurityGroupRuleDescriptionsEgress',
        'ModifySecurityGroupRules'
    ]

    events = []
    for event_name in event_names:
        response = cloudtrail.lookup_events(
            LookupAttributes=[{'AttributeKey': 'EventName', 'AttributeValue': event_name}],
            StartTime=start_time,
            EndTime=now,
            MaxResults=5
        )

        for event in response['Events']:
            evt = json.loads(event['CloudTrailEvent'])
            user = evt.get('userIdentity', {}).get('arn', 'Unknown')
            ip = evt.get('sourceIPAddress', 'Unknown')
            changes = evt.get('requestParameters', {})

            events.append({
                'eventName': event_name,
                'user': user,
                'ip': ip,
                'changes': changes,
                'time': event['EventTime'].strftime('%Y-%m-%d %H:%M:%S UTC')
            })

    return events

def send_alert(message):
    payload = {"text": message} 
    headers = {'Content-Type': 'application/json'}
    response = requests.post(WEBHOOK_URL, data=json.dumps(payload), headers=headers)
    print(f"Notification sent to Slack: {response.status_code} - {response.text}")

def format_event_summary(events):
    if not events:
        return ":warning: No recent changes to security groups detected."

    lines = [":mag: *Details are as below:*\n"]
    IST = pytz.timezone('Asia/Kolkata')

    for evt in events:
        changes = evt.get('changes', {})
        event_name = evt['eventName']

        event_time_utc = datetime.strptime(evt['time'], "%Y-%m-%d %H:%M:%S UTC")
        event_time_ist = event_time_utc.replace(tzinfo=pytz.utc).astimezone(IST)
        formatted_time = event_time_ist.strftime("%Y-%m-%d %H:%M:%S IST")

        if event_name == 'ModifySecurityGroupRules':
            emoji, action = ":wrench:", "Rule Modified"
        elif event_name.startswith('Authorize') or event_name.startswith('Update'):
            emoji, action = ":white_check_mark:", "Rule Added/Updated"
        elif event_name.startswith('Revoke'):
            emoji, action = ":x:", "Rule Removed"
        else:
            emoji, action = ":grey_question:", event_name

        lines.append(f"{emoji} *{action}* at `{formatted_time}`")
        lines.append(f" - User: `{evt.get('user', 'Unknown')}`")
        lines.append(f" - IP: `{evt.get('ip', 'Unknown')}`")

        if event_name == 'ModifySecurityGroupRules':
            modify_req = changes.get('ModifySecurityGroupRulesRequest', {})
            lines.append(f" - Group ID: `{modify_req.get('GroupId', 'Unknown')}`")
            rule = modify_req.get('SecurityGroupRule', {}).get('SecurityGroupRuleUpdate', {})
            lines.append(f"   - Protocol: `{rule.get('IpProtocol', 'any')}` | Ports: `{rule.get('FromPort', 'all')}` - `{rule.get('ToPort', 'all')}`")
            lines.append(f"   - CIDR: `{rule.get('CidrIPv4', 'N/A')}` | Desc: _{rule.get('Description', '-')}_")
        else:
            lines.append(f" - Group ID: `{changes.get('groupId', 'Unknown')}`")
            ip_permissions = changes.get('ipPermissions', {}).get('items', [])
            if ip_permissions:
                for perm in ip_permissions:
                    lines.append(f"   - Protocol: `{perm.get('ipProtocol', 'any')}` | Ports: `{perm.get('fromPort', 'all')}` - `{perm.get('toPort', 'all')}`")
                    for ip_range in perm.get('ipRanges', {}).get('items', []):
                        lines.append(f"     - CIDR: `{ip_range.get('cidrIp', 'N/A')}` | Desc: _{ip_range.get('description', '-')}_")
            else:
                lines.append("   - No IP permissions found.")
        lines.append("\n")

    lines.append("\n" + "="*40 + "\n")
    return "\n".join(lines)

def main():
    sg_data = get_security_groups()
    current_hash = get_hash(sg_data)

    old_hash = None
    if os.path.exists(HASH_FILE):
        with open(HASH_FILE, 'r') as f:
            old_hash = f.read().strip()

    if old_hash != current_hash:
        print("Security Group change detected. Checking CloudTrail...")
        events = get_recent_sg_events()

        if events:
            event_summary = format_event_summary(events)
            send_alert(f"⚠️ AWS Security Group Change Detected!\n\n{event_summary}")
        else:
            print("Hash changed, but no CloudTrail events found within window.")

        with open(HASH_FILE, 'w') as f:
            f.write(current_hash)
    else:
        print("No changes in Security Groups.")

if __name__ == "__main__":
    main()
```

### Step 6: Deploying as a `systemd` Service
To ensure your script is fault-tolerant and runs continuously in the background, configure it as a Linux `systemd` service.

Create a service file at `/etc/systemd/system/sg-monitoring.service`:

```ini
[Unit]
Description=AWS Security Group Monitoring Service
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu
ExecStart=/usr/bin/python3 /home/ubuntu/sg-monitor.py
Restart=always

[Install]
WantedBy=multi-user.target
```

To execute this script cleanly without a busy-wait loop, configure a `systemd` timer to trigger the service every 60 seconds.

Create the timer file at `/etc/systemd/system/sg-monitoring.timer`:

```ini
[Unit]
Description=AWS Security Group Monitoring Timer
Requires=sg-monitoring.service

[Timer]
OnBootSec=60
OnUnitActiveSec=60
Unit=sg-monitoring.service
Persistent=true

[Install]
WantedBy=timers.target
```

Enable and start the service by running:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now sg-monitoring.timer
```
---

## Why Choose This Approach?

While serverless architectures are popular, this exact architecture offers distinct enterprise benefits:
* **State-Aware Verification:** By relying on mathematical hashes rather than fire-and-forget event triggers, you inherently verify that a change *actually occurred and persisted* before sounding the alarm.
* **Granular Context:** By directly querying CloudTrail, you maintain complete control over precisely what contextual metadata (who, what IP, when) is pushed to your engineering team.
* **Unified Infrastructure:** Teams that heavily utilize EC2 and Linux administration tools can easily adopt, deploy, and monitor this custom daemon without learning new serverless frameworks.

## Need Expert AWS Infrastructure Engineering?

Securing an enterprise cloud environment requires moving beyond generic implementations and building custom tooling that fits your team's specific operational workflows. 

Whether you need to secure your VPCs, automate your compliance controls, or modernize your CI/CD pipelines, the cloud infrastructure experts at **Inheritx** are ready to scale with you.

[**Contact Inheritx today for a free cloud security consultation**](https://www.inheritx.com/contact-us) and let us help you build a resilient, automated infrastructure.
