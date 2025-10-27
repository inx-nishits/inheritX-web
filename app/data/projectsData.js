export const projectItems = [
  {
    id: 1,
    slug: 'ai-powered-ecommerce',
    title: 'AI-Powered E-commerce Platform',
    category: 'Web Development',
    industry: 'E-commerce',
    technology: 'React, Node.js, AI/ML',
    country: 'United States',
    description: 'Revolutionary e-commerce platform with AI-driven product recommendations, automated customer service, and intelligent inventory management. Features advanced machine learning algorithms for personalized shopping experiences.',
    cover: '/image/project-item/project-item-1.jpg',
    thumb: '/image/project-item/project-item-1.jpg',
    status: 'Completed',
    duration: '6 months',
    teamSize: '8 developers',
    features: ['AI Recommendations', 'Automated Support', 'Smart Analytics', 'Mobile Responsive'],
    client: 'TechCorp Solutions',
    year: '2024'
  },
  {
    id: 2,
    slug: 'healthcare-mobile-app',
    title: 'Healthcare Management Mobile App',
    category: 'Mobile App Development',
    industry: 'Healthcare',
    technology: 'Flutter, Firebase, AI',
    country: 'Canada',
    description: 'Comprehensive healthcare management app for patients and doctors. Includes appointment scheduling, telemedicine features, health tracking, and AI-powered symptom analysis.',
    cover: '/image/project-item/project-item-2.jpg',
    thumb: '/image/project-item/project-item-2.jpg',
    status: 'In Progress',
    duration: '4 months',
    teamSize: '6 developers',
    features: ['Telemedicine', 'Health Tracking', 'AI Diagnosis', 'Secure Messaging'],
    client: 'MediCare Plus',
    year: '2024'
  },
  {
    id: 3,
    slug: 'fintech-banking-platform',
    title: 'Next-Gen Fintech Banking Platform',
    category: 'Web Development',
    industry: 'Fintech',
    technology: 'React, Python, Blockchain',
    country: 'United Kingdom',
    description: 'Cutting-edge banking platform with blockchain integration, real-time transactions, and advanced security features. Built for modern financial institutions.',
    cover: '/image/project-item/project-item-3.jpg',
    thumb: '/image/project-item/project-item-3.jpg',
    status: 'Completed',
    duration: '8 months',
    teamSize: '12 developers',
    features: ['Blockchain Integration', 'Real-time Processing', 'Advanced Security', 'API Integration'],
    client: 'FinanceFlow Ltd',
    year: '2023'
  },
  {
    id: 4,
    slug: 'iot-smart-home-system',
    title: 'IoT Smart Home Management System',
    category: 'IoT Development',
    industry: 'Smart Home',
    technology: 'React Native, IoT, AWS',
    country: 'Germany',
    description: 'Comprehensive smart home management system connecting various IoT devices. Features automated controls, energy monitoring, and AI-powered optimization.',
    cover: '/image/project-item/project-item-4.jpg',
    thumb: '/image/project-item/project-item-4.jpg',
    status: 'Completed',
    duration: '5 months',
    teamSize: '7 developers',
    features: ['Device Integration', 'Energy Monitoring', 'AI Optimization', 'Mobile Control'],
    client: 'SmartHome Solutions',
    year: '2023'
  },
  {
    id: 5,
    slug: 'education-learning-platform',
    title: 'AI-Enhanced Learning Platform',
    category: 'Web Development',
    industry: 'Education',
    technology: 'Vue.js, Python, AI/ML',
    country: 'Australia',
    description: 'Interactive learning platform with AI-powered personalized learning paths, automated assessments, and virtual classroom features.',
    cover: '/image/project-item/project-item-5.jpg',
    thumb: '/image/project-item/project-item-5.jpg',
    status: 'In Progress',
    duration: '7 months',
    teamSize: '9 developers',
    features: ['AI Learning Paths', 'Virtual Classrooms', 'Auto Assessment', 'Progress Tracking'],
    client: 'EduTech Innovations',
    year: '2024'
  },
  {
    id: 6,
    slug: 'logistics-tracking-app',
    title: 'Advanced Logistics Tracking App',
    category: 'Mobile App Development',
    industry: 'Logistics',
    technology: 'React Native, GPS, Cloud',
    country: 'Japan',
    description: 'Real-time logistics tracking application with GPS integration, route optimization, and automated delivery notifications.',
    cover: '/image/project-item/project-item-6.jpg',
    thumb: '/image/project-item/project-item-6.jpg',
    status: 'Completed',
    duration: '3 months',
    teamSize: '5 developers',
    features: ['Real-time Tracking', 'Route Optimization', 'Delivery Notifications', 'Analytics Dashboard'],
    client: 'LogiTech Japan',
    year: '2023'
  },
  {
    id: 7,
    slug: 'social-media-analytics',
    title: 'Social Media Analytics Dashboard',
    category: 'Web Development',
    industry: 'Marketing',
    technology: 'React, D3.js, Python',
    country: 'Brazil',
    description: 'Comprehensive social media analytics platform with real-time data visualization, sentiment analysis, and campaign performance tracking.',
    cover: '/image/project-item/project-item-7.jpg',
    thumb: '/image/project-item/project-item-7.jpg',
    status: 'Completed',
    duration: '4 months',
    teamSize: '6 developers',
    features: ['Real-time Analytics', 'Sentiment Analysis', 'Campaign Tracking', 'Data Visualization'],
    client: 'SocialBoost Marketing',
    year: '2023'
  },
  {
    id: 8,
    slug: 'gaming-mobile-app',
    title: 'Multiplayer Gaming Mobile App',
    category: 'Mobile App Development',
    industry: 'Gaming',
    technology: 'Unity, C#, Firebase',
    country: 'South Korea',
    description: 'High-performance multiplayer gaming app with real-time synchronization, social features, and in-app purchases.',
    cover: '/image/project-item/project-item-2.jpg',
    thumb: '/image/project-item/project-item-2.jpg',
    status: 'In Progress',
    duration: '6 months',
    teamSize: '10 developers',
    features: ['Multiplayer Gaming', 'Real-time Sync', 'Social Features', 'In-app Purchases'],
    client: 'GameStudio Korea',
    year: '2024'
  }
]

export const projectCategories = [
  { id: 'all', name: 'All Projects', count: projectItems.length },
  { id: 'web', name: 'Web Development', count: projectItems.filter(item => item.category === 'Web Development').length },
  { id: 'mobile', name: 'Mobile App Development', count: projectItems.filter(item => item.category === 'Mobile App Development').length }
]

export const getProjectBySlug = (slug) => {
  return projectItems.find(item => item.slug === slug)
}

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projectItems
  return projectItems.filter(item => {
    switch (category) {
      case 'web':
        return item.category === 'Web Development'
      case 'mobile':
        return item.category === 'Mobile App Development'
      default:
        return true
    }
  })
}
