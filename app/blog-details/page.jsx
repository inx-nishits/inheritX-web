"use client";
import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
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
      <PageTitle title="Blog Details" className="mb-0" />
      <div className="main-content tf-spacing-2">
        <div className="tf-container">
          <div className="row rg-30">
            <div className="col-xl-8">
              <div className="wg-details wg-blog-details">
                <div className="details-content">
                  <div className="image img-details mb-15 radius-12 overflow-hidden shadow-soft">
                    <img src="/image/blog/img-blog-details-1.jpg" alt="Blog cover" />
                  </div>
                  <div>
                    <h1 className="fs-32 fw-7 lh-42 mb-8">Blog Details</h1>
                    <div className="flex align-items-center g-10 text-medium muted">
                      <span className="badge-soft-primary">Blog</span>
                      <span className="dot"></span>
                      <span>—</span>
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

                <div className="sidebar-item sidebar-content sidebar-recent-posts">
                  <h4 className="title-content fw-5">
                    Latest News
                  </h4>
                  <div className="list">
                    <div className="item">
                      <div className="image">
                        <a href="blog-details.html">
                          <img src="image/blog/blog-sidebar-1.jpg" data-src="image/blog/blog-sidebar-1.jpg" alt="" className=" ls-is-cached lazyloaded" />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="title lh-24">
                          <a href="blog-details.html" className="line-clamp-2">
                            Tips For Conducting to Usability Studies With Participants
                          </a>
                        </h6>
                        <div className="bottom-item">
                          <div className="author-info">
                            <i className="icon-user user-icon"></i>
                            <span>Sandip Modi, in <a href="#" className="category-link">Flutter Application Development</a></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="image">
                        <a href="blog-details.html">
                          <img src="image/blog/blog-sidebar-2.jpg" data-src="image/blog/blog-sidebar-2.jpg" alt="" className=" ls-is-cached lazyloaded" />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="title lh-24">
                          <a href="blog-details.html" className="line-clamp-2">
                            Online Environment Work For Older Users systems ways Tips Usability Studies Pants
                          </a>
                        </h6>
                        <div className="bottom-item">
                          <i className="icon-email"></i>
                          <span>December 24, 2025</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="image">
                        <a href="blog-details.html">
                          <img src="image/blog/blog-sidebar-3.jpg" data-src="image/blog/blog-sidebar-3.jpg" alt="" className=" ls-is-cached lazyloaded" />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="title lh-24">
                          <a href="blog-details.html" className="line-clamp-2">
                            Tips For Conducting to Usability Studies With Participants
                          </a>
                        </h6>
                        <div className="bottom-item">
                          <i className="icon-email"></i>
                          <span>December 23, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

