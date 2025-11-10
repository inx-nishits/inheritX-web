'use client';

import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import BlogImage from '../BlogImage';
import ImagePreloader from '../ImagePreloader';
import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs';
export const dynamic = 'force-static';

export default function BlogListPage() {
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const showSkeleton = loading || !blogData;
    const [subEmail, setSubEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [isCategorySidebarOpen, setIsCategorySidebarOpen] = useState(false);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subEmail);
    const emailInputRef = useRef(null);

    // Category sidebar toggle functions
    const openCategorySidebar = () => {
        setIsCategorySidebarOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeCategorySidebar = () => {
        setIsCategorySidebarOpen(false);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    // Close sidebar when clicking overlay
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeCategorySidebar();
        }
    };

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

        /* Hide sidebar on mobile and tablet, show category toggle button */
        @media (max-width: 1199.98px) {
          .tf-sidebar.sidebar-filter {
            display: none !important;
          }
          
          
          /* Category button at top of grid - using theme button style */
          .category-toggle-btn {
            margin-bottom: 0px !important;
            max-width: 200px !important;
            margin-left: auto !important;
          }
        }
        
        /* Hide category button on desktop */
        @media (min-width: 1200px) {
          .category-toggle-btn {
            display: none !important;
          }
        }
        
        /* Category sidebar overlay and slide-in animation */
        .category-sidebar-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          background: rgba(0, 0, 0, 0.5) !important;
          z-index: 9998 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          transition: all 0.3s ease !important;
        }
        
        .category-sidebar-overlay.active {
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        .category-sidebar {
          position: fixed !important;
          top: 0 !important;
          right: -400px !important;
          width: 350px !important;
          height: 100% !important;
          background: #1a1a1a !important;
          z-index: 9999 !important;
          transition: right 0.3s ease !important;
          display: flex !important;
          flex-direction: column !important;
          box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3) !important;
        }
        
        .category-sidebar.active {
          right: 0 !important;
        }
        
        .category-sidebar-header {
          position: sticky !important;
          top: 0 !important;
          z-index: 10 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          padding: 20px !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: #2a2a2a !important;
          flex-shrink: 0 !important;
        }
        
        .category-sidebar-title {
          color: white !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          margin: 0 !important;
        }
        
        .category-sidebar-close {
          background: none !important;
          border: none !important;
          color: white !important;
          font-size: 20px !important;
          cursor: pointer !important;
          padding: 5px !important;
          border-radius: 4px !important;
          transition: background 0.3s ease !important;
        }
        
        .category-sidebar-close:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
        
        .category-sidebar-content {
          flex: 1 !important;
          overflow-y: auto !important;
          padding: 20px !important;
        }
        
        .category-sidebar .sidebar-categories .item {
          padding: 12px 0 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        }
        
        .category-sidebar .sidebar-categories .item:last-child {
          border-bottom: none !important;
        }
        
        .category-sidebar .sidebar-categories .item a {
          color: #ffffff !important;
          text-decoration: none !important;
          transition: color 0.3s ease !important;
        }
        
        .category-sidebar .sidebar-categories .item a:hover {
          color: var(--primary) !important;
        }
        
        .category-sidebar .sidebar-categories .item i {
          color: var(--primary) !important;
          margin-right: 10px !important;
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
          display: flex;
          align-items: center;
          gap: 8px;
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
          background: #00BED4 !important;
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
          background: #00BED4 !important;
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
          background: #00BED4 !important;
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
          background: #00BED4 !important;
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
        /* When error message is shown, align items to start to keep button aligned with input top */
        .newsletter-form .form-group.align-items-start {
          align-items: flex-start !important;
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
          border-radius: 0px; /* match card/image rounding */
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
          aspect-ratio: 4 / 2; /* match BlogImage aspectRatio */
          height: auto;
          min-height: 220px; /* preserve space similar to images */
          border-radius: 8px;
        }
        .skeleton-text {
          height: 16px;
          width: 80%;
          border-radius: 4px;
          background: #2a2a2a;
          display: block;
          margin-top: 8px; /* align with title spacing */
        }
        .skeleton-text.short { width: 40%; }
        .skeleton-name {
          height: 14px;
          width: 120px; /* approximate author name width */
          border-radius: 4px;
          background: #2a2a2a;
          display: inline-block;
        }
        .skeleton-avatar {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #2a2a2a;
          flex-shrink: 0; /* keep avatar size consistent */
        }
        .skeleton-cat {
          height: 14px;
          width: 60%;
          border-radius: 4px;
          background: #2a2a2a;
          display: inline-block; /* align like category link */
        }
          .skeleton-count {
  width: 30px;     
  height: 30px;     
  border-radius: 9999px;  
  background: #2a2a2a;
  margin-left: auto; /* mirror real count alignment */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
      `}</style>
            {/* <!-- Page-title --> */}

            <div className="page-title">
                <div className="tf-container">
                    <div className="page-title-content text-center">
                        <h1 className="title">
                            Blog
                        </h1>
                        <Breadcrumbs />

                        <p className='pt-2'>Expert Speak on Trending Topics</p>
                    </div>
                </div>
            </div>

            {/* <!-- /.page-title --> */}

            {/* <!-- Main-content --> */}

            <div className="main-content">
                <div className="list-post-gird tf-spacing-2">
                    <div className="tf-container">
                        <div className="row rg-30">
                            {/* Category Toggle Button - Only visible on mobile/tablet */}
                            <div className="col-12 d-xl-none mb-0">
                                <div className="d-flex justify-content-end">
                                    <button
                                        className="tf-btn category-toggle-btn px-3 py-4"
                                        onClick={openCategorySidebar}
                                        aria-label="Open categories"
                                    >
                                        <span>Categories</span>
                                        <i className="icon-bars"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="col-xl-8">

                                <div className="tf-grid-2 loadmore-item">
                                    {error && !showSkeleton && (
                                        <div className="fl-item">
                                            <div className="tf-post-grid hover-image ">
                                                <div className="top">
                                                    <div className="post-content px-md-15">
                                                        <p className="title lh-32">{error}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {blogData?.singleBlog?.slice(0, 1).map((post) => (
                                        <div className="fl-item" key={`single-${post.id}`}>
                                            <div className="tf-post-grid hover-image ">
                                                <div className="top">
                                                    <Link href={`/blog/${post.slug}`} className="image" aria-label={`Read full article: ${post.title}`}>
                                                        <BlogImage
                                                            src={post.feature_image}
                                                            alt={post.title}
                                                            className="ls-is-cached lazyloaded"
                                                            aspectRatio="4/2"
                                                            fit="contain"
                                                            priority={true}
                                                        />
                                                    </Link>
                                                    <div className="post-content px-md-15">
                                                        <p className="title lh-32">
                                                            <Link href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bottom-item px-md-15">
                                                    <div className="author-info">
                                                        <i className="icon-user user-icon"></i>
                                                        <span>{post.author}{post.category?.[0]?.name ? `, in ` : ''}{post.category?.[0]?.name && (<Link href={`/blog/category/${post.category[0].slug}`} className="category-link">{post.category[0].name}</Link>)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {blogData?.recentBlog?.map((post, index) => (
                                        <div className="fl-item" key={`recent-${post.id}`}>
                                            <div className="tf-post-grid hover-image ">
                                                <div className="top">
                                                    <Link href={`/blog/${post.slug}`} className="image" aria-label={`Read full article: ${post.title}`}>
                                                        <BlogImage
                                                            src={post.feature_image}
                                                            alt={post.title}
                                                            className="ls-is-cached lazyloaded"
                                                            aspectRatio="4/2"
                                                            fit="contain"
                                                            priority={index < 2}
                                                        />
                                                    </Link>
                                                    <div className="post-content px-md-15">
                                                        <p className="title lh-32">
                                                            <Link href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bottom-item px-md-15">
                                                    <div className="author-info">
                                                        <i className="icon-user user-icon"></i>
                                                        <span>{post.author}{post.category?.[0]?.name ? `, in ` : ''}{post.category?.[0]?.name && (<Link href={`/blog/category/${post.category[0].slug}`} className="category-link">{post.category[0].name}</Link>)}</span>
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
                                                            <div className="image skeleton">
                                                                <div className="skeleton-image"></div>
                                                            </div>
                                                            <div className="post-content px-md-15">
                                                                <p className="title lh-32">
                                                                    <span className="skeleton skeleton-text"></span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="bottom-item px-md-15">
                                                            <div className="author-info">
                                                                <span className="skeleton-avatar skeleton"></span>
                                                                <span className="skeleton skeleton-name" style={{ marginLeft: 8 }}></span>
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

                                    <div className="sidebar-item sidebar-content sidebar-categories mb-3">
                                        <div className="title-content fw-5">
                                            Category
                                        </div>
                                        <ul className="list">
                                            {(blogData?.categories || []).map((cat) => (
                                                <li className="item" key={cat.id}>
                                                    <i className="icon-arrow-right"></i>
                                                    <Link href={`/blog/category/${cat.slug}`} className="fs-4 fw-5">{cat.name}</Link>
                                                    <span className="category-count">{cat.count || cat.post_count || cat.total_posts || cat.posts_count || cat.total || cat.postCount || 0}</span>
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
            <div className="most-popular-section tf-spacing-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section mb-3 mb-xl-5 text-center">
                                <div className="sub-title body-2 fw-7 mb-17 ">
                                    Most Popular
                                </div>
                                <h2 className="title fw-6 ">
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
                                                    <Link href={`/blog/${post.slug}`} className="image" aria-label={`Read full article: ${post.title}`}>
                                                        <BlogImage
                                                            src={post.feature_image}
                                                            alt={post.title || ''}
                                                            aspectRatio="4/2"
                                                            fit="contain"
                                                            priority={false}
                                                        />
                                                    </Link>
                                                    <div className="post-content px-md-15">
                                                        <p className="title lh-32">
                                                            <Link href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bottom-item px-md-15">
                                                    <div className="author-info">
                                                        <i className="icon-user user-icon"></i>
                                                        <span>{post.author}{post.category?.[0]?.name ? `, in ` : ''}{post.category?.[0]?.name && (<Link href={`/blog/category/${post.category[0].slug}`} className="category-link">{post.category[0].name}</Link>)}</span>
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
                                                            <p className="title lh-32">
                                                                <span className="skeleton skeleton-text"></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-item px-md-15">
                                                        <div className="author-info">
                                                            <span className="skeleton-avatar skeleton"></span>
                                                            <span className="skeleton skeleton-name" style={{ marginLeft: 8 }}></span>
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
            <div className="trending-section tf-spacing-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section mb-3 mb-xl-5 text-center">
                                <div className="sub-title body-2 fw-7 mb-17 ">
                                    Trending Now
                                </div>
                                <h2 className="title fw-6 ">
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
                                                    <Link href={`/blog/${post.slug}`} className="image" aria-label={`Read full article: ${post.title}`}>
                                                        <BlogImage
                                                            src={post.feature_image}
                                                            alt={post.title || ''}
                                                            aspectRatio="4/2"
                                                            fit="contain"
                                                            priority={false}
                                                        />
                                                    </Link>
                                                    <div className="post-content px-md-15">
                                                        <h6 className="title lh-32">
                                                            <Link href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-item px-md-15">
                                                    <div className="author-info">
                                                        <i className="icon-user user-icon"></i>
                                                        <span>{post.author}{post.category?.[0]?.name ? `, in ` : ''}{post.category?.[0]?.name && (<Link href={`/blog/category/${post.category[0].slug}`} className="category-link">{post.category[0].name}</Link>)}</span>
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
                                                            <span className="skeleton skeleton-name" style={{ marginLeft: 8 }}></span>
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

                                <form className="newsletter-form" onSubmit={async (e) => {
                                    e.preventDefault();
                                    if (submitting) return;

                                    // Validate email before submitting
                                    const trimmed = (subEmail || '').trim();
                                    if (!trimmed) {
                                        setEmailError('Email is required');
                                        emailInputRef.current?.focus();
                                        return;
                                    }
                                    if (!isEmailValid) {
                                        setEmailError('Please enter a valid email address');
                                        emailInputRef.current?.focus();
                                        return;
                                    }
                                    try {
                                        setSubmitting(true);
                                        const formData = new FormData();
                                        formData.append("email", subEmail);
                                        const res = await fetch("https://admin.inheritx.com/wp-json/api/v1/subscription", {
                                            method: "POST",
                                            body: formData,
                                        });
                                        let data;
                                        try {
                                            data = await res.json();
                                        } catch (_) {
                                            data = {};
                                        }
                                        if (!res.ok || (typeof data.status !== "undefined" && Number(data.status) !== 1)) {
                                            const errMsg = data?.message || "Subscription failed";
                                            throw new Error(errMsg);
                                        }
                                        toast.success(data?.message || "You have subscribed successfully");
                                        setSubEmail("");
                                        setEmailError("");
                                    } catch (err) {
                                        const msg = err?.message || "Unable to subscribe. Please try again.";
                                        toast.error(msg);
                                    } finally {
                                        setSubmitting(false);
                                    }
                                }}>
                                    <div className={`form-group d-flex justify-content-center ${emailError ? 'align-items-center' : 'align-items-center'}`}>
                                        <div className="input-wrapper">
                                            <input
                                                type="email"
                                                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                                placeholder="Enter your email address"
                                                value={subEmail}
                                                onChange={(e) => {
                                                    setSubEmail(e.target.value);
                                                    if (emailError) setEmailError("");
                                                }}
                                                aria-invalid={!!emailError}
                                                aria-describedby={emailError ? 'newsletter-email-error' : undefined}
                                                ref={emailInputRef}
                                            />
                                            {emailError && (
                                                <div id="newsletter-email-error" className="invalid-feedback d-block" style={{ textAlign: 'left', marginTop: 8 }}>
                                                    {emailError}
                                                </div>
                                            )}
                                        </div>
                                        <button type="submit" className="tf-btn newsletter-btn" disabled={submitting} aria-disabled={submitting}>
                                            <span>{submitting ? "Joining..." : "Join Now"}</span>
                                            <i className="icon-arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Sidebar Overlay and Sidebar */}
            {isCategorySidebarOpen && (
                <>
                    <div
                        className={`category-sidebar-overlay ${isCategorySidebarOpen ? 'active' : ''}`}
                        onClick={handleOverlayClick}
                    />
                    <div className={`category-sidebar ${isCategorySidebarOpen ? 'active' : ''}`}>
                        <div className="category-sidebar-header">
                            <div className="category-sidebar-title">Categories</div>
                            <button
                                className="category-sidebar-close"
                                onClick={closeCategorySidebar}
                                aria-label="Close categories"
                            >
                                <i className="icon-close"></i>
                            </button>
                        </div>
                        <div className="category-sidebar-content">
                            <div className="sidebar-item sidebar-content sidebar-categories">
                                <ul className="list">
                                    {(blogData?.categories || []).map((cat) => (
                                        <li className="item" key={cat.id}>
                                            <i className="icon-arrow-right"></i>
                                            <Link
                                                href={`/blog/category/${cat.slug}`}
                                                className="fs-4 fw-5"
                                                onClick={closeCategorySidebar}
                                            >
                                                {cat.name}
                                            </Link>
                                            <span className="category-count">{cat.count || cat.post_count || cat.total_posts || cat.posts_count || cat.total || cat.postCount || 0}</span>
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
                </>
            )}
        </>
    );
}