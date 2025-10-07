'use client';

import PageTitle from '../../components/PageTitle';
import { useMemo } from 'react';

export const dynamic = 'force-static';

const POSTS = [
  {
    slug: 'top-15-flutter-widgets-for-app-development',
    title: 'Top 15 Flutter Widgets Are Best To Use for App Development',
    hero: '/image/home/Flutter-App-Development.jpg',
    tags: ['Flutter', 'Widgets', 'App Development'],
    author: 'InheritX',
    publishedOn: 'December 12, 2024',
  },
  {
    slug: 'why-businesses-prefer-flutter-app-development',
    title: 'Why Modern Businesses Prefer Flutter Application Development Services',
    hero: '/image/home/app-development-services.jpg',
    tags: ['Flutter', 'Business', 'Mobile'],
    author: 'InheritX',
    publishedOn: 'December 18, 2024',
  },
];

export default function Page({ params }) {
  const { slug } = params || {};

  const post = useMemo(() => POSTS.find(p => p.slug === slug), [slug]);

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
        .sidebar-categories .item { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; }
        .sidebar-categories .item a { flex: 1; margin-right: 10px; }

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
      `}</style>
      <PageTitle title={post?.title || 'Blog Details'} className="mb-0" />
      <div className="main-content tf-spacing-2">
        <div className="tf-container">
          <div className="row rg-30">
            <div className="col-xl-8">
              <div className="wg-details wg-blog-details">
                <div className="details-content p-3">
                  <div className="image img-details mb-15 radius-12 overflow-hidden shadow-soft p-0">
                    <img src={post?.hero || '/image/blog/img-blog-details-1.jpg'} alt={post?.title || 'Blog cover'} />
                  </div>
                  <div className='p-4'>
                    <h1 className="fs-32 fw-7 lh-42 mb-4">{post?.title || 'Blog Details'}</h1>
                    <div className="flex align-items-center g-10 text-medium muted">
                      <span className="badge-soft-primary">{post?.tags?.[0] || 'Blog'}</span>
                      <span className="dot"></span>
                      <span>{post?.publishedOn || ''}</span>
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
    </main>
  );
}


