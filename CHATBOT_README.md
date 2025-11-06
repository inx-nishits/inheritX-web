# 🤖 InheritX Chatbot Module - Complete Documentation

## 📋 Overview

A complete, secure backend + frontend setup for the InheritX chatbot that:
- ✉️ Sends email notifications to `nishit.s@inheritx.com`
- 💾 Saves all submissions to `submissions.json`
- 🔐 Provides secure admin login
- 📊 Displays submissions in a clean dashboard

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

Required packages:
- `nodemailer` - for email sending
- `next` - Next.js framework
- `react` - React library

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# ===================================
# MAIL CONFIGURATION (Gmail SMTP)
# ===================================
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password-here
MAIL_TO=nishit.s@inheritx.com

# ===================================
# ADMIN LOGIN CREDENTIALS
# ===================================
ADMIN_USER=admin
ADMIN_PASS=1234

# ===================================
# SESSION SECRET (for secure cookies)
# ===================================
SESSION_SECRET=your-secret-key-change-in-production

# ===================================
# APPLICATION SETTINGS
# ===================================
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Scroll down to **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password
6. Paste it in `.env.local` as `MAIL_PASS`

**Important:** Do NOT use your regular Gmail password!

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
├── app/
│   ├── api/chatbot/
│   │   ├── submit/route.js          # Form submission handler
│   │   ├── login/route.js           # Admin authentication
│   │   ├── logout/route.js          # Admin logout
│   │   └── submissions/route.js     # Fetch all submissions
│   ├── admin/chatbot/
│   │   └── page.jsx                 # Admin login page
│   ├── dashboard/chatbot/
│   │   └── page.jsx                 # Admin dashboard
│   └── components/chatbot/
│       └── ChatBot.jsx              # Chat widget component
├── submissions.json                  # Submissions database
├── .env.local                       # Environment variables (gitignored)
├── .gitignore                       # Git ignore rules
└── CHATBOT_README.md                # This file
```

---

## 🔌 API Endpoints

### 1. **POST** `/api/chatbot/submit`

Handles form submissions from the chatbot.

**Request Body (FormData):**
```javascript
{
  name: string,
  email: string,
  phone?: string,
  selectedService: string,
  category: 'new-project' | 'hire-team' | 'apply-job',
  requirements?: string,
  // Additional fields based on category
}
```

**Response:**
```json
{
  "success": true,
  "message": "Submission received successfully",
  "emailSent": true,
  "savedToJSON": true,
  "leadId": 1699999999999,
  "timestamp": "2024-11-05T12:00:00.000Z"
}
```

**What it does:**
1. Validates and sanitizes input
2. Sends HTML email to admin
3. Saves submission to `submissions.json`
4. Returns success/error response

---

### 2. **POST** `/api/chatbot/login`

Authenticates admin users.

**Request Body:**
```json
{
  "username": "admin",
  "password": "1234"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "user": { "username": "admin" }
}
```

**Security:**
- Credentials stored in `.env.local`
- Session cookie created on success
- Cookie is `httpOnly`, `sameSite: strict`
- 24-hour session expiration

---

### 3. **GET** `/api/chatbot/login`

Check authentication status.

**Response:**
```json
{
  "authenticated": true,
  "user": { "username": "admin" }
}
```

---

### 4. **POST** `/api/chatbot/logout`

Logs out admin and destroys session.

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### 5. **GET** `/api/chatbot/submissions`

Fetches all submissions (protected - requires login).

**Response:**
```json
{
  "success": true,
  "submissions": [
    {
      "id": 1699999999999,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "selectedOption": "Start a New Project",
      "category": "new-project",
      "timestamp": "2024-11-05T12:00:00.000Z",
      "requirements": "I need a mobile app..."
    }
  ],
  "total": 1
}
```

---

## 🎨 Frontend Pages

### Admin Login Page
**URL:** `http://localhost:3000/admin/chatbot`

Features:
- Clean, modern UI
- Auto-redirect if already logged in
- Real-time error feedback
- Loading states
- Responsive design

### Admin Dashboard
**URL:** `http://localhost:3000/dashboard/chatbot`

Features:
- **Table view** of all submissions
- **Filter by category**: All, New Projects, Hire Team, Job Applications
- **Search** by name, email, or phone
- **View details** button for each submission
- **Refresh** button to reload data
- **Logout** button
- **Latest submissions first**
- Responsive design

---

## 📧 Email Template

Emails are sent in **beautiful HTML format** with:
- Gradient header with category icon
- Organized fields with labels
- Responsive design
- Reply-to functionality
- Professional styling

**Subject:** `New Chat Submission — [Service/Category]`

**Example:**
```
Subject: New Chat Submission — Start a New Project

From: InheritX Chatbot <your-email@gmail.com>
To: nishit.s@inheritx.com

[Beautiful HTML email with all submission data]
```

---

## 💾 Data Storage

Submissions are stored in `submissions.json`:

```json
[
  {
    "id": 1699999999999,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "selectedOption": "Start a New Project",
    "category": "new-project",
    "timestamp": "2024-11-05T12:00:00.000Z",
    "requirements": "I need a mobile app...",
    "resumeName": ""
  }
]
```

**Features:**
- Latest submissions first (prepended)
- Includes all form fields
- Timestamped
- Category-specific fields preserved

---

## 🔒 Security Features

1. **Input Sanitization**
   - All user input is sanitized to prevent XSS
   - HTML special characters escaped

2. **Authentication**
   - Session-based login
   - HttpOnly cookies (not accessible via JavaScript)
   - SameSite: strict (CSRF protection)
   - 24-hour session expiration
   - Credentials stored in environment variables

3. **Environment Variables**
   - All sensitive data in `.env.local`
   - File is gitignored
   - Never committed to repository

4. **API Protection**
   - Submissions endpoint requires authentication
   - Unauthorized requests return 401

5. **Email Security**
   - Uses Gmail App Password (not regular password)
   - TLS/SSL encryption
   - No sensitive data logged

---

## 🧪 Testing

### Test Form Submission

1. Open chatbot on your website
2. Fill in the form
3. Submit

**Check:**
- ✅ Email received at `nishit.s@inheritx.com`
- ✅ Entry added to `submissions.json`
- ✅ Success message shown to user

### Test Admin Login

1. Visit `http://localhost:3000/admin/chatbot`
2. Enter credentials from `.env.local`
3. Click Login

**Check:**
- ✅ Redirects to dashboard
- ✅ Shows all submissions
- ✅ Can filter and search

### Test Admin Dashboard

1. Login to admin panel
2. Check submissions table
3. Try filters and search
4. Click "View" on a submission
5. Logout

**Check:**
- ✅ All submissions displayed
- ✅ Filters work correctly
- ✅ Search works
- ✅ Logout redirects to login

---

## 🚨 Troubleshooting

### Email Not Sending

**Issue:** Email not received

**Solutions:**
1. Check `MAIL_USER` and `MAIL_PASS` in `.env.local`
2. Ensure you're using **App Password**, not regular password
3. Enable "Less secure app access" in Gmail (if needed)
4. Check spam folder
5. Look at terminal logs for error messages

**Test email configuration:**
```bash
# Check terminal output when submitting form
# Should see: ✅ Email sent: <message-id>
# If error: ❌ Email sending failed: [error details]
```

### Admin Login Not Working

**Issue:** Cannot login

**Solutions:**
1. Check `ADMIN_USER` and `ADMIN_PASS` in `.env.local`
2. Make sure `.env.local` file exists in project root
3. Restart the development server: `npm run dev`
4. Clear browser cookies
5. Check browser console for errors

### Submissions Not Saving

**Issue:** Data not in `submissions.json`

**Solutions:**
1. Check file permissions on `submissions.json`
2. Ensure file exists (should be created automatically)
3. Check terminal for error messages
4. Verify API route is working: visit `/api/chatbot/submit`

### Dashboard Shows "Unauthorized"

**Issue:** Cannot access dashboard

**Solutions:**
1. Login first at `/admin/chatbot`
2. Check if session cookie is set (browser DevTools → Application → Cookies)
3. Session may have expired (24 hours) - login again
4. Clear cookies and login again

---

## 📝 Customization

### Change Admin Credentials

Edit `.env.local`:
```env
ADMIN_USER=your-username
ADMIN_PASS=your-secure-password
```

Restart server after changes.

### Change Email Recipient

Edit `.env.local`:
```env
MAIL_TO=new-email@inheritx.com
```

### Customize Email Template

Edit `app/api/chatbot/submit/route.js`:
- Find `generateEmailHTML()` function
- Modify HTML and styling

### Customize Dashboard UI

Edit `app/dashboard/chatbot/page.jsx`:
- Modify `styles` object at the bottom
- Change colors, fonts, layout

---

## 🔄 Deployment

### Before Deploying to Production

1. **Generate Strong Secrets**
   ```bash
   # Generate SESSION_SECRET
   openssl rand -base64 32
   ```

2. **Update Environment Variables**
   - Use production email credentials
   - Set strong `ADMIN_PASS`
   - Set `NODE_ENV=production`
   - Update `NEXT_PUBLIC_SITE_URL`

3. **Secure submissions.json**
   - Set proper file permissions
   - Consider using a database instead
   - Set up automated backups

4. **Enable HTTPS**
   - Cookies will be `secure: true` in production
   - SSL/TLS required for security

5. **Test Everything**
   - Test form submission
   - Test admin login
   - Test email delivery
   - Check all edge cases

---

## 📊 Database Migration (Optional)

To migrate from JSON to database (PostgreSQL, MongoDB, etc.):

1. Create database schema
2. Update `app/api/chatbot/submit/route.js`:
   - Replace `saveToJSON()` with database insert
3. Update `app/api/chatbot/submissions/route.js`:
   - Replace file read with database query
4. Keep JSON as backup initially

---

## 🛡️ Best Practices

1. **Never commit `.env.local`** to git
2. **Backup `submissions.json`** regularly
3. **Use strong passwords** for production
4. **Enable 2FA** on Gmail account
5. **Monitor email quota** (Gmail has daily limits)
6. **Review logs** regularly for errors
7. **Update dependencies** periodically
8. **Test before deploying** to production

---

## 📞 Support

For issues or questions:
1. Check this README
2. Review code comments
3. Check terminal logs
4. Inspect browser console
5. Test with simplified inputs

---

## ✅ Checklist

Before going live, ensure:

- [ ] `.env.local` configured with correct values
- [ ] Gmail App Password generated and working
- [ ] Test form submission works
- [ ] Email received successfully
- [ ] Submission saved to JSON
- [ ] Admin login works
- [ ] Dashboard displays submissions
- [ ] Logout works
- [ ] All filters and search work
- [ ] `.env.local` is gitignored
- [ ] Production environment variables set
- [ ] HTTPS enabled (for production)
- [ ] Security headers configured

---

## 📚 Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

## 🎉 Success!

Your chatbot module is now fully functional with:
- ✉️ Email notifications
- 💾 JSON logging
- 🔐 Secure admin panel
- 📊 Beautiful dashboard

**Happy coding! 🚀**

