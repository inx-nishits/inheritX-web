# 🏗️ InheritX Chatbot Module - Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERACTS                          │
│                    (Website with Chatbot)                       │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                   FRONTEND COMPONENT                            │
│             app/components/chatbot/ChatBot.jsx                  │
│                                                                 │
│  • Collects: Name, Email, Phone, Message                       │
│  • Categories: New Project, Hire Team, Job Application         │
│  • Validation & Form Handling                                  │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ POST FormData
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND API ROUTE                            │
│              app/api/chatbot/submit/route.js                    │
│                                                                 │
│  1. ✓ Validate Input                                           │
│  2. ✓ Sanitize Data (XSS Prevention)                           │
│  3. ✓ Send Email (via Nodemailer)                              │
│  4. ✓ Save to JSON File                                        │
│  5. ✓ Return JSON Response                                     │
└───────────┬─────────────────────────┬──────────────────────────┘
            │                         │
            │ Send Email              │ Save Data
            ▼                         ▼
┌─────────────────────┐    ┌──────────────────────────┐
│  EMAIL SERVICE      │    │   DATA STORAGE           │
│                     │    │                          │
│  • Nodemailer       │    │  submissions.json        │
│  • Gmail SMTP       │    │                          │
│  • HTML Template    │    │  [                       │
│  • TLS/SSL          │    │    {                     │
│                     │    │      id: timestamp,      │
│  To: nishit.s@      │    │      name: "...",        │
│      inheritx.com   │    │      email: "...",       │
│                     │    │      phone: "...",       │
│  Subject: New       │    │      category: "...",    │
│  Chat Submission    │    │      timestamp: "...",   │
│                     │    │      ...                 │
│  Body: Beautiful    │    │    }                     │
│  HTML Email         │    │  ]                       │
└─────────────────────┘    └──────────────────────────┘
```

---

## Admin Panel Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         ADMIN USER                              │
│                  (Wants to view submissions)                    │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      LOGIN PAGE                                 │
│              app/admin/chatbot/page.jsx                         │
│                                                                 │
│  • Username Input                                              │
│  • Password Input                                              │
│  • Submit Button                                               │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ POST credentials
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LOGIN API ROUTE                              │
│              app/api/chatbot/login/route.js                     │
│                                                                 │
│  1. ✓ Check credentials vs .env                                │
│  2. ✓ Create session token                                     │
│  3. ✓ Set HttpOnly cookie                                      │
│  4. ✓ Return success                                           │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ Success → Redirect
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DASHBOARD PAGE                               │
│           app/dashboard/chatbot/page.jsx                        │
│                                                                 │
│  Features:                                                      │
│  • Table of all submissions                                    │
│  • Filter by category                                          │
│  • Search by name/email/phone                                  │
│  • View details button                                         │
│  • Refresh button                                              │
│  • Logout button                                               │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ GET request
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                  SUBMISSIONS API ROUTE                          │
│           app/api/chatbot/submissions/route.js                  │
│                                                                 │
│  1. ✓ Check authentication (cookie)                            │
│  2. ✓ Read submissions.json                                    │
│  3. ✓ Return array of submissions                              │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
                   Display in table
```

---

## Data Flow Diagram

```
User Submission Flow:
─────────────────────

1. User opens chatbot
2. User fills form (Name, Email, Phone, Message)
3. User clicks Submit
4. Frontend sends POST to /api/chatbot/submit
5. Backend validates data
6. Backend sanitizes input
7. Backend sends email (async)
8. Backend saves to JSON (async)
9. Backend returns success response
10. Frontend shows success message

Admin Flow:
───────────

1. Admin visits /admin/chatbot
2. Admin enters credentials
3. Frontend sends POST to /api/chatbot/login
4. Backend validates credentials
5. Backend creates session cookie
6. Backend returns success
7. Frontend redirects to /dashboard/chatbot
8. Dashboard sends GET to /api/chatbot/submissions
9. Backend checks authentication
10. Backend reads submissions.json
11. Backend returns submissions array
12. Dashboard displays in table
```

---

## File Structure

```
inheritx_website/site/
│
├── app/
│   ├── api/chatbot/                    # Backend API Routes
│   │   ├── submit/
│   │   │   └── route.js               # Form submission handler
│   │   ├── login/
│   │   │   └── route.js               # Admin login
│   │   ├── logout/
│   │   │   └── route.js               # Admin logout
│   │   └── submissions/
│   │       └── route.js               # Fetch submissions (protected)
│   │
│   ├── admin/chatbot/                  # Admin Login Page
│   │   └── page.jsx                   # Login UI
│   │
│   ├── dashboard/chatbot/              # Admin Dashboard
│   │   └── page.jsx                   # Submissions table UI
│   │
│   └── components/chatbot/             # Chatbot Component
│       └── ChatBot.jsx                # (existing, updated to use API)
│
├── submissions.json                    # Data storage (gitignored)
├── .env.local                         # Environment variables (gitignored)
├── .gitignore                         # Updated with .env and submissions.json
│
└── Documentation/
    ├── CHATBOT_README.md              # Complete guide
    ├── QUICK_SETUP.md                 # 5-minute setup
    ├── FRONTEND_INTEGRATION_EXAMPLE.md # Code examples
    ├── SETUP_ENV_FILE.txt             # .env template
    ├── PROJECT_SUMMARY.md             # Overview
    └── ARCHITECTURE.md                # This file
```

---

## Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND                               │
├─────────────────────────────────────────────────────────────┤
│  • Next.js 14 (React Framework)                            │
│  • React 18 (UI Library)                                   │
│  • Inline Styles (No CSS dependencies)                     │
│  • Lucide React (Icons - already installed)                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      BACKEND                                │
├─────────────────────────────────────────────────────────────┤
│  • Next.js 14 API Routes (Express-like)                    │
│  • Node.js (JavaScript Runtime)                            │
│  • Nodemailer (Email Service)                              │
│  • fs/promises (File System)                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    DATA STORAGE                             │
├─────────────────────────────────────────────────────────────┤
│  • JSON File (submissions.json)                            │
│  • Easily upgradable to PostgreSQL/MongoDB                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  AUTHENTICATION                             │
├─────────────────────────────────────────────────────────────┤
│  • Session-based (Cookies)                                 │
│  • HttpOnly, SameSite: strict                              │
│  • 24-hour expiration                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   EMAIL SERVICE                             │
├─────────────────────────────────────────────────────────────┤
│  • Nodemailer                                              │
│  • Gmail SMTP                                              │
│  • TLS/SSL Encryption                                      │
│  • HTML Templates                                          │
└─────────────────────────────────────────────────────────────┘
```

---

## Security Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    SECURITY LAYERS                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Layer 1: Input Validation                                 │
│  ├─ Email format validation                                │
│  ├─ Required field checks                                  │
│  └─ Data type validation                                   │
│                                                             │
│  Layer 2: Input Sanitization                               │
│  ├─ XSS prevention (HTML escaping)                         │
│  ├─ Special character handling                             │
│  └─ SQL injection prevention (N/A - using JSON)            │
│                                                             │
│  Layer 3: Authentication                                   │
│  ├─ Session-based login                                    │
│  ├─ HttpOnly cookies                                       │
│  ├─ SameSite: strict (CSRF protection)                     │
│  └─ 24-hour session expiration                             │
│                                                             │
│  Layer 4: Authorization                                    │
│  ├─ Protected endpoints                                    │
│  ├─ Cookie validation                                      │
│  └─ 401 for unauthorized requests                          │
│                                                             │
│  Layer 5: Environment Variables                            │
│  ├─ Credentials in .env.local                              │
│  ├─ Gitignored (never committed)                           │
│  └─ Never exposed to client                                │
│                                                             │
│  Layer 6: Email Security                                   │
│  ├─ Gmail App Password (not regular)                       │
│  ├─ TLS/SSL encryption                                     │
│  └─ No passwords in logs                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## API Endpoints Summary

```
┌────────────────────────────────────────────────────────────────┐
│  Endpoint                      Method   Auth      Purpose      │
├────────────────────────────────────────────────────────────────┤
│  /api/chatbot/submit           POST     No        Form submit  │
│  /api/chatbot/login            POST     No        Admin login  │
│  /api/chatbot/login            GET      No        Check auth   │
│  /api/chatbot/logout           POST     No        Logout       │
│  /api/chatbot/submissions      GET      Yes       Get data     │
└────────────────────────────────────────────────────────────────┘
```

---

## Request/Response Flow

### Form Submission

```
┌──────────┐       ┌──────────┐       ┌──────────┐       ┌──────────┐
│          │ POST  │          │ Send  │          │ Save  │          │
│ Frontend ├──────►│   API    ├──────►│  Email   │       │  JSON    │
│          │       │  Route   │       │ Service  │       │  File    │
│          │◄──────┤          │       │          │       │          │
└──────────┘  JSON └──────────┘       └──────────┘       └──────────┘
   Response        {success: true}

Request:
POST /api/chatbot/submit
Content-Type: multipart/form-data

FormData {
  name: "John Doe"
  email: "john@example.com"
  phone: "1234567890"
  category: "new-project"
  requirements: "..."
  submittedAt: "2024-11-05T12:00:00.000Z"
}

Response:
{
  "success": true,
  "message": "Submission received successfully",
  "emailSent": true,
  "savedToJSON": true,
  "leadId": 1699999999999,
  "timestamp": "2024-11-05T12:00:00.000Z"
}
```

### Admin Login

```
┌──────────┐       ┌──────────┐       ┌──────────┐
│          │ POST  │          │ Check │          │
│  Login   ├──────►│   API    ├──────►│  .env    │
│   Page   │       │  Route   │       │  Vars    │
│          │◄──────┤          │       │          │
└──────────┘  JSON └──────────┘       └──────────┘
   + Cookie        Set-Cookie

Request:
POST /api/chatbot/login
Content-Type: application/json

{
  "username": "admin",
  "password": "1234"
}

Response:
Set-Cookie: admin_session=xxxxx; HttpOnly; SameSite=strict

{
  "success": true,
  "message": "Login successful",
  "user": { "username": "admin" }
}
```

### Fetch Submissions

```
┌──────────┐       ┌──────────┐       ┌──────────┐
│          │  GET  │          │ Read  │          │
│Dashboard ├──────►│   API    ├──────►│  JSON    │
│          │Cookie │  Route   │       │  File    │
│          │◄──────┤          │       │          │
└──────────┘  JSON └──────────┘       └──────────┘
   Display         Return data

Request:
GET /api/chatbot/submissions
Cookie: admin_session=xxxxx

Response:
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
      "requirements": "..."
    }
  ],
  "total": 1
}
```

---

## Deployment Architecture

```
Development:
────────────
localhost:3000
├─ Next.js Dev Server
├─ Hot Module Replacement
└─ .env.local

Production:
───────────
your-domain.com
├─ Next.js Production Build
├─ Optimized & Minified
├─ HTTPS (SSL/TLS)
├─ Environment Variables (Platform)
└─ Database (Optional upgrade)

Recommended Platforms:
• Vercel (Native Next.js support)
• Netlify
• AWS (EC2, ECS, or App Runner)
• DigitalOcean App Platform
• Heroku
```

---

## Performance Considerations

```
✅ Lightweight Dependencies
  - Nodemailer only (~500KB)
  - No heavy frameworks
  - Inline styles (no CSS bundle)

✅ Efficient Data Storage
  - JSON file (fast read/write)
  - Latest-first sorting
  - No complex queries

✅ Async Operations
  - Email sending (non-blocking)
  - JSON writing (non-blocking)
  - Fast response times

✅ Optimized Frontend
  - React 18 (automatic batching)
  - Next.js 14 (optimized rendering)
  - Minimal re-renders
```

---

## Scalability Path

```
Current: JSON File
↓
Small Scale: SQLite (single file DB)
↓
Medium Scale: PostgreSQL (relational)
↓
Large Scale: PostgreSQL + Redis (caching)
↓
Enterprise: PostgreSQL + Redis + Queue (RabbitMQ/Bull)

Email Scaling:
Current: Gmail SMTP (free, 500/day limit)
↓
Medium: SendGrid/Mailgun (99% deliverability)
↓
Large: AWS SES (cost-effective, high volume)
```

---

## Monitoring & Logging

```
Current Logging:
├─ Console logs (development)
├─ Email success/failure
└─ JSON write status

Production Recommendations:
├─ Error tracking (Sentry)
├─ Analytics (Google Analytics)
├─ Server monitoring (PM2, New Relic)
├─ Log aggregation (Winston, Bunyan)
└─ Uptime monitoring (Pingdom, UptimeRobot)
```

---

**🎉 Architecture Complete!**

This is a production-ready, scalable, and secure chat module architecture.

