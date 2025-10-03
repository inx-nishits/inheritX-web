export default function ServicesList() {
  return (
    <section className="section-services tf-spacing-2">
      <div className="mask mask-1"></div>
      <div className="tf-container">
        <div className="row g-30">
          <div className="col-md-4">
            <div className="service-card"><img src="/image/services-item/services-1.jpg" alt="" /><h5>Web Development</h5></div>
          </div>
          <div className="col-md-4">
            <div className="service-card"><img src="/image/services-item/services-2.jpg" alt="" /><h5>Cloud & DevOps</h5></div>
          </div>
          <div className="col-md-4">
            <div className="service-card"><img src="/image/services-item/services-3.jpg" alt="" /><h5>UX/UI Design</h5></div>
          </div>
        </div>
      </div>
    </section>
  );
}


