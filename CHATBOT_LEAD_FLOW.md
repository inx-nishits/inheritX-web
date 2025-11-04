# Chatbot Lead Generation Flow

## Overview

The InheritX chatbot now has a **smart conversational flow** that collects user information and sends it directly to the sales team!

## 🎯 Conversation Flow

### **Stage 1: Greeting**
User clicks chat button → Sees welcome screen → Clicks "Start Chat"

### **Stage 2: Main Menu**
User selects one of three options:
- 👥 **Hire Dedicated Team**
- 🚀 **Start a New Project**
- 💼 **Apply for Job**

### **Stage 3: Information Collection (5 Steps)**

The bot asks questions in sequence:

#### **Step 1: Name**
> Bot: "What's your name?"
> User: Types name

#### **Step 2: Email**
> Bot: "What's your email address?"
> User: Types email

#### **Step 3: Phone**
> Bot: "And your phone number?"
> User: Types phone

#### **Step 4: Company (Optional)**
> Bot: "What's your company name?"
> User: Types company name or skips

#### **Step 5: Requirements**
Different questions based on selection:

**For Hire Team:**
> Bot: "What type of developers do you need?"

**For New Project:**
> Bot: "Tell me briefly about your project idea?"

**For Apply Job:**
> Bot: "Tell me about your experience and why you're interested?"

### **Stage 4: Submission**
After Step 5, the bot:
1. ✅ Submits data to `/api/chatbot/submit`
2. 📧 Logs to console/terminal
3. 💬 Thanks the user
4. 🎯 Confirms sales team will contact within 24 hours

---

## 📊 Data Collected

Each lead submission includes:

```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "phone": "+1234567890",
  "company": "Tech Corp",
  "message": "Need 3 Flutter developers for 6 months",
  "selectedService": "Hire Dedicated Team",
  "submittedAt": "2025-11-04T10:30:00.000Z"
}
```

---

## 🔔 How Sales Admin Receives Leads

### **Current Setup (Console Logging)**
When a lead is submitted, you'll see this in your terminal/console:

```
============================================================
🎯 NEW CHATBOT LEAD RECEIVED
============================================================
Service: Hire Dedicated Team
Name: John Doe
Email: john@company.com
Phone: +1234567890
Company: Tech Corp
Message: Need 3 Flutter developers for 6 months
Submitted At: 11/4/2025, 10:30:00 AM
============================================================
```

### **⚙️ Integration Options**

You can integrate with:

#### **1. Email Notifications** ✅ Recommended
Install nodemailer:
```bash
npm install nodemailer
```

Update `app/api/chatbot/submit/route.js` to send emails to your sales team.

#### **2. Database Storage**
Store in your database (MongoDB, PostgreSQL, etc.)

#### **3. CRM Integration**
- Zoho CRM
- Salesforce
- HubSpot
- Pipedrive

#### **4. Slack/Teams Notifications**
Get real-time notifications in Slack or Microsoft Teams

#### **5. Google Sheets**
Auto-append leads to a Google Sheet for easy tracking

---

## 📧 Email Integration Guide

To send email notifications to your sales team:

### **Step 1: Install Dependencies**
```bash
npm install nodemailer
```

### **Step 2: Set Environment Variables**
Add to your `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@inheritx.com
SMTP_PASS=your-app-password
SALES_EMAIL=sales@inheritx.com
```

### **Step 3: Update Submit API**
The code is already prepared in `app/api/chatbot/submit/route.js` - just uncomment the email sending section!

---

## 🎨 Conversation Examples

### Example 1: Hire Team

```
Bot: Great choice! 👥
     We can help you build a dedicated team.
     To get started, could you tell me your name?

User: John Smith

Bot: Nice to meet you, John Smith! 👋
     What's your email address?

User: john@techcorp.com

Bot: Perfect! 📧
     And your phone number?

User: +1-555-0123

Bot: Got it! 📱
     What's your company name? (optional)

User: Tech Corp Inc

Bot: Excellent! 🏢
     What type of developers do you need?
     (e.g., Flutter, React, Python, etc.)

User: Need 3 Flutter developers for 6 months

Bot: Thank you so much! ✅
     I've sent your details to our team.
     Our sales representative will contact you within 24 hours.
     
     📧 Email: contact@inheritx.com
     📱 WhatsApp: +91 84870 06480
```

### Example 2: New Project

```
Bot: Exciting! 🚀
     Let's discuss your project.
     First, what's your name?

User: Sarah Johnson

Bot: Nice to meet you, Sarah Johnson! 👋
     What's your email address?

User: sarah@startup.io

Bot: Perfect! 📧
     And your phone number?

User: +1-555-9876

Bot: Got it! 📱
     What's your company name? (optional)

User: Startup.io

Bot: Awesome! 🏢
     Tell me briefly about your project idea?

User: E-commerce mobile app for handmade crafts marketplace

Bot: Thank you so much! ✅
     I've sent your details to our team.
     Our sales representative will contact you within 24 hours.
```

---

## 📈 Benefits

### For Users:
✅ **Quick & Easy** - 5 simple questions, no forms
✅ **Conversational** - Feels natural, not robotic
✅ **Mobile-Friendly** - Works perfectly on phones
✅ **Instant Response** - Immediate confirmation

### For Sales Team:
✅ **Qualified Leads** - Know exactly what they need
✅ **Contact Info** - All details in one place
✅ **Context** - Understand their requirements immediately
✅ **Fast Follow-up** - Contact within 24 hours commitment

### For Business:
✅ **Higher Conversions** - Easier than contact forms
✅ **Better Engagement** - Interactive experience
✅ **Lead Capture** - Never miss an inquiry
✅ **Professional Image** - Modern, AI-powered

---

## 🔧 Customization

### Change Questions
Edit `app/components/chatbot/ChatBot.jsx` - `handleSendMessage` function

### Add/Remove Steps
Modify the conversation steps (currently 5 steps)

### Change Sales Email
Update the email address in the submit API

### Add More Options
Add new main menu items in `mainMenuOptions` array

---

## 🚀 Next Steps (Optional Enhancements)

1. **Email Integration** - Send automated emails to sales@inheritx.com
2. **CRM Integration** - Auto-create leads in Zoho/Salesforce
3. **Analytics** - Track conversion rates and popular services
4. **Follow-up Automation** - Auto-send thank you emails
5. **Admin Dashboard** - View all leads in one place
6. **Lead Scoring** - Prioritize high-value leads
7. **WhatsApp Integration** - Send lead details via WhatsApp API

---

## 📞 Support

For chatbot customization or integration help:
- **Email:** contact@inheritx.com
- **WhatsApp:** +91 84870 06480

---

**Last Updated:** November 4, 2025  
**Version:** 3.0.0 - Conversational Lead Generation  
**Status:** ✅ Production Ready

