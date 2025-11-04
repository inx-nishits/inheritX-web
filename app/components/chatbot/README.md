# InheritX AI Chatbot

An intelligent, AI-powered chatbot widget similar to the [IndiaNIC website](https://www.indianic.com/) chatbot functionality.

## Features

- 🤖 **AI-Powered Responses**: Intelligent keyword-based responses with easy integration for AI APIs
- 💬 **Real-time Chat Interface**: Smooth, animated chat experience
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern Design**: Beautiful gradient UI matching InheritX brand colors
- ⚡ **Fast & Lightweight**: Optimized performance with minimal dependencies
- 🔔 **Notification Badge**: Shows unread message count
- ⌨️ **Typing Indicator**: Visual feedback when bot is responding
- 🎯 **Smart Context**: Understands user intent and provides relevant information

## Components

### 1. ChatBot Component (`ChatBot.jsx`)
The main chat widget component with:
- Floating chat button (bottom-right corner)
- Expandable chat window
- Message history
- User input field
- Minimize/maximize controls

### 2. API Route (`/api/chatbot/route.js`)
Backend endpoint that:
- Processes user messages
- Returns intelligent responses
- Can be integrated with OpenAI, Google Gemini, or custom AI models

### 3. Styles (`globals.css`)
Custom CSS for:
- Chat window styling
- Animations (slide-up, fade-in, float, bounce)
- Responsive breakpoints
- Brand-matched color scheme

## How It Works

1. **User clicks the floating chat button** → Chat window opens with welcome message
2. **User types a message** → Message sent to `/api/chatbot` endpoint
3. **AI processes the message** → Returns contextual response based on keywords
4. **Response displayed** → User sees bot's reply with typing indicator

## Welcome Message

When users first open the chat, they see:

> "Hi there! 👋
>
> Start having a chat with our AI Bot. Let us know what you're up to and connect with our team in a day."

This matches the IndiaNIC website's greeting style.

## Supported Topics

The chatbot can intelligently respond to inquiries about:

- ✅ Services (AI, Web, Mobile Development)
- ✅ Technologies & Tech Stack
- ✅ Pricing & Budget
- ✅ Portfolio & Case Studies
- ✅ Contact Information
- ✅ Company Information
- ✅ Career Opportunities
- ✅ Office Locations
- ✅ General Greetings

## Configuration

### Basic Usage
The chatbot is already integrated into the main layout (`app/layout.jsx`) and will appear on all pages.

### Integrating with AI Services

#### Option 1: OpenAI Integration
Replace the `generateResponse()` function in `app/api/chatbot/route.js`:

```javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  const { message, history } = await request.json();
  
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are InheritX's AI assistant. Help users learn about our services in AI, web development, and mobile apps."
      },
      { role: "user", content: message }
    ],
  });

  return NextResponse.json({
    message: response.choices[0].message.content,
    timestamp: new Date().toISOString()
  });
}
```

#### Option 2: Google Gemini Integration
```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function POST(request) {
  const { message } = await request.json();
  
  const result = await model.generateContent(message);
  const response = await result.response;
  
  return NextResponse.json({
    message: response.text(),
    timestamp: new Date().toISOString()
  });
}
```

### Environment Variables

Add to your `.env.local` file:

```env
# For OpenAI
OPENAI_API_KEY=your_openai_api_key_here

# For Google Gemini
GEMINI_API_KEY=your_gemini_api_key_here
```

## Customization

### Change Brand Colors
Edit `app/styles/globals.css`:

```css
/* Primary gradient (header, buttons) */
background: linear-gradient(135deg, #546EA4 0%, #3d5278 100%);

/* Change to your brand colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Modify Welcome Message
Edit `app/components/chatbot/ChatBot.jsx`:

```javascript
const [messages, setMessages] = useState([
  {
    id: 1,
    text: "Your custom welcome message here!",
    sender: 'bot',
    timestamp: new Date()
  }
])
```

### Adjust Chat Window Size
Edit `app/styles/globals.css`:

```css
.chat-window {
  width: 380px;  /* Change width */
  height: 600px; /* Change height */
}
```

## Responsive Behavior

- **Desktop**: Chat window appears as 380x600px popup
- **Tablet**: Same as desktop, max-width: 400px
- **Mobile** (<480px): Full-screen chat experience

## Animations

The chatbot includes several smooth animations:

- `slideUp` - Chat window opening
- `fadeIn` - New messages appearing
- `float` - Floating chat button subtle movement
- `bounce` - Notification badge animation
- `pulse` - Online status indicator
- `typing` - Typing indicator dots

## Performance

- **Lazy Loading**: Component loads after page renders
- **Optimized Re-renders**: Uses React hooks efficiently
- **Minimal Dependencies**: Only uses `lucide-react` for icons
- **Small Bundle Size**: ~15KB total (component + styles)

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## Analytics & Tracking

To track chatbot usage, add analytics events:

```javascript
// In ChatBot.jsx handleSendMessage()
if (window.gtag) {
  window.gtag('event', 'chatbot_message', {
    message_type: 'user',
    message_length: inputMessage.length
  });
}
```

## Future Enhancements

Possible improvements:

1. **Conversation History**: Store chat history in localStorage
2. **User Authentication**: Link chats to logged-in users
3. **File Uploads**: Allow users to share files
4. **Voice Input**: Speech-to-text functionality
5. **Multilingual**: Support multiple languages
6. **Admin Dashboard**: View and manage conversations
7. **Live Chat Transfer**: Hand off to human agents
8. **Email Transcripts**: Send chat history via email

## Troubleshooting

### Chat button not appearing
- Check that `ChatBot` is imported in `layout.jsx`
- Verify CSS is loading correctly
- Check browser console for errors

### API not responding
- Verify `/api/chatbot/route.js` exists
- Check network tab for API errors
- Ensure proper error handling

### Styling issues
- Clear browser cache
- Check CSS specificity conflicts
- Verify `globals.css` is imported

## Credits

Inspired by the [IndiaNIC website](https://www.indianic.com/) chatbot design and functionality.

Built with:
- Next.js 14
- React 18
- Lucide React (icons)

---

For questions or support, contact: contact@inheritx.com

