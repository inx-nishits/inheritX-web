'use client'
import Link from 'next/link'

export default function CaseStudyDetail({ caseStudy, prevCaseStudy, nextCaseStudy }) {
  return (
    <>
      <div className='tf-container pt-5 mt-md-5'>
        <div className='casestudy-details-container'>
          <div className='casestudy-back-btn'>
            <Link
              href='/case-studies'
              className='back-link d-flex align-items-center gap-2'
            >
              <i className='icon-arrow-left'></i>
              <span>Back to Case Studies</span>
            </Link>
          </div>
        </div>
      </div>

      <div className='page-title'>
        <div className='tf-container'>
          <div className='casestudy-details-container'>
            <div className='page-title-content text-center pt-5 pb-5'>
              <h1 className='title'>{caseStudy.title}</h1>
              <p className='casestudy-subtitle mt-3'>{caseStudy.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='main-content tf-spacing-2'>
        <div className='tf-container'>
          <div className='casestudy-details-container'>
            {/* Hero Image */}
            <div className='casestudy-image-container mb-5'>
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                className='casestudy-main-image'
              />
            </div>

            {/* Overview */}
            <div className='casestudy-section mb-5'>
              <h2 className='section-title'>Overview</h2>
              <p className='section-text'>{caseStudy.excerpt}</p>
            </div>

            {/* Project Info */}
            <div className='casestudy-info-grid mb-5'>
              <div className='info-item'>
                <div className='info-label'>Industry</div>
                <div className='info-value'>{caseStudy.industry}</div>
              </div>
              <div className='info-item'>
                <div className='info-label'>Platforms</div>
                <div className='info-value'>{caseStudy.platforms}</div>
              </div>
              <div className='info-item'>
                <div className='info-label'>Business Model</div>
                <div className='info-value'>{caseStudy.businessModel}</div>
              </div>
              <div className='info-item'>
                <div className='info-label'>Category</div>
                <div className='info-value'>{caseStudy.category}</div>
              </div>
            </div>

            {/* Challenge */}
            <div className='casestudy-section mb-5'>
              <h2 className='section-title'>The Challenge</h2>
              <p className='section-text'>{caseStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div className='casestudy-section mb-5'>
              <h2 className='section-title'>Our Solution</h2>
              <p className='section-text'>{caseStudy.solution}</p>
            </div>

            {/* Technologies */}
            <div className='casestudy-section mb-5'>
              <h2 className='section-title'>Technologies Used</h2>
              <div className='tech-list'>
                {caseStudy.techStack.map((tech, index) => (
                  <span key={index} className='tech-badge'>{tech}</span>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            {caseStudy.capabilities && caseStudy.capabilities.length > 0 && (
              <div className='casestudy-section mb-5'>
                <h2 className='section-title'>Core Capabilities</h2>
                <ul className='capabilities-list'>
                  {caseStudy.capabilities.map((capability, index) => (
                    <li key={index}>{capability}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcomes */}
            <div className='casestudy-section mb-5'>
              <h2 className='section-title'>Business Impact</h2>
              <div className='outcomes-grid'>
                {caseStudy.outcomes.map((outcome, index) => (
                  <div key={index} className='outcome-card'>
                    <div className='outcome-metric'>{outcome.metric}</div>
                    <div className='outcome-description'>{outcome.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {(prevCaseStudy || nextCaseStudy) && (
              <div className='casestudy-navigation'>
                {prevCaseStudy && (
                  <Link href={`/case-studies/${prevCaseStudy.slug}`} className='nav-card prev-card'>
                    <div className='nav-label'>
                      <i className='icon-arrow-left'></i>
                      <span>Previous</span>
                    </div>
                    <div className='nav-title'>{prevCaseStudy.title}</div>
                  </Link>
                )}
                {nextCaseStudy && (
                  <Link href={`/case-studies/${nextCaseStudy.slug}`} className='nav-card next-card'>
                    <div className='nav-label'>
                      <span>Next</span>
                      <i className='icon-arrow-right'></i>
                    </div>
                    <div className='nav-title'>{nextCaseStudy.title}</div>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .casestudy-details-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .casestudy-back-btn {
          margin-bottom: 30px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          color: white;
          transform: translateX(-4px);
        }

        .casestudy-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          font-weight: 400;
        }

        .casestudy-image-container {
          border-radius: 12px;
          overflow: hidden;
        }

        .casestudy-main-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .casestudy-section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 600;
          color: white;
          margin-bottom: 16px;
        }

        .section-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          line-height: 1.8;
        }

        .casestudy-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .info-item {
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }

        .info-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .info-value {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-badge {
          padding: 8px 16px;
          background: rgba(0, 179, 255, 0.1);
          color: var(--primary);
          border: 1px solid rgba(0, 179, 255, 0.3);
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }

        .capabilities-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .capabilities-list li {
          padding: 12px 0;
          padding-left: 24px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          position: relative;
        }

        .capabilities-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .outcome-card {
          padding: 30px 20px;
          background: rgba(0, 179, 255, 0.05);
          border: 1px solid rgba(0, 179, 255, 0.2);
          border-radius: 12px;
          text-align: center;
        }

        .outcome-metric {
          font-size: 32px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .outcome-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .casestudy-navigation {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-card {
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 0 1 auto;
          max-width: 45%;
        }

        .nav-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .nav-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .next-card .nav-label {
          justify-content: flex-end;
        }

        .nav-title {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        .next-card .nav-title {
          text-align: right;
        }

        @media (max-width: 768px) {
          .casestudy-info-grid {
            grid-template-columns: 1fr;
          }

          .outcomes-grid {
            grid-template-columns: 1fr;
          }

          .casestudy-navigation {
            flex-direction: column;
          }

          .nav-card {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  )
}
