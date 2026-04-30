// Centralized navigation data used by both desktop and mobile menus
// Each item can be a simple link or a mega menu with columns

const menuData = [
  {
    label: 'About Us',
    href: '/about-us',
    type: 'link'
  },
  {
    label: 'Services',
    href: '/services',
    type: 'mega',
    columns: [
      {
        title: 'Mobile App Development',
        items: [
          { label: 'iPhone App Development', href: '/services/iphone-app-development' },
          { label: 'Android App Development', href: '/services/android-app-development' },
          { label: 'Kotlin App Development', href: '/services/kotlin-app-development' },
          { label: 'Flutter App Development', href: '/services/flutter-app-development' },
          { label: 'React Native App Development', href: '/services/react-native-app-development' },
          { label: 'iPad/Tablet App Development', href: '/services/ipad-tablet-app-development' },
          { label: 'Xamarin App Development', href: '/services/xamarin-app-development' },
          { label: 'Ionic App Development', href: '/services/ionic-app-development' }
        ]
      },
      {
        title: 'Web Development',
        items: [
          { label: 'Python Development', href: '/services/python-development' },
          { label: 'NextJS Development', href: '/services/nextjs-development' },
          { label: 'Laravel Development', href: '/services/laravel-development' },
          { label: 'ReactJS Development', href: '/services/reactjs-development' },
          { label: 'Node.js Development', href: '/services/nodejs-development' },
          { label: 'PHP Development', href: '/services/php-development' },
          { label: 'JAVA Development', href: '/services/java-development' },
          { label: 'WordPress Development', href: '/services/wordpress-development' },
          { label: 'Magento Development', href: '/services/magento-development' }
        ]
      },
      {
        title: 'AI / ML',
        items: [
          { label: 'Machine Learning Development', href: '/services/machine-learning-development' },
          { label: 'AI Agents', href: '/services/ai-agents' },
          { label: 'AI & ML Model Expertise', href: '/services/ai-ml-model-expertise' }
        ]
      },
      {
        title: 'Other Services',
        items: [
          { label: 'AWS Services', href: '/services/aws-services' },
          { label: 'Google Cloud Services', href: '/services/google-cloud-services' },
          { label: 'PWA Development', href: '/services/pwa-development' },
          { label: 'SEO Services', href: '/services/seo-services' },
          { label: 'IOT Development', href: '/services/iot-development' }
        ]
      }
    ]
  },
  {
    label: 'AI Expertise',
    href: '#',
    type: 'mega-cards',
    columns: [
      {
        title: 'AI Integration & Models',
        items: [
          { label: 'Custom Machine Learning', href: '/services/machine-learning-development' },
          { label: 'Intelligent AI Agents', href: '/services/ai-agents' },
          { label: 'Model Tuning & Strategy', href: '/services/ai-ml-model-expertise' },
        ]
      },
      {
        title: 'AI-Powered Ecosystems',
        items: [
          { label: 'Scalable Cloud Architecture', href: '/services/aws-services' },
          { label: 'AI-Driven Web Platforms', href: '/services/nextjs-development' },
          { label: 'Automated Infrastructure', href: '/services/google-cloud-services' },
        ]
      },
      {
        title: 'Build Your AI Team',
        items: [
          { label: 'Hire AI & ML Engineers', href: '/hire-experts/ai-engineers' },
          { label: 'Hire Full-Stack Developers', href: '/hire-experts/fullstack-developers' },
          { label: 'Hire Cloud Architects', href: '/hire-experts/cloud-engineers' },
        ]
      }
    ],
    promoCards: [
      {
        subtitle: 'GENAI',
        title: 'Automate with AI',
        description: 'Leverage custom AI agents for your enterprise.',
        href: '/services/ai-agents',
        bgImage: '/image/page-title/herobanner-final.jpg'
      },
      {
        subtitle: 'FOUNDATIONS',
        title: 'AI-Native Platforms',
        description: 'Scalable cloud architecture and modern full-stack engineering.',
        href: '/services/aws-services',
        bgImage: '/image/page-title/herobanner-final.jpg'
      }
    ]
  },
  {
    label: 'Hire Experts',
    href: '/hire-experts',
    type: 'mega',
    columns: [
      {
        title: 'Hire Experts by Role',
        items: [
          { label: 'Hire AI Engineers', href: '/hire-experts/ai-engineers' },
          { label: 'Hire ML Engineers', href: '/hire-experts/ml-engineers' },
          { label: 'Hire Data Engineers', href: '/hire-experts/data-engineers' },
          { label: 'Hire DevOps & SRE Engineers', href: '/hire-experts/devops-sre-engineers' },
          { label: 'Hire Cloud Engineers', href: '/hire-experts/cloud-engineers' },
          { label: 'Hire Full-Stack Developers', href: '/hire-experts/fullstack-developers' },
          { label: 'Hire Frontend Developers', href: '/hire-experts/frontend-developers' },
          { label: 'Hire Backend Developers', href: '/hire-experts/backend-developers' },
          { label: 'Hire Mobile App Developers', href: '/hire-experts/mobile-app-developers' },
          { label: 'Hire QA Automation Engineers', href: '/hire-experts/qa-automation-engineers' },
          { label: 'Hire Cybersecurity Engineers', href: '/hire-experts/cybersecurity-engineers' },
          { label: 'Hire Salesforce Developers', href: '/hire-experts/salesforce-developers' },
          { label: 'Hire Blockchain Developers', href: '/hire-experts/blockchain-developers' },
          { label: 'Hire Embedded & IoT Engineers', href: '/hire-experts/embedded-iot-engineers' },
          { label: 'Hire Solution Architects', href: '/hire-experts/solution-architects' },
          { label: 'Hire UI/UX Designers', href: '/hire-experts/ui-ux-designers' }
        ]
      },
      {
        title: 'Hire Developers by Technology',
        items: [
          { label: 'Hire React Developers', href: '/hire-experts/reactjs-developer' },
          { label: 'Hire Angular Developers', href: '/hire-experts/angularjs-developer' },
          { label: 'Hire Next.js Developers', href: '/hire-experts/nextjs-developer' },
          { label: 'Hire Node.js Developers', href: '/hire-experts/nodejs-developer' },
          { label: 'Hire Python Developers', href: '/hire-experts/python-developer' },
          { label: 'Hire Java Developers', href: '/hire-experts/java-developers' },
          { label: 'Hire .NET Developers', href: '/hire-experts/asp-developer' },
          { label: 'Hire Flutter Developers', href: '/hire-experts/flutter-developer' },
          { label: 'Hire React Native Developers', href: '/hire-experts/react-native-developer' },
          { label: 'Hire AWS Developers', href: '/hire-experts/aws-developers' },
          { label: 'Hire Azure Developers', href: '/hire-experts/azure-developers' },
          { label: 'Hire GCP Developers', href: '/hire-experts/gcp-developers' }
        ]
      },
      {
        title: 'Hire AI & Data Experts',
        items: [
          { label: 'Hire LLM Engineers', href: '/hire-experts/llm-engineers' },
          { label: 'Hire Prompt Engineers', href: '/hire-experts/prompt-engineers' },
          { label: 'Hire Data Scientists', href: '/hire-experts/data-scientists' },
          { label: 'Hire MLOps Engineers', href: '/hire-experts/mlops-engineers' }
        ]
      },
      {
        title: 'Hiring Models',
        items: [
          { label: 'Staff Augmentation Services', href: '/hire-experts/staff-augmentation-services' },
          { label: 'Dedicated Development Team', href: '/hire-experts/dedicated-development-team' },
          { label: 'Project-Based Development', href: '/hire-experts/project-based-development' },
          { label: 'Offshore Development Center (ODC)', href: '/hire-experts/offshore-development-center' }
        ]
      }
    ]
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    type: 'link'
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
    type: 'link'
  },
  {
    label: 'Blog',
    href: '/blog',
    type: 'link'
  },
  {
    label: 'Join Our Team',
    href: '/join-our-team',
    type: 'link'
  },
  {
    label: 'Get in Touch',
    href: '/contact',
    type: 'link'
  }
]

export default menuData


