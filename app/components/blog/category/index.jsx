'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogImage from '../../../components/BlogImage';
import Link from 'next/link';

export const dynamic = 'force-static';

export default function CategoryDetailsPage() {
    const params = useParams();
    const categorySlug = params?.category_slug;
    const [categoryData, setCategoryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const showSkeleton = loading || !categoryData;

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

                const res = await fetch(`https://admin.inheritx.com/wp-json/api/v1/inxblog/1/?category_slug=${categorySlug}`, {
                    cache: 'no-store', // Ensure fresh data
                    headers: {
                        'Accept': 'application/json',
                    }
                });

                if (!res.ok) throw new Error('Failed to fetch category data');
                const json = await res.json();

                if (isMounted) {
                    setCategoryData(json);
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
          justify-content: flex-start;
          padding: 8px 0;
        }
        
        .sidebar-categories .item a {
          flex: 1;
          margin-right: 10px;
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
        .skeleton-title {
          height: 44px;
          width: 60%;
          border-radius: 6px;
          background: #2a2a2a;
          display: inline-block;
        }
        .skeleton-breadcrumb {
          height: 14px;
          width: 100px;
          border-radius: 4px;
          background: #2a2a2a;
          display: inline-block;
        }
      `}</style>

            {/* <!-- Page-title --> */}
            <div className="page-title">
                <div className="tf-container">
                    <div className="page-title-content text-center">
                        {showSkeleton ? (
                            <>
                                <h1 className="title ml-11 split-text effect-right">
                                    <span className="skeleton skeleton-title"></span>
                                </h1>
                                <div className="breadkcum mb-5">
                                    <span className="link-breadkcum body-2 fw-7 split-text effect-right skeleton-breadcrumb skeleton"></span>
                                    <span className="dot"></span>
                                    <span className="link-breadkcum body-2 fw-7 split-text effect-right skeleton-breadcrumb skeleton" style={{ width: 80 }}></span>
                                    <span className="dot"></span>
                                    <span className="page-breadkcum body-2 fw-7 split-text effect-right skeleton-breadcrumb skeleton" style={{ width: 140 }}></span>
                                </div>
                                <p className='pt-4'>
                                    <span className="skeleton skeleton-text" style={{ width: '70%' }}></span>
                                </p>
                            </>
                        ) : (
                            <>
                                <h1 className="title ml-11 split-text effect-right">
                                    {categoryData?.categoryName || 'Category'}
                                </h1>
                                <div className="breadkcum mb-5">
                                    <Link href="/" className="link-breadkcum body-2 fw-7 split-text effect-right">Home</Link>
                                    <span className="dot"></span>
                                    <Link href="/blog" className="link-breadkcum body-2 fw-7 split-text effect-right">Blog</Link>
                                    <span className="dot"></span>
                                    <span className="page-breadkcum body-2 fw-7 split-text effect-right">{categoryData?.categoryName || 'Category'}</span>
                                </div>
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

                                    {categoryData?.bloginfo?.map((post, index) => (
                                        <div className="fl-item" key={`category-${post.id}`}>
                                            <div className="tf-post-grid hover-image ">
                                                <div className="top">
                                                    <Link href={`/blog/${post.slug}`} className="image">
                                                        <BlogImage
                                                            src={post.feature_image}
                                                            alt={post.title}
                                                            className="ls-is-cached lazyloaded"
                                                            width={400}
                                                            height={300}
                                                            priority={index < 3}
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
                                                        <span>{post.author}, in <Link href={`/blog/category/${categorySlug}`} className="category-link">{categoryData?.categoryName}</Link></span>
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
                                            All Categories
                                        </h5>
                                        <ul className="list">
                                            {(categoryData?.categories || []).map((cat) => (
                                                <li className="item" key={cat.id}>
                                                    <i className="icon-arrow-right"></i>
                                                    <Link href={`/blog/category/${cat.slug}`} className="body-2 fw-5">{cat.name}</Link>
                                                    {/* <span className="category-count">{cat.count || 0}</span> */}
                                                </li>
                                            ))}
                                            {showSkeleton && (!categoryData?.categories || categoryData?.categories?.length === 0) && (
                                                <>
                                                    {Array.from({ length: 8 }).map((_, idx) => (
                                                        <li className="item" key={`cat-skeleton-${idx}`}>
                                                            <i className="icon-arrow-right"></i>
                                                            <span className="skeleton skeleton-cat"></span>
                                                            <span className=""></span>
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
        </>
    );
}
