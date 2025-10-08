'use client';

import { useEffect, useState } from 'react';
import BlogImage from '../components/BlogImage';
import ImagePreloader from '../components/ImagePreloader';

export const dynamic = 'force-static';

export default function Page() {
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const showSkeleton = loading || !blogData;

    useEffect(() => {
        // Add loadmore class to body to enable fl-item display
        document.body.classList.add('loadmore');

        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove('loadmore');
        };
    }, []);

    useEffect(() => {
        let isMounted = true;
        async function loadData() {
            try {
                // Show loading immediately
                setLoading(true);
                setError(null);
                
                const res = await fetch('https://admin.inheritx.com/wp-json/api/v1/inxblog', {
                    cache: 'no-store', // Ensure fresh data
                    headers: {
                        'Accept': 'application/json',
                    }
                });
                
                if (!res.ok) throw new Error('Failed to fetch blog data');
                const json = await res.json();
                
                if (isMounted) {
                    setBlogData(json);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Error loading blogs');
                    setLoading(false);
                }
            }
        }
        
        // Load data immediately
        loadData();
        
        return () => {
            isMounted = false;
        };
    }, []);

    // Get critical images for preloading
    const criticalImages = blogData ? [
        ...(blogData.singleBlog?.slice(0, 1).map(post => post.feature_image) || []),
        ...(blogData.recentBlog?.slice(0, 3).map(post => post.feature_image) || [])
    ].filter(Boolean) : [];

    return (
        <>
            <ImagePreloader images={criticalImages} />
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

        /* Skeleton styles */
        .skeleton {
          position: relative;
          overflow: hidden;
          background: #2a2a2a;
        }
        .skeleton::after {
          content: "";
          position: absolute;
          top: 0;
          left: -150px;
          height: 100%;
          width: 150px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%);
          animation: shimmer 1.2s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(0); }
          100% { transform: translateX(300%); }
        }
        .skeleton-image {
          display: block;
          width: 100%;
          height: 220px;
          border-radius: 8px;
        }
        .skeleton-text {
          height: 16px;
          width: 80%;
          border-radius: 4px;
          background: #2a2a2a;
        }
        .skeleton-text.short { width: 40%; }
        .skeleton-avatar {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #2a2a2a;
        }
        .skeleton-cat {
          height: 14px;
          width: 60%;
          border-radius: 4px;
          background: #2a2a2a;
        }
          .skeleton-count {
  width: 30px;     
  height: 30px;     
  border-radius: 9999px;  
  background: #2a2a2a;
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

                        <p className='pt-4'>Expert Speak on Trending Topics</p>
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
                                    {error && !showSkeleton && (
                                        <div className="fl-item">
                                            <div className="tf-post-grid hover-image ">
                                                <div className="top">
                                                    <div className="post-content px-md-15">
                                                        <h6 className="title lh-32">{error}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {blogData?.singleBlog?.slice(0, 1).map((post) => (
                                        <div className="fl-item" key={`single-${post.id}`}>
                                            <div className="tf-post-grid hover-image ">
                                                <div className="top">
                                                    <a href={`/blog/${post.slug}`} className="image">
                                                        <BlogImage 
                                                            src={post.feature_image} 
                                                            alt={post.title}
                                                            className="ls-is-cached lazyloaded"
                                                            width={400}
                                                            height={300}
                                                            priority={true}
                                                        />
                                                    </a>
                                                    <div className="post-content px-md-15">
                                                        <h6 className="title lh-32">
                                                            <a href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</a>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-item px-md-15">
                                                    <div className="author-info">
                                                        <i className="icon-user user-icon"></i>
                                                        <span>{post.author}{post.category?.[0]?.name ? `, in ` : ''}{post.category?.[0]?.name && (<a href={`/blog/category/${post.category[0].slug}`} className="category-link">{post.category[0].name}</a>)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {blogData?.recentBlog?.map((post, index) => (
                                        <div className="fl-item" key={`recent-${post.id}`}>
                                            <div className="tf-post-grid hover-image ">
                                                <div className="top">
                                                    <a href={`/blog/${post.slug}`} className="image">
                                                        <BlogImage 
                                                            src={post.feature_image} 
                                                            alt={post.title}
                                                            className="ls-is-cached lazyloaded"
                                                            width={400}
                                                            height={300}
                                                            priority={index < 2}
                                                        />
                                                    </a>
                                                    <div className="post-content px-md-15">
                                                        <h6 className="title lh-32">
                                                            <a href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</a>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-item px-md-15">
                                                    <div className="author-info">
                                                        <i className="icon-user user-icon"></i>
                                                        <span>{post.author}{post.category?.[0]?.name ? `, in ` : ''}{post.category?.[0]?.name && (<a href={`/blog/category/${post.category[0].slug}`} className="category-link">{post.category[0].name}</a>)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {showSkeleton && (
                                        <>
                                            {Array.from({ length: 8 }).map((_, idx) => (
                                                <div className="fl-item" key={`skeleton-${idx}`}>
                                                    <div className="tf-post-grid hover-image ">
                                                        <div className="top">
                                                            <a className="image skeleton">
                                                                <div className="skeleton-image"></div>
                                                            </a>
                                                            <div className="post-content px-md-15">
                                                                <h6 className="title lh-32">
                                                                    <span className="skeleton skeleton-text"></span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="bottom-item px-md-15">
                                                            <div className="author-info">
                                                                <span className="skeleton-avatar skeleton"></span>
                                                                <span className="skeleton skeleton-text short" style={{ marginLeft: 8 }}></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="tf-sidebar sidebar-filter right">

                                    <div className="sidebar-item sidebar-content sidebar-categories mb-40">
                                        <h5 className="title-content fw-5">
                                            Category
                                        </h5>
                                        <ul className="list">
                                            {(blogData?.categories || []).map((cat) => (
                                                <li className="item" key={cat.id}>
                                                    <i className="icon-arrow-right"></i>
                                                    <a href={`/blog/category/${cat.slug}`} className="body-2 fw-5">{cat.name}</a>
                                                    <span className="category-count">{cat.count || 0}</span>
                                                </li>
                                            ))}
                                            {showSkeleton && (!blogData?.categories || blogData?.categories?.length === 0) && (
                                                <>
                                                    {Array.from({ length: 8 }).map((_, idx) => (
                                                        <li className="item" key={`cat-skeleton-${idx}`}>
                                                            <i className="icon-arrow-right"></i>
                                                            <span className="skeleton skeleton-cat"></span>
                                                            <span className="skeleton skeleton-count"></span>
                                                        </li>
                                                    ))}
                                                </>
                                            )}
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
                                    {(blogData?.popularPost || []).map((post) => (
                                        <div className="swiper-slide" key={`popular-${post.id}`}>
                                            <div className="tf-post-grid hover-image">
                                                <div className="top">
                                                    <a href={`/blog/${post.slug}`} className="image">
                                                        <img src={post.feature_image} data-src={post.feature_image} alt="" className="ls-is-cached lazyloaded" />
                                                    </a>
                                                    <div className="post-content px-md-15">
                                                        <h6 className="title lh-32">
                                                            <a href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</a>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-item px-md-15">
                                                    <div className="author-info">
                                                        <i className="icon-user user-icon"></i>
                                                        <span>{post.author}{post.category?.[0]?.name ? `, in ` : ''}{post.category?.[0]?.name && (<a href={`/blog/category/${post.category[0].slug}`} className="category-link">{post.category[0].name}</a>)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {showSkeleton && (
                                        Array.from({ length: 5 }).map((_, idx) => (
                                            <div className="swiper-slide" key={`popular-skeleton-${idx}`}>
                                                <div className="tf-post-grid hover-image">
                                                    <div className="top">
                                                        <a className="image skeleton">
                                                            <div className="skeleton-image"></div>
                                                        </a>
                                                        <div className="post-content px-md-15">
                                                            <h6 className="title lh-32">
                                                                <span className="skeleton skeleton-text"></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-item px-md-15">
                                                        <div className="author-info">
                                                            <span className="skeleton-avatar skeleton"></span>
                                                            <span className="skeleton skeleton-text short" style={{ marginLeft: 8 }}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
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
                                    {(blogData?.trendingPost || []).map((post) => (
                                        <div className="swiper-slide" key={`trending-${post.id}`}>
                                            <div className="tf-post-grid hover-image">
                                                <div className="top">
                                                    <a href={`/blog/${post.slug}`} className="image">
                                                        <img src={post.feature_image} data-src={post.feature_image} alt="" className="ls-is-cached lazyloaded" />
                                                    </a>
                                                    <div className="post-content px-md-15">
                                                        <h6 className="title lh-32">
                                                            <a href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</a>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-item px-md-15">
                                                    <div className="author-info">
                                                        <i className="icon-user user-icon"></i>
                                                        <span>{post.author}{post.category?.[0]?.name ? `, in ` : ''}{post.category?.[0]?.name && (<a href={`/blog/category/${post.category[0].slug}`} className="category-link">{post.category[0].name}</a>)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {showSkeleton && (
                                        Array.from({ length: 5 }).map((_, idx) => (
                                            <div className="swiper-slide" key={`trending-skeleton-${idx}`}>
                                                <div className="tf-post-grid hover-image">
                                                    <div className="top">
                                                        <a className="image skeleton">
                                                            <div className="skeleton-image"></div>
                                                        </a>
                                                        <div className="post-content px-md-15">
                                                            <h6 className="title lh-32">
                                                                <span className="skeleton skeleton-text"></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-item px-md-15">
                                                        <div className="author-info">
                                                            <span className="skeleton-avatar skeleton"></span>
                                                            <span className="skeleton skeleton-text short" style={{ marginLeft: 8 }}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
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