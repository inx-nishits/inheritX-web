// Centralized navigation data used by both desktop and mobile menus
// Each item can be a simple link or a mega menu with columns

const menuData = [
  {
    label: 'Home',
    href: '/',
    type: 'link'
  },
  {
    label: 'About Us',
    href: '/about-us',
    type: 'link'
  },
  {
    label: 'Solutions',
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
    label: 'Hire Experts',
    href: '/hire-experts',
    type: 'mega',
    columns: [
      {
        title: 'Mobile App Development',
        items: [
          { label: 'Hire iPhone Developer', href: '/hire/iphone-developer' },
          { label: 'Hire Android Developer', href: '/hire/android-developer' },
          { label: 'Hire React Native Developer', href: '/hire/react-native-developer' },
          { label: 'Hire Flutter Developer', href: '/hire/flutter-developer' },
          { label: 'Hire Phonegap Developer', href: '/hire/phonegap-developer' }
        ]
      },
      {
        title: 'Web Development',
        items: [
          { label: 'Hire AngularJS Developer', href: '/hire/angularjs-developer' },
          { label: 'Hire ReactJS Developer', href: '/hire/reactjs-developer' },
          { label: 'Hire Node.js Developer', href: '/hire/nodejs-developer' },
          { label: 'Hire PHP Developer', href: '/hire/php-developer' },
          { label: 'Hire Laravel Developer', href: '/hire/laravel-developer' }
        ]
      },
      {
        title: 'Other Technologies',
        items: [
          { label: 'Hire Python Developer', href: '/hire/python-developer' },
          { label: 'Hire WordPress Developer', href: '/hire/wordpress-developer' },
          { label: 'Hire ASP Developer', href: '/hire/asp-developer' }
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


