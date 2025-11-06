# 🚀 Quick Setup Guide - InheritX Chatbot Module

## ⏱️ 5-Minute Setup

### Step 1: Install Dependencies (30 seconds)
```bash
npm install
```

### Step 2: Create Environment File (2 minutes)

Create a file named `.env.local` in the project root:

```env
# Copy this entire block into .env.local

# Gmail Configuration
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-16-char-app-password
MAIL_TO=nishit.s@inheritx.com

# Admin Credentials
ADMIN_USER=admin
ADMIN_PASS=1234

# Session Secret (generate using: openssl rand -base64 32)
SESSION_SECRET=your-random-secret-key

# App Settings
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 3: Generate Gmail App Password (2 minutes)

1. Open: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not enabled)
3. Click **App passwords**
4. Generate password for "Mail"
5. Copy the 16-character password
6. Paste in `.env.local` as `MAIL_PASS`

### Step 4: Start Server (30 seconds)
```bash
npm run dev
```

## ✅ Test It

### Test 1: Submit Form
1. Open your website
2. Open chatbot
3. Fill form and submit
4. Check email at `nishit.s@inheritx.com`
5. Check `submissions.json` file

### Test 2: Admin Dashboard
1. Visit: http://localhost:3000/admin/chatbot
2. Login with credentials from `.env.local`
3. View submissions in dashboard
4. Test filters and search
5. Logout

## 🎯 Quick Links

- **Admin Login:** http://localhost:3000/admin/chatbot
- **Dashboard:** http://localhost:3000/dashboard/chatbot (after login)
- **Full Documentation:** See CHATBOT_README.md

## 🆘 Quick Troubleshooting

**Email not sending?**
- Use App Password, not regular password
- Check spam folder
- View terminal for error logs

**Can't login?**
- Check `.env.local` exists
- Verify credentials
- Restart server: `npm run dev`

**No submissions showing?**
- Login first at `/admin/chatbot`
- Check `submissions.json` file exists
- Refresh dashboard

## 📁 Important Files

- `.env.local` - Your configuration (create this!)
- `submissions.json` - Submission logs (auto-created)
- `CHATBOT_README.md` - Full documentation
- `app/api/chatbot/` - Backend API routes
- `app/admin/chatbot/` - Login page
- `app/dashboard/chatbot/` - Dashboard page

## 🔒 Security Checklist

- [ ] Created `.env.local` file
- [ ] Using Gmail App Password
- [ ] Changed default admin password
- [ ] `.env.local` is gitignored
- [ ] Never commit sensitive data

---

**You're all set! 🎉**

For detailed documentation, see **CHATBOT_READE.md**

