# 📧 Production Email Setup Guide

## Why Emails Work Locally But Not in Production

The most common reason emails fail in production is **missing environment variables**. Your `.env.local` file works locally but is NOT automatically deployed to production servers.

## 🔧 Step-by-Step Setup

### 1. Generate Gmail App Password

1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Scroll down to **App passwords**
4. Click **Generate** → Select "Mail" → Click **Generate**
5. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

**Important:** 
- Use App Password, NOT your regular Gmail password
- Remove spaces when using in environment variables

### 2. Set Environment Variables in Production

#### For Vercel:
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   ```
   MAIL_USER = your-email@gmail.com
   MAIL_PASS = xxxxxxxxxxxxxxxx (16-char app password, no spaces)
   MAIL_TO = nishit.s@inheritx.com
   ```
5. Select **Production**, **Preview**, and **Development** environments
6. Click **Save**
7. **Redeploy** your application (important!)

#### For Netlify:
1. Go to: https://app.netlify.com/
2. Select your site
3. Go to **Site configuration** → **Environment variables**
4. Add the same variables as above
5. Click **Save**
6. **Trigger a new deploy**

#### For Other Platforms:
- Find "Environment Variables" or "Config Variables" in your hosting dashboard
- Add `MAIL_USER`, `MAIL_PASS`, and `MAIL_TO`
- **Always redeploy after adding environment variables**

### 3. Verify Setup

**Option 1: Use Debug Endpoint**
```
https://your-domain.com/api/chatbot/debug-email
```

Expected response:
```json
{
  "success": true,
  "verifyOk": true,
  "env": {
    "hasUser": true,
    "hasPass": true,
    "to": "nishit.s@inheritx.com"
  }
}
```

**Option 2: Test Email Endpoint**
```
https://your-domain.com/api/chatbot/test-email
```

Expected response:
```json
{
  "success": true,
  "messageId": "<message-id>",
  "to": "nishit.s@inheritx.com"
}
```

**Option 3: Submit Test Form**
1. Submit a test form through your chatbot
2. Check server logs in your hosting platform
3. Look for: `✅ Email sent successfully!`

### 4. Check Production Logs

**Common Error Messages:**

❌ `⚠️ Email credentials not configured`
- **Fix:** Environment variables not set in production
- **Action:** Add `MAIL_USER` and `MAIL_PASS` to hosting platform

❌ `❌ All email configs failed` / `EAUTH`
- **Fix:** Authentication failed
- **Action:** Use Gmail App Password (not regular password)

❌ `ECONNECTION`
- **Fix:** Connection failed
- **Action:** Check firewall/network settings, Gmail may be blocking

❌ `Email service not configured`
- **Fix:** Transporter not created
- **Action:** Check environment variables are set correctly

## 🔍 Troubleshooting Checklist

- [ ] Environment variables set in hosting platform
- [ ] Redeployed after adding environment variables
- [ ] Using Gmail App Password (not regular password)
- [ ] 2-Step Verification enabled on Gmail
- [ ] Checked production logs for specific errors
- [ ] Tested debug endpoint: `/api/chatbot/debug-email`
- [ ] Checked spam folder
- [ ] Verified `MAIL_TO` email address is correct

## 📝 Quick Reference

**Required Environment Variables:**
```env
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-16-char-app-password
MAIL_TO=nishit.s@inheritx.com
```

**Important Notes:**
- `.env.local` only works locally
- Environment variables must be set separately in production
- Always redeploy after changing environment variables
- Use App Password, not regular Gmail password
- Remove spaces from App Password when setting as env var

## 🆘 Still Not Working?

1. Check server logs in your hosting platform
2. Visit `/api/chatbot/debug-email` to see configuration status
3. Verify environment variables are set (check in hosting dashboard)
4. Ensure you redeployed after adding environment variables
5. Double-check Gmail App Password is correct

