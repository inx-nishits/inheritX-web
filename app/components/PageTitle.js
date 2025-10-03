export default function PageTitle({ title, subtitle }) {
  return (
    <div className="page-title-home">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="top-page-title">
              {subtitle ? <div className="sub-title body-2 fw-5">{subtitle}</div> : null}
              <h1 className="title fw-6 lh-85">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

