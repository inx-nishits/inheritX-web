'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogImage from '../../../components/BlogImage';
import Link from 'next/link';
import Breadcrumbs from '../../../components/Breadcrumbs';

export const dynamic = 'force-static';

export default function CategoryDetailsPage() {
  const params = useParams();
  const categorySlug = params?.category_slug;
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCategorySidebarOpen, setIsCategorySidebarOpen] = useState(false);
  const showSkeleton = loading || !categoryData;

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
    async function loadCategoryData() {
      try {
        if (!categorySlug) return;

        // Show loading immediately
        setLoading(true);
        setError(null);

        // Fetch category-specific data
        const categoryRes = await fetch(`https://admin.inheritx.com/wp-json/api/v1/inxblog/1/?category_slug=${categorySlug}`, {
          cache: 'no-store', // Ensure fresh data
          headers: {
            'Accept': 'application/json',
          }
        });

        if (!categoryRes.ok) throw new Error('Failed to fetch category data');
        const categoryJson = await categoryRes.json();

        // Fetch categories with counts from main blog API
        const categoriesRes = await fetch('https://admin.inheritx.com/wp-json/api/v1/inxblog', {
          cache: 'no-store',
          headers: {
            'Accept': 'application/json',
          }
        });
        let categoriesWithCounts = [];
        if (categoriesRes.ok) {
          const categoriesJson = await categoriesRes.json();
          categoriesWithCounts = categoriesJson?.categories || [];
        }

        // Merge the data
        const mergedData = {
          ...categoryJson,
          categories: categoriesWithCounts
        };

        // Data merged successfully

        if (isMounted) {
          setCategoryData(mergedData);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Error loading category blogs');
          setLoading(false);
        }
      }
    }

    // Load data immediately
    loadCategoryData();

    return () => {
      isMounted = false;
    };
  }, [categorySlug]);

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
          aspect-ratio: 4/2;
          margin: 15px 15px 0;
          min-height: inherit;
          height: initial !important;
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
          display: inline-block; /* align like category link */
        }
        .skeleton-count {
          width: 30px;     
          height: 30px;     
          border-radius: 9999px;  
          background: #2a2a2a;
          margin-left: auto; /* mirror real count alignment */
        }
        .skeleton-title {
          height: 44px;
          width: 60%;
          border-radius: 6px;
          background: #2a2a2a;
          display: inline-block;
          text-align: left;
        }
        
        /* Override text-center for skeleton title */
        .page-title-content.text-center .skeleton-title {
          text-align: left !important;
        }
        .skeleton-breadcrumb {
          height: 14px;
          width: 100px;
          border-radius: 4px;
          background: #2a2a2a;
          display: inline-block;
        }
        .skeleton-name {
          height: 14px;
          width: 120px; /* approximate author name width */
          border-radius: 4px;
          background: #2a2a2a;
          display: inline-block;
        }
        
        /* Ensure skeleton items have same styling as actual posts */
        .fl-item .skeleton {
          background: #2a2a2a;
        }
        
        .fl-item .skeleton::after {
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%);
        }
        
        /* Make sure skeleton images maintain aspect ratio properly */
        .skeleton .skeleton-image {
          background: #2a2a2a;
          min-height: 150px;
        }
        
        /* Ensure skeleton image container matches actual image container */
        .skeleton.image {
          margin: 15px 15px 0;
          min-height: inherit;
          height: initial !important;
        }
        
        /* Ensure skeleton post grid matches actual styling */
        .skeleton .tf-post-grid {
          background-color: var(--dark-2);
          border: 1px solid var(--stroke-2);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        
      `}</style>

      {/* <!-- Page-title --> */}
      <div className="page-title">
        <div className="tf-container">
          <div className="page-title-content text-center">
            {showSkeleton ? (
              <>
                <h1 className="title">
                  <span className="skeleton skeleton-title"></span>
                </h1>
                <div className="breadkcum mb-5">
                  <span className="link-breadkcum body-2 fw-7 skeleton-breadcrumb skeleton"></span>
                  {/* <span className="dot"></span> */}
                  <span className="link-breadkcum body-2 fw-7 skeleton-breadcrumb skeleton" style={{ width: 80 }}></span>
                  {/* <span className="dot"></span> */}
                  <span className="page-breadkcum body-2 fw-7 skeleton-breadcrumb skeleton" style={{ width: 140 }}></span>
                </div>
                <p className='pt-4'>
                  <span className="skeleton skeleton-text" style={{ width: '70%' }}></span>
                </p>
              </>
            ) : (
              <>
                <h1 className="title">
                  {categoryData?.categoryName || 'Category'}
                </h1>
                <Breadcrumbs />
                <p className='pt-4'>
                  {categoryData?.total_post ? `${categoryData.total_post} articles` : 'Expert insights and articles'} in {categoryData?.categoryName || 'this category'}.
                </p>
              </>
            )}
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
                    className="tf-btn category-toggle-btn  px-3 py-4"
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

                  {categoryData?.bloginfo?.map((post, index) => (
                    <div className="fl-item" key={`category-${post.id}`}>
                      <div className="tf-post-grid hover-image ">
                        <div className="top">
                          <Link href={`/blog/${post.slug}`} className="image" aria-label={`Read full article: ${post.title}`}>
                            <BlogImage
                              src={post.feature_image}
                              alt={post.title}
                              className="ls-is-cached lazyloaded"
                              aspectRatio="4/2"
                              fit="contain"
                              priority={index < 3}
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
                            <span>{post.author}, in <Link href={`/blog/category/${categorySlug}`} className="category-link">{categoryData?.categoryName}</Link></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {showSkeleton && (
                    Array.from({ length: 5 }).map((_, idx) => (
                      <div className="fl-item" key={`category-skeleton-${idx}`}>
                        <div className="tf-post-grid hover-image">
                          <div className="top">
                            <div className="image skeleton">
                              <div className="skeleton-image"></div>
                            </div>
                            <div className="post-content" style={{ padding: '24px' }}>
                              <p className="title lh-32">
                                <span className="skeleton skeleton-text" style={{ width: '90%', marginBottom: '8px', display: 'block' }}></span>
                                <span className="skeleton skeleton-text" style={{ width: '75%', marginBottom: '8px', display: 'block' }}></span>
                                <span className="skeleton skeleton-text" style={{ width: '60%', display: 'block' }}></span>
                              </p>
                            </div>
                          </div>
                          <div className="bottom-item" style={{ padding: '25px 50px 22px', borderTop: '1px solid var(--stroke-2)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="author-info">
                              <span className="skeleton-avatar skeleton"></span>
                              <span className="skeleton skeleton-name" style={{ marginLeft: 8, width: '80px' }}></span>
                              <span className="skeleton skeleton-text" style={{ marginLeft: 8, width: '60px' }}></span>
                              <span className="skeleton skeleton-text" style={{ marginLeft: 8, width: '100px' }}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="col-xl-4">
                <div className="tf-sidebar sidebar-filter right">
                  <div className="sidebar-item sidebar-content sidebar-categories mb-3">
                    <div className="title-content fw-5">
                      All Categories
                    </div>
                    <ul className="list">
                      {(categoryData?.categories || []).map((cat) => (
                        <li className="item" key={cat.id}>
                          <i className="icon-arrow-right"></i>
                          <Link href={`/blog/category/${cat.slug}`} className="fs-4 fw-5">{cat.name}</Link>
                          <span className="category-count">{cat.count || cat.post_count || cat.total_posts || cat.posts_count || cat.total || cat.postCount || 0}</span>
                        </li>
                      ))}
                      {showSkeleton && (!categoryData?.categories || categoryData?.categories?.length === 0) && (
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
                  {(categoryData?.categories || []).map((cat) => (
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
                  {showSkeleton && (!categoryData?.categories || categoryData?.categories?.length === 0) && (
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
