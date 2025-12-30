// Case Studies Data
// All case study content extracted from the Google Doc

export const caseStudiesData = [
  {
    id: 1,
    slug: 'ai-dent',
    title: 'AI Dent',
    subtitle: 'AI-Enabled Dental Assessment Platform',
    industry: 'AI Healthcare (Dental)',
    category: 'AI/ML',
    platforms: 'iOS & Android',
    businessModel: 'Subscription model for patients & clinics',
    thumbnail: '/image/project-item/ai-dent-app.png',
    heroImage: '/image/project-item/ai-dent-app.png',
    excerpt: 'A sensor-guided smartphone app using computer vision for high-quality, at-home dental scans, reducing clinic visits by 30-35%.',
    challenge: 'Low-quality home captures for dental screening and limited clinic availability made initial dental assessments difficult and time-consuming for patients.',
    solution: 'Developed a sensor-guided smartphone app using computer vision to enable high-quality, at-home dental scans with real-time guidance and AI-powered assessment.',
    techStack: ['Flutter', 'AWS Amplify', 'Firebase', 'AI/ML', 'Computer Vision'],
    capabilities: [
      'Sensor-guided capture for optimal image quality',
      'Real-time feedback and guidance during scanning',
      'AI-powered dental assessment and analysis',
      'Secure cloud storage and processing',
      'Multi-platform support (iOS & Android)'
    ],
    outcomes: [
      { metric: '60%', description: 'Reduced entry barriers' },
      { metric: '30-35%', description: 'Reduction in clinic visits' },
      { metric: '<10 min', description: 'Initial screening time' },
      { metric: 'High accuracy', description: 'AI-powered dental assessment' },
      { metric: 'Improved access', description: 'To dental screening services' }
    ]
  },
  {
    id: 2,
    slug: 'kavia-ai',
    title: 'Kavia AI',
    subtitle: 'Development Platform for Scalable Solutions',
    industry: 'AI Development Platforms',
    category: 'AI/ML',
    platforms: 'Web & Mobile',
    businessModel: 'SaaS model',
    thumbnail: '/image/project-item/kavia-ai.png',
    heroImage: '/image/project-item/kavia-ai.png',
    excerpt: 'Enhanced platform stability and reliability for developers building AI-driven workflows, reducing MTTR by 40-50%.',
    challenge: 'Platform stability and reliability issues were impacting developers building AI-driven workflows, leading to extended downtime and reduced productivity.',
    solution: 'Implemented a comprehensive log-driven triaging and root-cause analysis framework to improve platform stability and developer experience.',
    techStack: ['Node.js', 'Python', 'AWS', 'Kubernetes', 'ML Ops'],
    capabilities: [
      'Log-driven triaging system',
      'Root-cause analysis framework',
      'Automated incident detection',
      'Real-time monitoring and alerts',
      'Developer productivity tools'
    ],
    outcomes: [
      { metric: '40-50%', description: 'Reduction in Mean Time to Resolution (MTTR)' },
      { metric: 'Improved', description: 'Developer productivity' },
      { metric: 'Enhanced', description: 'Platform stability' },
      { metric: 'Faster', description: 'Issue identification and resolution' }
    ]
  },
  {
    id: 3,
    slug: 'qdis',
    title: 'QDIS',
    subtitle: 'Digital Ecosystem for Property Maintenance',
    industry: 'Facilities Management & PropTech',
    category: 'Mobile & Web',
    platforms: 'iOS, Android & Web',
    businessModel: 'Multi-Tenant SaaS',
    thumbnail: '/image/project-item/qdis.png',
    heroImage: '/image/project-item/qdis.png',
    excerpt: 'Unified platform for work order management and GPS-verified service tracking, achieving zero budget overruns across 120+ properties.',
    challenge: 'Fragmented, manual processes leading to delays and budget overruns in property maintenance across multiple facilities.',
    solution: 'Built a unified platform for work order assignment, GPS-verified service tracking, and automated budget management to streamline property maintenance operations.',
    techStack: ['.NET Core', 'React', 'React Native', 'Azure Cloud', 'GPS & Geofencing'],
    capabilities: [
      'Centralized work order management',
      'GPS-verified service tracking',
      'Automated budget management',
      'Real-time notifications and updates',
      'Multi-tenant architecture',
      'Mobile and web access'
    ],
    outcomes: [
      { metric: '85%', description: 'Elimination of billing disputes' },
      { metric: 'Zero', description: 'Budget overruns across 120+ properties' },
      { metric: '90%', description: 'Reduction in allocation time' },
      { metric: 'Real-time', description: 'Service tracking and verification' },
      { metric: 'Streamlined', description: 'Property maintenance workflows' }
    ]
  },
  {
    id: 4,
    slug: 'e-mobility',
    title: 'E-mobility',
    subtitle: 'Real-Time EV Charging Discovery, Access & Payments Platform',
    industry: 'EV & Smart Mobility',
    category: 'Mobile',
    platforms: 'iOS & Android',
    businessModel: 'Network-based Platform (B2C & B2B)',
    thumbnail: '/image/project-item/emobility-app-m.png',
    heroImage: '/image/project-item/emobility-app-m.png',
    excerpt: 'Unified mobile app centralizing the entire EV charging journey, achieving ~60% faster charging station discovery.',
    challenge: 'Drivers faced a fragmented charging experience with slow, unreliable discovery and missing real-time availability. Payment flows were inconsistent, and operators lacked unified analytics.',
    solution: 'Created a unified mobile app centralizing the entire charging journey—from discovery to payment, integrating real-time location intelligence and standardized charger communication (OCPP).',
    techStack: ['Flutter', 'Google Maps', 'Stripe', 'OCPP', 'REST APIs'],
    capabilities: [
      'Real-time charging station discovery',
      'Turn-by-turn navigation to stations',
      'Live session monitoring',
      'Secure frictionless payments',
      'OCPP 1.6 & 2.0 integration',
      'Operator analytics dashboard'
    ],
    outcomes: [
      { metric: '~60%', description: 'Faster charging station discovery' },
      { metric: 'Higher', description: 'Session completion rates' },
      { metric: '~40%', description: 'Lower development and maintenance costs' },
      { metric: '60 FPS', description: 'Stable performance with hundreds of live stations' },
      { metric: '~70%', description: 'Reduction in backend load' }
    ]
  },
  {
    id: 5,
    slug: 't2d2',
    title: 'T2D2',
    subtitle: 'AI-Powered Building Damage Detection Platform',
    industry: 'Cloud Security & Infrastructure',
    category: 'AI/ML',
    platforms: 'Web',
    businessModel: 'Enterprise',
    thumbnail: '/image/project-item/t2d2.png',
    heroImage: '/image/project-item/t2d2-up.png',
    excerpt: 'Comprehensive cloud security audit and infrastructure hardening, preventing $10k-$20k monthly cloud losses.',
    challenge: 'Unauthorized consumption of high-cost GCP services due to exposed service account keys and lack of IP restrictions, leading to a silent cost leak.',
    solution: 'Conducted a full cloud security audit, contained the incident, secured credentials, and implemented long-term access and cost controls with automated key-rotation policies.',
    techStack: ['GCP', 'AWS Secrets Manager', 'Terraform', 'Security Automation'],
    capabilities: [
      'Cloud security audit and assessment',
      'Credential rotation and management',
      'IP restriction implementation',
      'Secrets management migration',
      'Automated key-rotation policies',
      'Cost monitoring and alerts'
    ],
    outcomes: [
      { metric: '$10k-$20k', description: 'Monthly cloud losses prevented' },
      { metric: '~90%', description: 'Reduction in attack surface' },
      { metric: '~70%', description: 'Reduced incident recurrence probability' },
      { metric: 'Enhanced', description: 'Cloud security posture' }
    ]
  },
  {
    id: 6,
    slug: 'hoop-dna',
    title: 'Hoop DNA',
    subtitle: 'Unified Mobile Platform for Fitness Tracking and Coaching Management',
    industry: 'Sports & Fitness',
    category: 'Mobile',
    platforms: 'iOS & iPad',
    businessModel: 'B2B & B2C',
    thumbnail: '/image/project-item/hoopDNA.png',
    heroImage: '/image/project-item/hoopDNA.png',
    excerpt: 'Coach-driven basketball training platform with iPad-based AR solution, improving off-court practice consistency by 50-60%.',
    challenge: 'Traditional basketball coaching relied on manual observation and verbal feedback, making it difficult to track player progress consistently or scale coaching beyond in-person sessions.',
    solution: 'Built a coach-driven basketball training platform supported by an iPad-based sub-solution (AR EVolve) to fully digitize coaching workflows and enable data-backed feedback.',
    techStack: ['React Native', 'ARKit', 'Firebase', 'Video Processing', 'Cloud Storage'],
    capabilities: [
      'Centralized training video library',
      'Player progress tracking',
      'AR-based courtside coaching tools',
      'Real-time drill completion tracking',
      'Performance notes and analytics',
      'Self-paced skill improvement'
    ],
    outcomes: [
      { metric: '50%', description: 'Reduction in coach preparation time' },
      { metric: '50-60%', description: 'Improvement in off-court practice consistency' },
      { metric: 'Reduced', description: 'Reliance on in-person demonstrations' },
      { metric: 'Enabled', description: 'Self-paced independent skill improvement' },
      { metric: 'Enhanced', description: 'Coach-player feedback loop' }
    ]
  },
  {
    id: 7,
    slug: 'twelfthman',
    title: 'Twelfthman',
    subtitle: 'Fantasy Sports Platform Development',
    industry: 'Sports & Gaming',
    category: 'Web & Mobile',
    platforms: 'Web & Mobile',
    businessModel: 'B2C',
    thumbnail: '/image/project-item/twelfthman.png',
    heroImage: '/image/project-item/twelfthman.png',
    excerpt: 'Real-time fantasy football platform with live leaderboard updates within 2-3 seconds, achieving 60% higher user engagement.',
    challenge: 'Fantasy football platforms experience extreme traffic spikes during live matches. The client needed a platform that could handle high concurrency, deliver real-time score updates, and ensure transparent point calculations.',
    solution: 'Designed and developed an end-to-end fantasy sports platform with a focus on real-time data processing, backend scalability, and a high-performance scoring engine.',
    techStack: ['Node.js', 'React', 'Redis', 'WebSockets', 'MongoDB', 'AWS'],
    capabilities: [
      'Team creation and management',
      'Contest joining and tracking',
      'Real-time score updates',
      'Live leaderboard rankings',
      'High-performance scoring engine',
      'Scalable backend architecture'
    ],
    outcomes: [
      { metric: 'Zero', description: 'Downtime during major match events' },
      { metric: '2-3 sec', description: 'Live leaderboard update time during peak traffic' },
      { metric: '~60%', description: 'Higher user engagement during live matches' },
      { metric: 'Stable', description: 'Performance under high concurrency' },
      { metric: 'Transparent', description: 'Point calculation system' }
    ]
  },
  {
    id: 8,
    slug: 'heva',
    title: 'Heva',
    subtitle: 'AI-Native Healthcare & Wellness Intelligence Platform',
    industry: 'Healthcare & Wellness',
    category: 'AI/ML',
    platforms: 'Web & Mobile',
    businessModel: 'B2C & B2B',
    thumbnail: '/image/project-item/heva.png',
    heroImage: '/image/project-item/heva.png',
    excerpt: 'AI-first platform unifying patient interaction and wellness intelligence, reducing care discovery effort by ~50%.',
    challenge: 'Cross-border medical tourism and wellness services operated on fragmented data, making it hard for patients to discover providers or navigate complex care journeys.',
    solution: 'Architected an AI-native foundation with ML models for personalization and conversational workflows for service orchestration, creating an intelligent system that adapts to user needs in real-time.',
    techStack: ['Python', 'ML Models', 'NLP', 'React', 'Node.js', 'AWS'],
    capabilities: [
      'AI-powered patient interaction',
      'Wellness intelligence and recommendations',
      'Multi-turn conversational experiences',
      'Personalized care journey mapping',
      'Provider discovery and matching',
      'Progress tracking and engagement'
    ],
    outcomes: [
      { metric: '~50%', description: 'Reduction in care discovery and coordination effort' },
      { metric: 'Improved', description: 'Patient experience through personalization' },
      { metric: 'Increased', description: 'Platform stickiness via continuous engagement' },
      { metric: 'Unified', description: 'Healthcare and wellness services' }
    ]
  }
]

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug) {
  return caseStudiesData.find(cs => cs.slug === slug)
}

// Helper function to get all case studies
export function getAllCaseStudies() {
  return caseStudiesData
}

// Helper function to get case studies by category
export function getCaseStudiesByCategory(category) {
  if (category === 'all') return caseStudiesData
  return caseStudiesData.filter(cs => cs.category.toLowerCase().includes(category.toLowerCase()))
}

// Get all unique categories
export function getCategories() {
  const categories = new Set()
  caseStudiesData.forEach(cs => {
    categories.add(cs.category)
  })
  return ['All', ...Array.from(categories)]
}
