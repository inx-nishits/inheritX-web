export default function PageTitle({ title, subtitle, className }) {
  return (
    <div className="page-title-home">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className={`top-page-title${className ? ` ${className}` : ''}`}>
              {subtitle ? <div className="sub-title body-2 fw-5">{subtitle}</div> : null}
              <h2 className="title fw-6">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

