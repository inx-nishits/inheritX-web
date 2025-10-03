export default function PortfolioDetailsSection() {
  return (
    <section className="section-project-details tf-spacing-2">
      <div className="tf-container">
        <div className="row g-30">
          <div className="col-lg-7">
            <img src="/image/section/project-details-1.jpg" alt="" className="lazyload mb-30" />
            <img src="/image/section/project-details-2.jpg" alt="" className="lazyload" />
          </div>
          <div className="col-lg-5">
            <h2 className="fw-6 mb-20">Project Overview</h2>
            <p className="lh-30">A descriptive overview matching the theme's details page layout and typography.</p>
            <ul className="list-unstyled lh-30">
              <li><strong>Client:</strong> Acme Inc.</li>
              <li><strong>Services:</strong> Web Development, UX</li>
              <li><strong>Year:</strong> 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


