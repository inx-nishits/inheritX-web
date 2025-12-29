'use client'
import { getAllCaseStudies } from '../../data/case-studies-data'
import CaseStudyCard from './CaseStudyCard'
import Breadcrumbs from '../Breadcrumbs'

export default function CaseStudiesContent() {
  const allCaseStudies = getAllCaseStudies()

  return (
    <>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center pb-5'>
            <h1 className='title split-text effect-right'>Case Studies</h1>
            <Breadcrumbs />
            <h3 className='text-center pt-3 mt-3 mb-3'>Real-World Success Stories That Drive Innovation</h3>
            <p className='text-center'>
              Explore our portfolio of transformative projects across AI/ML, mobile, and web platforms. Each case study showcases our commitment to delivering cutting-edge solutions that solve real business challenges, from healthcare and fintech to e-mobility and sports tech. Discover how we've helped clients achieve measurable results through innovative technology, scalable architecture, and user-centric design.
            </p>
          </div>
        </div>
      </div>

      <div className='main-content tf-spacing-2'>
        <div className='tf-container'>
          {/* Case Studies Grid */}
          <div className='casestudies-grid-section'>
            <div className='casestudies-grid'>
              {allCaseStudies.map((caseStudy, index) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .casestudies-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

        @media (max-width: 1200px) {
          .casestudies-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 991px) {
          .casestudies-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 575px) {
          .casestudies-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </>
  )
}
