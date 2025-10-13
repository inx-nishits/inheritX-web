'use client';

import PageTitle from '../../PageTitle';
import BlogImage from '../../BlogImage';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export const dynamic = 'force-static';

export default function BlogDetailsPage({ params }) {
  const { slug } = params || {};
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCategorySidebarOpen, setIsCategorySidebarOpen] = useState(false);
  const showSkeleton = loading || !details;

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
    let isMounted = true;
    async function loadDetails() {
      try {
        if (!slug) return;
        const res = await fetch(`https://admin.inheritx.com/wp-json/api/v1/inxblogdetails/${slug}`);
        if (!res.ok) throw new Error('Failed to fetch blog details');
        const json = await res.json();
        if (isMounted) {
          setDetails(json || null);
          setLoading(false);
        }
      } catch (e) {
        if (isMounted) {
          setError(e?.message || 'Error loading blog');
          setLoading(false);
        }
      }
    }
    loadDetails();
    return () => { isMounted = false; };
  }, [slug]);

  const bloginfo = details?.bloginfo || null;
  const title = bloginfo?.title;
  const hero = bloginfo?.feature_image || '/image/blog/blog-fallback.jpg';

  return (
    <main>
      <style jsx>{`
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
        .sidebar-categories .item { display: flex; align-items: center; justify-content: flex-start; padding: 8px 0; }
        .sidebar-categories .item a { flex: 1; margin-right: 10px; }
        .sidebar-categories .item .item-link { display: flex; align-items: center; justify-content: flex-start; width: 100%; }

        /* Hide sidebar on mobile and tablet, show category toggle button */
        @media (max-width: 1199.98px) {
          .tf-sidebar.sidebar-filter {
            display: none !important;
          }
          
          
          /* Category button at top of grid - using theme button style */
          .category-toggle-btn {
            margin-bottom: 30px !important;
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

        /* Skeleton styles (dark theme) */
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
        .skeleton-image { width: 100%; height: 260px; border-radius: 12px; }
        .skeleton-text { height: 18px; width: 80%; border-radius: 6px; background: #2a2a2a; display: inline-block; }
        .skeleton-text.short { width: 35%; }
        .skeleton-text.medium { width: 55%; }
        .skeleton-line { height: 14px; width: 100%; border-radius: 6px; background: #2a2a2a; margin: 10px 0; }
        .skeleton-title { height: 50px; width: 100%; border-radius: 8px; }
        .skeleton-post-title { height: 28px; width: 100%; border-radius: 8px; }
        .skeleton-meta { height: 16px; width: 30%; border-radius: 6px; }
      `}</style>
      {showSkeleton ? (
        //  <div className="page-title-home">
        <div className="tf-container my-5">
          <div className="row">
            <div className="col-12">
              <div className="skeleton skeleton-title"></div>
            </div>
          </div>
        </div>
        // </div>
      ) : (
        <PageTitle title={title} className="mb-5" />
      )}
      <div className="main-content tf-spacing-2">
        <div className="tf-container">
          <div className="row rg-30">
            {/* Category Toggle Button - Only visible on mobile/tablet */}
            <div className="col-12 d-xl-none mb-3">
              <div className="d-flex justify-content-end">
                <button 
                  className="tf-btn category-toggle-btn"
                  onClick={openCategorySidebar}
                  aria-label="Open categories"
                >
                  <span>Categories</span>
                  <i className="icon-bars"></i>
                </button>
              </div>
            </div>
            
            <div className="col-xl-8">
              <div className="wg-details wg-blog-details">
                <div className="details-content p-3">
                  <div className="image img-details mb-15 radius-12 overflow-hidden shadow-soft p-0">
                    {showSkeleton ? (
                      <div className="skeleton skeleton-image"></div>
                    ) : (
                      <BlogImage src={hero} alt={title || 'Blog cover'} aspectRatio="2/1" fit="contain" priority={true} />
                    )}
                  </div>
                  <div className='p-4'>
                    {showSkeleton ? (
                      <>
                        <div className="flex align-items-center g-10 text-medium muted mt-10">
                          <span className="skeleton skeleton-meta"></span>
                          <span className="skeleton skeleton-meta" style={{ marginLeft: 12 }}></span>
                        </div>
                      </>
                    ) : (
                      <>
                        <h1 className="fs-32 fw-7 lh-42 mb-4">{title}</h1>
                        <div className="flex align-items-center g-10 text-medium muted">
                          <span className="badge-soft-primary">{bloginfo?.category?.[0]?.name || 'Blog'}</span>
                          {bloginfo?.author && (<><span className="dot"></span><span>{bloginfo.author}</span></>)}
                        </div>
                      </>
                    )}
                  </div>
                  <div className='p-4 pt-0'>
                    {!showSkeleton && !error && bloginfo?.content && (
                      <div className="rich-content" dangerouslySetInnerHTML={{ __html: bloginfo.content }} />
                    )}
                    {showSkeleton && (
                      <div>
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div className="skeleton-line skeleton" key={`line-${i}`}></div>
                        ))}
                      </div>
                    )}
                    {error && !showSkeleton && (
                      <div className="rich-content"><p>{error}</p></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tf-sidebar sidebar-filter right">

                <div className="sidebar-item sidebar-content sidebar-categories mb-40">
                  <div className="title-content fw-5">
                    Category
                  </div>
                  <ul className="list">
                    {!showSkeleton && (details?.categories || []).map((cat) => (
                      <li className="item" key={cat.id}>
                        <Link href={`/blog/category/${cat.slug}`} className="item-link body-2 fw-5">
                          <span className="flex align-items-center" style={{ gap: 8 }}>
                            <i className="icon-arrow-right"></i>
                            <span>{cat.name}</span>
                          </span>
                          {/* <span className="category-count">{cat.count}</span> */}
                        </Link>
                      </li>
                    ))}
                    {showSkeleton && (
                      Array.from({ length: 8 }).map((_, i) => (
                        <li className="item" key={`cat-skel-${i}`}>
                          <span className="skeleton skeleton-text medium" style={{ display: 'block' }}></span>
                        </li>
                      ))
                    )}
                  </ul>
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
                  {(details?.categories || []).map((cat) => (
                    <li className="item" key={cat.id}>
                      <i className="icon-arrow-right"></i>
                      <Link 
                        href={`/blog/category/${cat.slug}`} 
                        className="body-2 fw-5"
                        onClick={closeCategorySidebar}
                      >
                        {cat.name}
                      </Link>
                      <span className="category-count">{cat.count || 0}</span>
                    </li>
                  ))}
                  {showSkeleton && (!details?.categories || details?.categories?.length === 0) && (
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
    </main>
  );
}


