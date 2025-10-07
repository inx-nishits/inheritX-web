'use client';

import { useEffect } from 'react';

export const dynamic = 'force-static';

export default function Page() {
    useEffect(() => {
        // Add loadmore class to body to enable fl-item display
        document.body.classList.add('loadmore');

        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove('loadmore');
        };
    }, []);

    return (
        <>
            <style jsx>{`
        /* Ensure blog listing card images are full width */
        .tf-grid-2 .tf-post-grid .top .image,
        .tf-grid-2 .tf-post-grid .top .image img {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          object-fit: cover !important;
        }

        /* Prevent image overlap by hiding overflow and disabling hover scale */
        .tf-grid-2 .tf-post-grid .top {
          overflow: hidden !important;
        }
        .tf-grid-2 .tf-post-grid .top .image {
          display: block !important;
          line-height: 0 !important;
          margin: 0 !important;
        }

        /* Sidebar should always be visible on mobile and positioned relatively */
        @media (max-width: 1199.98px) {
          .tf-sidebar.sidebar-filter {
            position: relative !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            transform: none !important;
            height: auto !important;
          }
        }
        .tf-grid-2 .tf-post-grid.hover-image .top .image img,
        .tf-grid-2 .tf-post-grid .top .image img {
          transform: none !important;
        }

        .tf-grid-2 .fl-item {
          display: block !important;
        }
        
        .sidebar-categories .category-count {
          background: var(--primary);
          color: white;
          padding: 6px 10px;
          border-radius: 50px;
          font-family: 'Inter';
          font-size: 12px;
          font-weight: 600;
          min-width: 24px;
          height: 24px;
          text-align: center;
          margin-left: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          box-sizing: border-box;
        }
        
        .sidebar-categories .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
        }
        
        .sidebar-categories .item a {
          flex: 1;
          margin-right: 10px;
        }
        
        /* Custom pagination dots for Most Popular section */
        .sw-blog-popular .swiper-pagination {
          position: relative !important;
          margin-top: 40px !important;
          bottom: auto !important;
        }
        
        .sw-blog-popular .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
          border: none !important;
        }
        
        .sw-blog-popular .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
          background: #ffffff !important;
          opacity: 1 !important;
        }
        
        .sw-blog-popular .swiper-pagination-bullet-active {
          background: #00C5DE !important;
          transform: scale(1.2) !important;
          opacity: 1 !important;
        }
        
        .sw-blog-popular .swiper-pagination-bullet:hover {
          background: var(--primary) !important;
          opacity: 0.7 !important;
        }
        
        /* Additional override for Swiper default styles */
        .sw-blog-popular .swiper-pagination .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 1 !important;
        }
        
        .sw-blog-popular .swiper-pagination .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
          background: #ffffff !important;
          opacity: 1 !important;
        }
        
        .sw-blog-popular .swiper-pagination .swiper-pagination-bullet-active {
          background: #00C5DE !important;
          opacity: 1 !important;
        }
        
        /* Trending section pagination dots - same styling as Most Popular */
        .sw-blog-trending .swiper-pagination {
          position: relative !important;
          margin-top: 40px !important;
          bottom: auto !important;
        }
        
        .sw-blog-trending .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
          border: none !important;
        }
        
        .sw-blog-trending .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
          background: #ffffff !important;
          opacity: 1 !important;
        }
        
        .sw-blog-trending .swiper-pagination-bullet-active {
          background: #00C5DE !important;
          transform: scale(1.2) !important;
          opacity: 1 !important;
        }
        
        .sw-blog-trending .swiper-pagination-bullet:hover {
          background: var(--primary) !important;
          opacity: 0.7 !important;
        }
        
        /* Additional override for Swiper default styles - Trending */
        .sw-blog-trending .swiper-pagination .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 1 !important;
        }
        
        .sw-blog-trending .swiper-pagination .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
          background: #ffffff !important;
          opacity: 1 !important;
        }
        
        .sw-blog-trending .swiper-pagination .swiper-pagination-bullet-active {
          background: #00C5DE !important;
          opacity: 1 !important;
        }
        
        /* Newsletter section improvements */
        .newsletter-section {
          border-top: 1px solid rgba(255, 255, 255, 0.3) !important;
          padding-top: 80px !important;
        }
        
        .newsletter-form .form-group {
          gap: 15px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        .newsletter-form .input-wrapper {
          flex: 0 0 auto;
          max-width: 500px;
          min-width: 350px;
        }
        
        .newsletter-form .form-control {
          height: 56px !important;
          border-radius: 8px !important;
          padding: 0 20px !important;
          font-size: 16px !important;
          border: 1px solid #e0e0e0 !important;
          margin: 0 !important;
          box-sizing: border-box !important;
          width: 100% !important;
        }
        
        .newsletter-form .form-control:focus {
          outline: none !important;
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 2px rgba(0, 197, 222, 0.1) !important;
        }
        
        .newsletter-form .tf-btn.newsletter-btn {
          padding: 20px 40px !important;
          display: flex !important;
          align-items: center !important;
          gap: 7px !important;
          background-color: var(--primary) !important;
          border-radius: 12px !important;
          border: none !important;
          position: relative !important;
          overflow: hidden !important;
          cursor: pointer !important;
          white-space: nowrap !important;
          margin: 0 !important;
          box-sizing: border-box !important;
          max-width: 100% !important;
        }
        
        .newsletter-form .tf-btn.newsletter-btn span {
          color: var(--white) !important;
          position: relative !important;
          transition: all 0.5s ease !important;
        }
        
        .newsletter-form .tf-btn.newsletter-btn i {
          position: relative !important;
          color: var(--white) !important;
          font-size: 13px !important;
          line-height: 100% !important;
          transition: all 0.5s ease !important;
        }
        
        .newsletter-form .tf-btn.newsletter-btn::before {
          content: "" !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          height: 100% !important;
          width: 0 !important;
          border-radius: 12px !important;
          background-color: var(--white) !important;
          transition: all 0.5s ease !important;
        }
        
        .newsletter-form .tf-btn.newsletter-btn:hover {
          background-color: transparent !important;
        }
        
        .newsletter-form .tf-btn.newsletter-btn:hover i,
        .newsletter-form .tf-btn.newsletter-btn:hover span {
          color: var(--main-dark) !important;
        }
        
        .newsletter-form .tf-btn.newsletter-btn:hover::before {
          width: 100% !important;
        }
        
        /* Ensure no spacing between form elements */
        .newsletter-form .form-group > * {
          margin: 0 !important;
        }
        
        .newsletter-form .form-group {
          margin: 0 !important;
        }
        
        /* Responsive newsletter form */
        @media (max-width: 768px) {
          .newsletter-form .form-group {
            flex-direction: column !important;
            gap: 15px !important;
            align-items: stretch !important;
          }
          
          .newsletter-form .input-wrapper {
            max-width: 100% !important;
            width: 100% !important;
          }
          
          .newsletter-form .form-control {
            width: 100% !important;
          }
          
          .newsletter-form .tf-btn.newsletter-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        
        /* Responsive images for sliders */
        @media (max-width: 768px) {
          .sw-blog-popular .tf-post-grid .image img,
          .sw-blog-trending .tf-post-grid .image img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover !important;
          }
          
          .sw-blog-popular .tf-post-grid .image,
          .sw-blog-trending .tf-post-grid .image {
            width: 100% !important;
            display: block !important;
          }
        }
        
        /* Blog item height and author styling */
        .tf-post-grid {
          min-height: 320px !important;
        }
        
        .tf-post-grid .bottom-item {
          padding: 15px 20px !important;
          border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: rgba(30, 30, 30, 0.8) !important;
          backdrop-filter: blur(10px) !important;
        }
        
        .tf-post-grid .bottom-item .author-info {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          font-size: 13px !important;
          color: #ffffff !important;
        }
        
        .tf-post-grid .bottom-item .author-info .user-icon {
          color: var(--primary) !important;
          font-size: 12px !important;
        }
        
        .tf-post-grid .bottom-item .author-info .category-link {
          color: var(--primary) !important;
          text-decoration: none !important;
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
        }
        
        .tf-post-grid .bottom-item .author-info .category-link:hover {
          color: #ffffff !important;
          text-decoration: underline !important;
        }
        
        /* Blog items and sidebar styling */
        .fl-item {
          overflow: hidden !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.3s ease !important;
        }
        
        .fl-item:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15) !important;
        }
        
        .tf-sidebar.sidebar-filter {
          overflow: hidden !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
        }
        
        /* Additional overflow-hidden for better content containment */
        .fl-item .tf-post-grid {
          overflow: hidden !important;
        }
        
        .tf-sidebar.sidebar-filter .sidebar-item {
          overflow: hidden !important;
        }
      `}</style>
            {/* <!-- Page-title --> */}

            <div className="page-title">
                <div className="tf-container">
                    <div className="page-title-content text-center">
                        <h1 className="title ml-11 split-text effect-right">
                            Blog
                        </h1>
                        <div className="breadkcum mb-5">
                            <a href="/" className="link-breadkcum body-2 fw-7 split-text effect-right">Home</a>
                            <span className="dot"></span>
                            <span className="page-breadkcum body-2 fw-7 split-text effect-right"> Blog</span>
                        </div>

                        <p className='pt-4'>Expert Speak on Trending Topics.</p>
                    </div>
                </div>
            </div>

            {/* <!-- /.page-title --> */}

            {/* <!-- Main-content --> */}

            <div className="main-content">
                <div className="list-post-gird tf-spacing-2">
                    <div className="tf-container">
                        <div className="row rg-30">
                            <div className="col-xl-8">

                                <div className="tf-grid-2 loadmore-item">
                                    {/* Added from Home page: Flutter Widgets article */}
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="/blog/top-15-flutter-widgets-for-app-development" className="image">
                                                    <img src="image/home/Flutter-App-Development.jpg" data-src="image/home/Flutter-App-Development.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="/blog/top-15-flutter-widgets-for-app-development" className="line-clamp-3">
                                                            Top 15 Flutter Widgets Are Best To Use for App Development
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Added from Home page: Why businesses prefer Flutter */}
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="/blog/why-businesses-prefer-flutter-app-development" className="image">
                                                    <img src="image/home/app-development-services.jpg" data-src="image/home/app-development-services.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="/blog/why-businesses-prefer-flutter-app-development" className="line-clamp-3">
                                                            Why Modern Businesses Prefer Flutter Application Development Services
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-1.jpg" data-src="image/blog/blog-grid-1.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Tips For Conducting to Usability Studies With Participants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-5.jpg" data-src="image/blog/blog-grid-5.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Online Environment Work For Older Users systems ways Tips Usability Studies Pants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>

                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-2.jpg" data-src="image/blog/blog-grid-2.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Tips For Conducting to Usability Studies With Participants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-6.jpg" data-src="image/blog/blog-grid-6.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Online Environment Work For Older Users systems ways Tips Usability Studies Pants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-3.jpg" data-src="image/blog/blog-grid-3.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Tips For Conducting to Usability Studies With Participants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-4.jpg" data-src="image/blog/blog-grid-4.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Online Environment Work For Older Users systems ways Tips Usability Studies Pants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-7.jpg" data-src="image/blog/blog-grid-7.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Tips For Conducting to Usability Studies With Participants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl-item">

                                        <div className="tf-post-grid hover-image ">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-8.jpg" data-src="image/blog/blog-grid-8.jpg" alt="" className=" ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Online Environment Work For Older Users systems ways Tips Usability Studies Pants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="tf-sidebar sidebar-filter right">

                                    <div className="sidebar-item sidebar-content sidebar-categories mb-40">
                                        <h5 className="title-content fw-5">
                                            Category
                                        </h5>
                                        <ul className="list">
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">Amazon Web Technology</a>
                                                <span className="category-count">1</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">Android Application Development</a>
                                                <span className="category-count">6</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">Angular Application Development</a>
                                                <span className="category-count">1</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">Angular JS Development</a>
                                                <span className="category-count">1</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">App Store Optimization</a>
                                                <span className="category-count">1</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">Database</a>
                                                <span className="category-count">1</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">DevOps</a>
                                                <span className="category-count">1</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">Digital Marketing</a>
                                                <span className="category-count">3</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">Firebase Web Technology</a>
                                                <span className="category-count">1</span>
                                            </li>
                                            <li className="item">
                                                <i className="icon-arrow-right"></i>
                                                <a href="#" className="body-2 fw-5">Flutter Application Development</a>
                                                <span className="category-count">16</span>
                                            </li>
                                        </ul>
                                    </div>

                                    

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Most Popular Section */}
            <div className="most-popular-section tf-spacing-1">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section mb-60 text-center">
                                <div className="sub-title body-2 fw-7 mb-17 title-animation">
                                    Most Popular
                                </div>
                                <h2 className="title fw-6 title-animation">
                                    Discover Our Most Read&nbsp;
                                    <span className="fw-3">Blog Posts</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="swiper tf-swiper sw-blog-popular"
                                data-swiper='{
                                "slidesPerView": 1,
                                "spaceBetween": 30,
                                "speed": 800,
                                "pagination": { "el": ".sw-pagination-popular", "clickable": true },
                                "breakpoints": {
                                    "768": { "slidesPerView": 2, "slidesPerGroup": 1},
                                    "1200": { "slidesPerView": 3, "slidesPerGroup": 1}
                                }
                            }'
                            >
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-1.jpg" data-src="image/blog/blog-grid-1.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Tips For Conducting to Usability Studies With Participants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-5.jpg" data-src="image/blog/blog-grid-5.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Online Environment Work For Older Users systems ways Tips Usability Studies Pants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-2.jpg" data-src="image/blog/blog-grid-2.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Tips For Conducting to Usability Studies With Participants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-6.jpg" data-src="image/blog/blog-grid-6.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Online Environment Work For Older Users systems ways Tips Usability Studies Pants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-3.jpg" data-src="image/blog/blog-grid-3.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Tips For Conducting to Usability Studies With Participants
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination sw-pagination-popular"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Section */}
            <div className="trending-section tf-spacing-1">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section mb-60 text-center">
                                <div className="sub-title body-2 fw-7 mb-17 title-animation">
                                    Trending Now
                                </div>
                                <h2 className="title fw-6 title-animation">
                                    What's Hot in&nbsp;
                                    <span className="fw-3">Technology</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="swiper tf-swiper sw-blog-trending"
                                data-swiper='{
                                "slidesPerView": 1,
                                "spaceBetween": 30,
                                "speed": 800,
                                "pagination": { "el": ".sw-pagination-trending", "clickable": true },
                                "breakpoints": {
                                    "768": { "slidesPerView": 2, "slidesPerGroup": 1},
                                    "1200": { "slidesPerView": 3, "slidesPerGroup": 1}
                                }
                            }'
                            >
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-1.jpg" data-src="image/blog/blog-grid-1.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            AI Revolution: How Machine Learning is Transforming Business
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-5.jpg" data-src="image/blog/blog-grid-5.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Cloud Computing Trends: The Future of Scalable Infrastructure
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-2.jpg" data-src="image/blog/blog-grid-2.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Mobile App Development: React Native vs Flutter in 2025
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-6.jpg" data-src="image/blog/blog-grid-6.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Cybersecurity Best Practices for Modern Web Applications
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="tf-post-grid hover-image">
                                            <div className="top">
                                                <a href="blog-details.html" className="image">
                                                    <img src="image/blog/blog-grid-3.jpg" data-src="image/blog/blog-grid-3.jpg" alt="" className="ls-is-cached lazyloaded" />
                                                </a>
                                                <div className="post-content px-md-15">
                                                    <h6 className="title lh-32">
                                                        <a href="blog-details.html" className="line-clamp-3">
                                                            Blockchain Technology: Beyond Cryptocurrency Applications
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="bottom-item px-md-15">
                                                <div className="author-info">
                                                    <i className="icon-user user-icon"></i>
                                                    <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination sw-pagination-trending"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Subscription Section */}
            <div className="newsletter-section tf-spacing-1">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 text-center">
                            <div className="newsletter-content">
                                <p className="top-subtitle mb-20">
                                    Want to on top of the technology trends
                                </p>
                                <h2 className="title mb-40">
                                    Get top insights and news from our<br />
                                    technology experts
                                </h2>
                                <p className="sub-heading mb-50">
                                    Delivered to you monthly, straight to your inbox
                                </p>

                                <form className="newsletter-form">
                                    <div className="form-group d-flex justify-content-center align-items-center">
                                        <div className="input-wrapper">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="tf-btn newsletter-btn">
                                            <span>Join Now</span>
                                            <i className="icon-arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}