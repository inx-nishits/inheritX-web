'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header () {
  const pathname = usePathname()

  // Helper to check if path is active
  const isActive = path => pathname === path
  // Helper for parent menus with multiple sub-links
  const isParentActive = paths => paths.some(p => pathname.startsWith(p))

  return (
    <>
      <div className='top-bar'>
        <div className='top-bar-inner flex align-items-center justify-content-between'>
          <div className='tf-tb-left'>
            <ul className='list-topbar-item flex align-items-center'>
              <li className='top-bar-item'>
                <i className='icon-email'></i>
                <a href='mailto:contact@inheritx.com'>contact@inheritx.com</a>
              </li>
              <li className='top-bar-item'>
                <i className='icon-phone'></i>
                <a href='tel:+13473940007'>+1(347) 394-0007</a>
              </li>
            </ul>
          </div>
          <div className='tf-tb-right flex align-items-center'>
            <ul className='post-social'>
              <li>
                <Link
                  href='https://www.facebook.com/InheritxSolutions/'
                  className='icon-social'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-fb'></i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://x.com/inheritx'
                  className='icon-social'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-X'></i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/'
                  className='icon-social'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-linkedin'></i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.instagram.com/inheritxsolutions/'
                  className='icon-social'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-instagram'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header className='header header-sticky' id='header'>
        <div className='header-content flex justify-content-between align-items-center'>
          <div className='header-left flex align-items-center'>
            <div className='logo logo-header'>
              <Link href='/'>
                <img src='/image/logo/inx-logo.svg' alt='logo' />
              </Link>
            </div>

            <nav className='main-menu'>
              <ul className='menu-primary-menu'>
                <li
                  className={`menu-item ${
                    isActive('/') ? 'current-menu-item' : ''
                  }`}
                >
                  <Link href='/' className='item-link body-2'>
                    <span>Home</span>
                  </Link>
                </li>

                <li
                  className={`menu-item ${
                    isActive('/about-us') ? 'current-menu-item' : ''
                  }`}
                >
                  <Link href='/about-us' className='item-link body-2'>
                    <span>About Us</span>
                  </Link>
                </li>

                {/* Solutions Mega Menu */}
                <li
                  className={`menu-item menu-item-has-children position-static ${
                    isParentActive([
                      '/services/iphone-app-development',
                      '/services/android-app-development',
                      '/services/kotlin-app-development',
                      '/services/flutter-app-development',
                      '/services/react-native-app-development',
                      '/services/ipad-tablet-app-development',
                      '/services/xamarin-app-development',
                      '/services/ionic-app-development',
                      '/services/python-development',
                      '/services/nextjs-development',
                      '/services/laravel-development',
                      '/services/reactjs-development',
                      '/services/nodejs-development',
                      '/services/php-development',
                      '/services/java-development',
                      '/services/wordpress-development',
                      '/services/magento-development',
                      '/services/machine-learning-development',
                      '/services/ai-agents',
                      '/services/ai-ml-model-expertise',
                      '/services/aws-services',
                      '/services/google-cloud-services',
                      '/services/pwa-development',
                      '/services/seo-services',
                      '/services/iot-development'
                    ])
                      ? 'current-menu-item'
                      : ''
                  }`}
                >
                  <a href='/services' className='item-link body-2'>
                    <span>Solutions</span>
                  </a>
                  <div className='sub-menu mega-menu p-4 py-5'>
                    <div className='container'>
                      <div className='row'>
                        {/* Mobile App Development */}
                        <div className='col-lg-3'>
                          <h6 className='text-primary fw-bold mb-5'>
                            Mobile App Development
                          </h6>
                          <ul className='list-unstyled'>
                            <li
                              className={`mb-4 ${
                                isActive('/services/iphone-app-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/iphone-app-development'
                                className='text-decoration-none text-dark'
                              >
                                iPhone App Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/android-app-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/android-app-development'
                                className='text-decoration-none text-dark'
                              >
                                Android App Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/kotlin-app-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/kotlin-app-development'
                                className='text-decoration-none text-dark'
                              >
                                Kotlin App Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/flutter-app-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/flutter-app-development'
                                className='text-decoration-none text-dark'
                              >
                                Flutter App Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive(
                                  '/services/react-native-app-development'
                                )
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/react-native-app-development'
                                className='text-decoration-none text-dark'
                              >
                                React Native App Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive(
                                  '/services/ipad-tablet-app-development'
                                )
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/ipad-tablet-app-development'
                                className='text-decoration-none text-dark'
                              >
                                iPad/Tablet App Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/xamarin-app-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/xamarin-app-development'
                                className='text-decoration-none text-dark'
                              >
                                Xamarin App Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/ionic-app-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/ionic-app-development'
                                className='text-decoration-none text-dark'
                              >
                                Ionic App Development
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Web Development */}
                        <div className='col-lg-3'>
                          <h6 className='text-primary fw-bold mb-5'>
                            Web Development
                          </h6>
                          <ul className='list-unstyled'>
                            <li
                              className={`mb-4 ${
                                isActive('/services/python-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/python-development'
                                className='text-decoration-none text-dark'
                              >
                                Python Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/nextjs-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/nextjs-development'
                                className='text-decoration-none text-dark'
                              >
                                NextJS Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/laravel-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/laravel-development'
                                className='text-decoration-none text-dark'
                              >
                                Laravel Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/reactjs-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/reactjs-development'
                                className='text-decoration-none text-dark'
                              >
                                ReactJS Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/nodejs-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/nodejs-development'
                                className='text-decoration-none text-dark'
                              >
                                Node.js Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/php-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/php-development'
                                className='text-decoration-none text-dark'
                              >
                                PHP Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/java-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/java-development'
                                className='text-decoration-none text-dark'
                              >
                                JAVA Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/wordpress-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/wordpress-development'
                                className='text-decoration-none text-dark'
                              >
                                WordPress Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/magento-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/magento-development'
                                className='text-decoration-none text-dark'
                              >
                                Magento Development
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* AI / ML */}
                        <div className='col-lg-3'>
                          <h6 className='text-primary fw-bold mb-5'>AI / ML</h6>
                          <ul className='list-unstyled'>
                            <li
                              className={`mb-4 ${
                                isActive(
                                  '/services/machine-learning-development'
                                )
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/machine-learning-development'
                                className='text-decoration-none text-dark'
                              >
                                Machine Learning Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/ai-agents')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/ai-agents'
                                className='text-decoration-none text-dark'
                              >
                                AI Agents
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/ai-ml-model-expertise')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/ai-ml-model-expertise'
                                className='text-decoration-none text-dark'
                              >
                                AI & ML Model Expertise
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Other Services */}
                        <div className='col-lg-3'>
                          <h6 className='text-primary fw-bold mb-5'>
                            Other Services
                          </h6>
                          <ul className='list-unstyled'>
                            <li
                              className={`mb-4 ${
                                isActive('/services/aws-services')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/aws-services'
                                className='text-decoration-none text-dark'
                              >
                                AWS Services
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/google-cloud-services')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/google-cloud-services'
                                className='text-decoration-none text-dark'
                              >
                                Google Cloud Services
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/pwa-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/pwa-development'
                                className='text-decoration-none text-dark'
                              >
                                PWA Development
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/seo-services')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/seo-services'
                                className='text-decoration-none text-dark'
                              >
                                SEO Services
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/services/iot-development')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/services/iot-development'
                                className='text-decoration-none text-dark'
                              >
                                IOT Development
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Hire Experts Mega Menu */}
                <li
                  className={`menu-item menu-item-has-children position-static ${
                    isParentActive([
                      '/hire/iphone-developer',
                      '/hire/android-developer',
                      '/hire/react-native-developer',
                      '/hire/flutter-developer',
                      '/hire/phonegap-developer',
                      '/hire/angularjs-developer',
                      '/hire/reactjs-developer',
                      '/hire/nodejs-developer',
                      '/hire/php-developer',
                      '/hire/laravel-developer',
                      '/hire/python-developer',
                      '/hire/wordpress-developer',
                      '/hire/asp-developer'
                    ])
                      ? 'current-menu-item'
                      : ''
                  }`}
                >
                  <a href='/hire-experts' className='item-link body-2'>
                    <span>Hire Experts</span>
                  </a>
                  <div className='sub-menu mega-menu p-4 py-5'>
                    <div className='container'>
                      <div className='row'>
                        {/* Mobile App Dev */}
                        <div className='col-lg-4'>
                          <h6 className='text-primary fw-bold mb-5'>
                            Mobile App Development
                          </h6>
                          <ul className='list-unstyled'>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/iphone-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/iphone-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire iPhone Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/android-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/android-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire Android Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/react-native-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/react-native-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire React Native Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/flutter-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/flutter-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire Flutter Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/phonegap-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/phonegap-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire Phonegap Developer
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Web Dev */}
                        <div className='col-lg-4'>
                          <h6 className='text-primary fw-bold mb-5'>
                            Web Development
                          </h6>
                          <ul className='list-unstyled'>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/angularjs-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/angularjs-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire AngularJS Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/reactjs-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/reactjs-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire ReactJS Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/nodejs-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/nodejs-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire Node.js Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/php-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/php-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire PHP Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/laravel-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/laravel-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire Laravel Developer
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Other Tech */}
                        <div className='col-lg-4'>
                          <h6 className='text-primary fw-bold mb-5'>
                            Other Technologies
                          </h6>
                          <ul className='list-unstyled'>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/python-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/python-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire Python Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/wordpress-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/wordpress-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire WordPress Developer
                              </Link>
                            </li>
                            <li
                              className={`mb-4 ${
                                isActive('/hire/asp-developer')
                                  ? 'current-menu-item'
                                  : ''
                              }`}
                            >
                              <Link
                                href='/hire/asp-developer'
                                className='text-decoration-none text-dark'
                              >
                                Hire ASP Developer
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Other Menu Items */}
                <li
                  className={`menu-item ${
                    isActive('/porfolio-grid') ? 'current-menu-item' : ''
                  }`}
                >
                  <Link href='/porfolio-grid' className='item-link body-2'>
                    <span>Portfolio</span>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    isActive('/blog') ? 'current-menu-item' : ''
                  }`}
                >
                  <Link href='/blog' className='item-link body-2'>
                    <span>Blog</span>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    isActive('/career') ? 'current-menu-item' : ''
                  }`}
                >
                  <Link href='/join-our-team' className='item-link body-2'>
                    <span>Join Our Team</span>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    isActive('/contact') ? 'current-menu-item' : ''
                  }`}
                >
                  <Link href='/contact' className='item-link body-2'>
                    <span>Get in Touch</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='header-right'>
            <div className='nav-btn'>
              <Link href='/pricing' className='tf-btn px-4'>
                <span>Get A Quote</span>
                <i className='icon-arrow-right'></i>
              </Link>
            </div>

            <div className='nav-megamenu d-none'>
              <a
                href='#canvnasMegamenu'
                data-bs-toggle='offcanvas'
                className='megamenu-btn'
              >
                <div className='burger'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>

            <div className='mobile-button nav-item d-xl-none'>
              <a href='#canvasMobile' data-bs-toggle='offcanvas'>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav (offcanvas) */}
      <div
        className='offcanvas offcanvas-start mobile-nav-wrap'
        id='canvasMobile'
      >
        <div className='inner-mobile-nav'>
          <div className='top-header-mobi'>
            <div className='logo-mobile'>
              <Link href='/'>
                <img src='/image/logo/inx-logo.svg' alt='logo' />
              </Link>
            </div>
            <button
              className='mobile-nav-close overflow-hidden'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            >
              ×
            </button>
          </div>

          <nav className='mobile-main-nav'>
            <ul id='menu-mobile' className='menu'>
              {/* You can replicate the same menu structure here if needed for mobile */}
              <li className={isActive('/') ? 'current-menu-item' : ''}>
                <Link href='/'>Home</Link>
              </li>
              <li className={isActive('/about-us') ? 'current-menu-item' : ''}>
                <Link href='/about-us'>About Us</Link>
              </li>
              <li
                className={
                  isParentActive(['/services']) ? 'current-menu-item' : ''
                }
              >
                <Link href='/services'>Solutions</Link>
              </li>
              <li
                className={isParentActive(['/hire']) ? 'current-menu-item' : ''}
              >
                <Link href='/hire'>Hire Experts</Link>
              </li>
              <li
                className={
                  isActive('/porfolio-grid') ? 'current-menu-item' : ''
                }
              >
                <Link href='/porfolio-grid'>Portfolio</Link>
              </li>
              <li className={isActive('/blog') ? 'current-menu-item' : ''}>
                <Link href='/blog'>Blog</Link>
              </li>
              <li className={isActive('/career') ? 'current-menu-item' : ''}>
                <Link href='/career'>Join Our Team</Link>
              </li>
              <li className={isActive('/contact') ? 'current-menu-item' : ''}>
                <Link href='/contact'>Get in Touch</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
