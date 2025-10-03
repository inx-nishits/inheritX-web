export default function PortfolioListSection() {
  return (
    <section className="section-project tf-spacing-2">
      <div className="tf-container">
        <div className="row g-30">
          <div className="col-md-12 d-flex align-items-center g-30 mb-30">
            <a className="image me-4" href="/porfolio-details"><img src="/image/project-item/project-item-1.jpg" alt="" className="lazyload" /></a>
            <div>
              <h5 className="fw-6 mb-10"><a href="/porfolio-details">Project Title 1</a></h5>
              <p className="mb-0">Short description that mirrors the list layout.</p>
            </div>
          </div>
          <div className="col-md-12 d-flex align-items-center g-30 mb-30">
            <a className="image me-4" href="/porfolio-details"><img src="/image/project-item/project-item-2.jpg" alt="" className="lazyload" /></a>
            <div>
              <h5 className="fw-6 mb-10"><a href="/porfolio-details">Project Title 2</a></h5>
              <p className="mb-0">Short description that mirrors the list layout.</p>
            </div>
          </div>
          <div className="col-md-12 d-flex align-items-center g-30 mb-30">
            <a className="image me-4" href="/porfolio-details"><img src="/image/project-item/project-item-3.jpg" alt="" className="lazyload" /></a>
            <div>
              <h5 className="fw-6 mb-10"><a href="/porfolio-details">Project Title 3</a></h5>
              <p className="mb-0">Short description that mirrors the list layout.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


