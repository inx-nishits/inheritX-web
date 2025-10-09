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
  const showSkeleton = loading || !details;

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
  const title = bloginfo?.title ;
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
        .skeleton-title { height: 36px; width: 100%; border-radius: 8px; }
        .skeleton-post-title { height: 28px; width: 100%; border-radius: 8px; }
        .skeleton-meta { height: 16px; width: 30%; border-radius: 6px; }
      `}</style>
      {showSkeleton ? (
        <div className="tf-container">
          <div className="p-3">
            <div className="skeleton skeleton-title"></div>
          </div>
        </div>
      ) : (
        <PageTitle title={title} className="mb-0" />
      )}
      <div className="main-content tf-spacing-2">
        <div className="tf-container">
          <div className="row rg-30">
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
                  <h5 className="title-content fw-5">
                    Category
                  </h5>
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
    </main>
  );
}


