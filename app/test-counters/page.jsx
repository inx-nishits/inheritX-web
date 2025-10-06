import Link from 'next/link';

export default function TestCountersPage() {
  return (
    <main>
      <div className="container py-5">
        <h1>Counter Test Page</h1>
        <p>This page tests the counter functionality on navigation.</p>
        
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="wg-counter">
              <div className="counter-item">
                <div className="counter">
                  <div className="number-counter flex fs-65 fw-6">
                    <span
                      className="number odometer color-primary"
                      data-to="150"
                      data-inviewport="yes"
                    >
                      0
                    </span>
                    <span className="color-primary">+</span>
                  </div>
                  <p className="title-counter body-2 lh-30">
                    Test Counter 1
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="wg-counter">
              <div className="counter-item">
                <div className="counter">
                  <div className="number-counter flex fs-65 fw-6">
                    <span
                      className="number odometer color-primary"
                      data-to="250"
                      data-inviewport="yes"
                    >
                      0
                    </span>
                    <span className="color-primary">+</span>
                  </div>
                  <p className="title-counter body-2 lh-30">
                    Test Counter 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5">
          <Link href="/" className="btn btn-primary me-3">Go to Home</Link>
          <Link href="/about-us" className="btn btn-secondary">Go to About</Link>
        </div>
      </div>
    </main>
  );
}
