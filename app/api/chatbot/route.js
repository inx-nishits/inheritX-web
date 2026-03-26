import { NextResponse } from 'next/server'

/**
 * Chatbot API Route
 * 
 * This endpoint handles chatbot messages. You can integrate with:
 * - OpenAI GPT API
 * - Google Gemini
 * - Custom AI model
 * - Or implement rule-based responses
 * 
 * For now, it provides intelligent pre-defined responses based on keywords.
 */

export async function POST(request) {
  try {
    const body = await request.json()
    const { message, history } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      )
    }

    // Convert message to lowercase for keyword matching
    const lowerMessage = message.toLowerCase()

    // Generate response based on keywords (you can replace this with AI API calls)
    let botResponse = generateResponse(lowerMessage)

    // Return the response
    return NextResponse.json({
      message: botResponse,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Chatbot API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process message', message: 'I apologize, but I\'m having trouble responding right now. Please contact us at contact@inheritx.com' },
      { status: 500 }
    )
  }
}

/**
 * Generate response based on user message
 * Replace this with actual AI integration (OpenAI, etc.)
 */
function generateResponse(message) {
  // Hire dedicated team
  if (
    message.includes('hire') && (message.includes('team') || message.includes('developer'))
  ) {
    return "👥 **Hire Dedicated Development Team**\n\nGet access to our expert developers who work exclusively on your project!\n\n✅ **What You Get:**\n• Dedicated team of 2-10+ developers\n• Daily standups & weekly reports\n• Full control over team\n• Flexible engagement models\n• Direct communication via Slack/Teams\n\n💼 **Available Roles:**\n• Mobile Developers (iOS, Android, Flutter)\n• Web Developers (React, Next.js, Python, Node.js)\n• AI/ML Engineers\n• UI/UX Designers\n• QA Engineers\n• DevOps Specialists\n\n📊 **Hiring Models:**\n🔹 **Monthly** - Full-time dedicated resources\n🔹 **Part-time** - 4 hours/day engagement\n🔹 **Project-based** - Fixed scope & timeline\n\n💰 **Benefits:**\n✅ 40-60% cost savings vs in-house\n✅ No recruitment hassle\n✅ Vetted & experienced developers\n✅ Quick onboarding (7-14 days)\n✅ Flexible scaling up/down\n\n📧 **Get Started:**\nEmail: contact@inheritx.com\nWhatsApp: +91 84870 06480\n\n🎯 Let's build your dream team!"
  }

  // Start new project
  if (
    message.includes('start') && message.includes('project')
  ) {
    return "🚀 **Start Your New Project with InheritX**\n\nLet's turn your vision into reality! Here's how we work:\n\n✅ **Our Process:**\n\n**1️⃣ Discovery (Week 1-2)**\n• Requirement analysis\n• Technical feasibility study\n• Project roadmap\n• Cost & timeline estimation\n\n**2️⃣ Design (Week 2-4)**\n• UI/UX wireframes\n• Interactive prototypes\n• Design approval\n• Technical architecture\n\n**3️⃣ Development (Week 4-16+)**\n• Agile sprints (2-week cycles)\n• Regular demos\n• Continuous testing\n• Code reviews\n\n**4️⃣ Launch & Support**\n• App store deployment\n• Server setup & monitoring\n• User training\n• Ongoing maintenance\n\n📱 **Popular Projects:**\n• Mobile Apps (iOS, Android, Cross-platform)\n• Web Applications (SaaS, E-commerce, Portals)\n• AI/ML Solutions (Chatbots, Analytics, Automation)\n• Enterprise Systems (CRM, ERP, Custom)\n\n💰 **What We Need to Start:**\n1. Project brief/idea\n2. Target audience\n3. Key features/requirements\n4. Timeline expectations\n5. Budget range\n\n🎁 **FREE Consultation Includes:**\n✅ Project feasibility analysis\n✅ Technology recommendations\n✅ Detailed proposal & quote\n✅ Timeline & milestones\n✅ Team composition\n\n📧 **Let's Get Started:**\nEmail: contact@inheritx.com\nWhatsApp: +91 84870 06480\n\nReady to discuss your project?"
  }

  // Apply for job
  if (
    message.includes('apply') && (message.includes('job') || message.includes('career'))
  ) {
    return "💼 **Join the InheritX Team!**\n\nWe're always looking for talented individuals who are passionate about technology!\n\n✅ **Why Work at Inheritx?**\n• Work on 850+ cutting-edge projects\n• Global client exposure (India, USA, Australia, UK)\n• Latest technologies (AI/ML, Flutter, React, Next.js)\n• Remote-friendly culture\n• Competitive compensation\n• Learning & growth opportunities\n• Collaborative team environment\n\n🎯 **Current Openings:**\n\n**Mobile Development:**\n• Flutter Developers\n• iOS Developers (Swift)\n• Android Developers (Kotlin)\n• React Native Developers\n\n**Web Development:**\n• Next.js/React Developers\n• Python Developers (Django, FastAPI)\n• Node.js Developers\n• Full Stack Developers\n\n**AI/ML:**\n• Machine Learning Engineers\n• AI/ML Developers\n• Data Scientists\n• NLP Engineers\n\n**Others:**\n• UI/UX Designers\n• DevOps Engineers\n• QA Engineers\n• Project Managers\n\n📄 **How to Apply:**\n\n**1️⃣ Email Your Resume:**\nhr@Inheritx.com\n\n**2️⃣ Include:**\n• Updated resume/CV\n• Portfolio/GitHub (if applicable)\n• Position you're applying for\n• Current & expected CTC\n• Notice period\n\n**3️⃣ Our Hiring Process:**\n• Resume screening (2-3 days)\n• Technical assessment\n• HR interview\n• Technical interview\n• Final discussion\n\n💡 **What We Look For:**\n✅ Strong technical skills\n✅ Problem-solving ability\n✅ Team collaboration\n✅ Passion for learning\n✅ 2+ years experience (varies by role)\n\n🌍 **Office Locations:**\n🇮🇳 Ahmedabad, India (HQ)\n🇺🇸 New York, USA\n🇩🇪 Germany\n🇯🇵 Tokyo, Japan\n\n📧 **Apply Now:**\nEmail: hr@Inheritx.com\nWebsite: www.Inheritx.com/join-our-team\n\nLet's build amazing things together! 🚀"
  }

  // Greeting responses
  if (
    message.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)
  ) {
    return "Hello! 👋 Thank you for reaching out to InheritX Solutions.\n\n🎯 We've successfully delivered 850+ mobile and web applications with 400+ verified 5-star reviews!\n\nHow can we help transform your business today?"
  }

  // Services inquiries
  if (
    message.includes('service') ||
    message.includes('what do you do') ||
    message.includes('what do you offer')
  ) {
    return "InheritX offers comprehensive IT services including:\n\n• AI & Machine Learning Development\n• Web Application Development\n• Mobile App Development (iOS & Android)\n• Custom Software Solutions\n• Cloud & DevOps Services\n• Process Automation\n• UI/UX Design\n\nWhich service are you interested in learning more about?"
  }

  // AI/ML inquiries
  if (
    message.includes('ai') ||
    message.includes('artificial intelligence') ||
    message.includes('machine learning') ||
    message.includes('ml') ||
    message.includes('chatbot')
  ) {
    return "🤖 AI & Machine Learning Expertise!\n\nInheritX transforms businesses with cutting-edge AI solutions:\n\n✅ **AI Solutions**\n• Custom AI Models (TensorFlow, PyTorch)\n• Natural Language Processing (NLP)\n• Computer Vision & OCR\n• Generative AI (LLMs, GPT integration)\n• AI Agents & Automation\n• Predictive Analytics\n\n✅ **ML Services**\n• Supervised & Unsupervised Learning\n• Deep Learning Models\n• Recommendation Systems\n• Data Pipelines & Feature Engineering\n• MLOps & Model Deployment\n\n✅ **Technologies**\n• Python (FastAPI, Django)\n• OpenAI, Gemini, Anthropic\n• AWS, GCP, Azure ML\n• Vector Databases\n• N8N Automation\n\n🎯 **Use Cases:**\n• Intelligent Chatbots (like this one!)\n• Document Processing\n• Image Recognition\n• Business Intelligence\n• Process Automation\n\n💡 From POC to production, we deliver AI that drives ROI!\n\nWhat AI challenge are you facing?"
  }

  // Mobile app inquiries
  if (
    message.includes('mobile') ||
    message.includes('app development') ||
    message.includes('ios') ||
    message.includes('android')
  ) {
    return "📱 Mobile App Development Excellence!\n\nInheritX has built 850+ successful mobile apps. We specialize in:\n\n✅ **Native Development**\n• iOS (Swift, SwiftUI, Objective-C)\n• Android (Kotlin, Java)\n\n✅ **Cross-Platform**\n• Flutter (Fast & Beautiful)\n• React Native (JavaScript)\n• Xamarin (.NET)\n• Ionic (Hybrid)\n\n🌟 **Recent Projects:**\n• E-Mobility App (Australia) - EV charging management\n• Leez App - PropTech rental platform\n• Player-Coach - Sports skill development\n• Owl Ring - IoT wearable companion\n\n💡 From MVP to enterprise-scale, we deliver apps users love!\n\nInterested in a specific platform?"
  }

  // Web development inquiries
  if (
    message.includes('web') ||
    message.includes('website') ||
    message.includes('web app')
  ) {
    return "🌐 Web Development Mastery!\n\nWe create high-performance, SEO-optimized web applications:\n\n✅ **Modern Frameworks**\n• Next.js (React) - SSR, SSG, ISR\n• React.js - Single Page Apps\n• Angular.js - Enterprise Apps\n• Vue.js - Progressive Apps\n\n✅ **Backend Power**\n• Node.js - Real-time apps\n• Python (Django, Flask, FastAPI)\n• PHP (Laravel, CodeIgniter)\n• Java - Enterprise solutions\n\n✅ **E-Commerce**\n• Magento, WordPress, Shopify\n• Custom solutions\n\n🌟 **Featured Projects:**\n• Venuorama - Event venue marketplace\n• Tourwit - Travel + E-commerce platform\n• GoMeal - Food delivery system\n• Culturafi - Job matching PWA\n\n🚀 Cloud-ready, scalable, and secure!\n\nWhat's your project vision?"
  }

  // Pricing inquiries
  if (
    message.includes('price') ||
    message.includes('cost') ||
    message.includes('pricing') ||
    message.includes('how much') ||
    message.includes('budget') ||
    message.includes('timeline') ||
    message.includes('how long')
  ) {
    return "💰 Transparent Pricing & Timeline\n\n**Project Pricing Factors:**\n• Project complexity & scope\n• Technology stack & platforms\n• Team size & expertise level\n• Features & third-party integrations\n• Design complexity\n• Maintenance & support\n\n**Typical Timelines:**\n📱 **Mobile App (MVP):** 8-16 weeks\n🌐 **Web Application:** 6-14 weeks\n🤖 **AI/ML Solutions:** 4-12 weeks\n🏢 **Enterprise Systems:** 12-24 weeks\n\n**Our Approach:**\n✅ Fixed-price projects\n✅ Dedicated team hiring\n✅ Milestone-based payments\n✅ 100% transparency\n✅ No hidden costs\n\n**💡 Free Consultation Includes:**\n• Requirement analysis\n• Technology recommendations\n• Detailed cost estimate\n• Project timeline\n• Team composition\n\n📧 **Get Your Custom Quote:**\nContact us at contact@inheritx.com or\nWhatsApp: +91 84870 06480\n\nReady to discuss your project?"
  }

  // Contact/meeting requests
  if (
    message.includes('contact') ||
    message.includes('meet') ||
    message.includes('call') ||
    message.includes('consultation') ||
    message.includes('demo')
  ) {
    return "I'd love to connect you with our team! Here's how you can reach us:\n\n📧 Email: contact@inheritx.com\n📱 WhatsApp: +91 84870 06480\n\nOr you can visit our Contact page to schedule a free consultation. Would you prefer email or a phone call?"
  }

  // Portfolio/work inquiries
  if (
    message.includes('portfolio') ||
    message.includes('work') ||
    message.includes('projects') ||
    message.includes('case study') ||
    message.includes('examples') ||
    message.includes('recent')
  ) {
    return "🏆 25 Featured Projects Across Industries!\n\n**🌐 Web Applications (13 projects)**\n• Venuorama - Event venue marketplace (India)\n• E-Mobility - EV charging system (Australia)\n• Strum - Entertainment booking (UK/USA)\n• QDIS - Facility management (Australia)\n• Tourwit - Travel + E-commerce\n• Blackbox - Construction timelapse (Australia)\n• GoMeal - Food delivery platform\n• Rugby Planner - Sports training\n\n**📱 Mobile Apps (12 projects)**\n• Leez - Digital rental platform (Flutter)\n• E-Mobility App (Flutter)\n• Owl Ring - IoT wearable (Flutter, BLE)\n• Triune - Emergency alerts (Kotlin, Swift)\n• Player-Coach - Sports development\n• Regensis - Medical appointments\n• Koradream - Football talent discovery\n• Crack Detection - AI-powered QC\n\n**🌍 Industries Served:**\n✅ PropTech • Healthcare • Sports\n✅ E-commerce • EdTech • EventTech\n✅ Manufacturing • AgriTech • IoT\n\n**📊 Success Metrics:**\n• 850+ apps delivered\n• 400+ 5-star reviews\n• 100% on-time delivery\n\n🔗 Visit our Portfolio page for detailed case studies!\n\nWhich industry interests you?"
  }

  // Technology stack inquiries
  if (
    message.includes('technology') ||
    message.includes('tech stack') ||
    message.includes('technologies') ||
    message.includes('tools')
  ) {
    return "We work with cutting-edge technologies:\n\n🤖 AI/ML: TensorFlow, PyTorch, OpenAI, Hugging Face\n💻 Frontend: React, Next.js, Vue, Angular\n⚙️ Backend: Node.js, Python, PHP, Java\n📱 Mobile: React Native, Flutter, Swift, Kotlin\n☁️ Cloud: AWS, Google Cloud, Azure\n\nWhich technology are you interested in?"
  }

  // Team/company inquiries
  if (
    message.includes('who are you') ||
    message.includes('about') ||
    message.includes('company') ||
    message.includes('team')
  ) {
    return "InheritX is a leading AI, Web, and Mobile App Development Company with presence in India, USA, Germany, and Japan. Since 2011, we've been helping businesses transform through innovative technology solutions.\n\n✨ 100% project delivery success\n✨ Expert team of AI/ML specialists & developers\n✨ Trusted by businesses worldwide\n\nWant to learn more about our team and values?"
  }

  // Location inquiries
  if (
    message.includes('location') ||
    message.includes('where are you') ||
    message.includes('office') ||
    message.includes('where')
  ) {
    return "🌍 Global Presence, Local Excellence!\n\n**Our Offices:**\n\n🇮🇳 **India (HQ)**\n8th Floor, Panchdhara Complex,\nS G Highway, Bodakdev,\nAhmedabad - 380054, Gujarat\n\n🇺🇸 **United States**\n222 Broadway,\nNew York, NY 10038\n\n🇩🇪 **Germany**\nKloster 3,\n79713 Bad Säckingen\n\n🇯🇵 **Japan**\n1-36-13 Hashiba, Taito-ku,\nTokyo\n\n📞 **Contact:**\n• Email: contact@inheritx.com\n• WhatsApp: +91 84870 06480\n\n💼 We serve clients across 20+ countries worldwide!\n\nWhere are you based?"
  }

  // Hiring/career inquiries
  if (
    message.includes('job') ||
    message.includes('career') ||
    message.includes('hiring') ||
    message.includes('join your team')
  ) {
    return "Exciting that you're interested in joining InheritX! 🎉\n\nWe're always looking for talented individuals. Visit our 'Join Our Team' page to:\n\n• View current openings\n• Learn about our culture\n• Submit your application\n\nWhat type of role are you interested in?"
  }

  // Thank you messages
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're very welcome! 😊 Is there anything else I can help you with? Feel free to ask any questions about our services, or I can connect you with our team for a detailed discussion."
  }

  // Goodbye messages
  if (
    message.includes('bye') ||
    message.includes('goodbye') ||
    message.includes('see you')
  ) {
    return "Thank you for chatting with InheritX! 👋 Feel free to reach out anytime at contact@inheritx.com or +91 84870 06480 (Sales) / +91 8160047106 (Career). Have a great day!"
  }

  // Default response
  return "Thanks for reaching out! 💬\n\nI'd love to help you find the right solution. InheritX specializes in:\n\n✅ **Mobile Apps** (iOS, Android, Flutter, React Native)\n✅ **Web Applications** (Next.js, React, Python, Node.js)\n✅ **AI & ML Solutions** (Custom models, NLP, Computer Vision)\n✅ **Cloud & DevOps** (AWS, GCP, Azure)\n✅ **UI/UX Design** (Modern, user-centric designs)\n\n**🎯 Quick Stats:**\n• 850+ apps delivered\n• 400+ 5-star reviews\n• Since 2011\n• Global presence (India, USA, Germany, Japan)\n\n**💡 How can I assist you today?**\nYou can ask about:\n📱 Mobile or web development\n🤖 AI/ML solutions\n💼 Our portfolio & projects\n💰 Pricing & timeline\n👥 Hiring developers\n📞 Scheduling a consultation\n\n📧 Direct contact: contact@inheritx.com\n📱 WhatsApp: +91 84870 06480\n\nWhat would you like to know?"
}

// Optional: GET endpoint for health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Chatbot API is running'
  })
}

