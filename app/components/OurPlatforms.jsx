import Link from 'next/link'

const platforms = [
  { icon: '/image/services-icon/apple.svg', alt: 'Apple iOS', href: '/services/iphone-app-development', label: 'iOS Development' },
  { icon: '/image/services-icon/android.svg', alt: 'Android', href: '/services/android-app-development', label: 'Android Development' },
  { icon: '/image/services-icon/flutter.svg', alt: 'Flutter', href: '/services/flutter-app-development', label: 'Flutter Development' },
  { icon: '/image/services-icon/react.svg', alt: 'React', href: '/services/react-native-app-development', label: 'React Native Development' },
  { icon: '/image/services-icon/angular.png', alt: 'Angular', href: '/services/angularjs-development', label: 'AngularJS Development' },
  { icon: '/image/services-icon/python.svg', alt: 'Python', href: '/services/python-development', label: 'Python Development' },
  { icon: '/image/services-icon/nextjs.svg', alt: 'Next.js', href: '/services/nextjs-development', label: 'NextJS Development' },
  { icon: '/image/services-icon/laravel.svg', alt: 'Laravel', href: '/services/laravel-development', label: 'Laravel Development' },
  { icon: '/image/services-icon/react.svg', alt: 'React', href: '/services/reactjs-development', label: 'ReactJS Development' },
  { icon: '/image/services-icon/nodejs.svg', alt: 'Node.js', href: '/services/nodejs-development', label: 'Node.js Development' },
  { icon: '/image/services-icon/php.svg', alt: 'PHP', href: '/services/php-development', label: 'PHP Development' },
  { icon: '/image/services-icon/aws.svg', alt: 'AWS', href: '/services/aws-services', label: 'AWS Services' },
  { icon: '/image/services-icon/IOT.png', alt: 'IoT', href: '/services/iot-development', label: 'IOT Development' },
  { icon: '/image/services-icon/pwa.png', alt: 'PWA', href: '/services/pwa-development', label: 'PWA Development' },
  { icon: '/image/services-icon/digitalmarketing.svg', alt: 'Digital Marketing', href: '/services/seo-services', label: 'Digital Marketing' },
 ]

export default function OurPlatforms({
  heading = 'Our Platforms',
  description = 'InheritX provides web app development services in PHP, ASP.NET, AngularJS, Node.js, and UI/UX design.',
}) {
  return (
    <section className='section-services p-services tf-spacing-2'>
      <div className='top-section'>
        <div className='tf-marquee'>
          <div className='marquee-wrapper'>
            <div className='initial-child-container'>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
              <div className='big-text'>Explore <span className='text-stroke'>Our</span> Platforms&nbsp;</div>
            </div>
          </div>
        </div>
      </div>

      <div className='tf-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='heading-section mb-3 mb-xl-5 text-center'>
              <h2 className='title fw-6  mb-5'>
                {heading.split(' ')[0]} <span className='text-primary'>{heading.split(' ').slice(1).join(' ') || 'Platforms'}</span>
              </h2>
              <p className='clearfix'>
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className='list-services flex flex-wrap'>
          {platforms.map(({ icon, alt, href, label }) => (
            <div className='services-item px-lg-15 col-md-4 no-img' key={label}>
              <Link href={href} className='d-block h-100 text-decoration-none'>
                <div
                  className='icon bg-white rounded-circle p-4 overflow-hidden d-flex align-items-center justify-content-center'
                  style={{ width: '100px', height: '100px' }}
                >
                  <img
                    src={icon}
                    alt={alt}
                    className='lazyload img-fluid'
                    loading='lazy'
                    width='45'
                    height='45'
                    style={{ maxWidth: '45px' }}
                  />
                </div>

                <div className='lh-30 fw-6'>
                  <span className='title-service text-primary'>
                    {label}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


