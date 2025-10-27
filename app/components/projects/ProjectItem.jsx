import Link from 'next/link'

export default function ProjectItem({ item }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#00d68f'
      case 'In Progress':
        return '#00b3ff'
      case 'Planning':
        return '#ffa726'
      default:
        return '#666'
    }
  }

  return (
    <div className='project-card'>
      <div className='project-card-inner'>
        {/* Project Image */}
        <div className='project-image-wrapper'>
          <Link href={`/project-details/${item.slug}`} className='project-image-link'>
            <img 
              src={item.thumb} 
              alt={item.title} 
              className='project-image'
            />
            <div className='project-overlay'>
              <div className='project-overlay-content'>
                <i className='icon-eye'></i>
                <span>View Details</span>
              </div>
            </div>
          </Link>
          
          {/* Status Badge */}
          <div 
            className='project-status-badge'
            style={{ backgroundColor: getStatusColor(item.status) }}
          >
            {item.status}
          </div>
        </div>

        {/* Project Content */}
        <div className='project-content'>
          <div className='project-header'>
            <h3 className='project-title'>
              <Link href={`/project-details/${item.slug}`}>{item.title}</Link>
            </h3>
            <div className='project-category'>{item.category}</div>
          </div>

          <p className='project-description'>{item.description}</p>

          {/* Project Meta */}
          <div className='project-meta'>
            {/* Meta items removed */}
          </div>

          {/* Technology Tags */}
          <div className='project-technologies'>
            <div className='tech-label'>Technologies:</div>
            <div className='tech-tags'>
              {item.technology.split(', ').map((tech, index) => (
                <span key={index} className='tech-tag'>{tech.trim()}</span>
              ))}
            </div>
          </div>

          {/* Project Features */}
          <div className='project-features'>
            <div className='features-label'>Key Features:</div>
            <div className='features-list'>
              {item.features.slice(0, 3).map((feature, index) => (
                <div key={index} className='feature-item'>
                  <i className='icon-check'></i>
                  <span>{feature}</span>
                </div>
              ))}
              {item.features.length > 3 && (
                <div className='feature-more'>
                  +{item.features.length - 3} more
                </div>
              )}
            </div>
          </div>

          {/* Project Footer */}
          <div className='project-footer'>
            <Link href={`/project-details/${item.slug}`} className='project-link'>
              <span>Explore Project</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
        }

        .project-card:hover {
          border-color: rgba(0, 179, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-image-wrapper {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .project-image-link {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-overlay-content {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 600;
          font-size: 16px;
        }

        .project-status-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 6px 12px;
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-header {
          margin-bottom: 15px;
        }

        .project-title {
          margin: 0 0 8px 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
        }

        .project-title a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-title a:hover {
          color: var(--primary);
        }

        .project-category {
          color: var(--primary);
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-meta {
          margin-bottom: 20px;
        }

        .project-technologies {
          margin-bottom: 20px;
        }

        .tech-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-tag {
          background: rgba(0, 179, 255, 0.1);
          color: var(--primary);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 500;
          border: 1px solid rgba(0, 179, 255, 0.2);
        }

        .project-features {
          margin-bottom: 20px;
        }

        .features-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }

        .feature-item i {
          color: #00d68f;
          font-size: 12px;
        }

        .feature-more {
          color: var(--primary);
          font-size: 12px;
          font-weight: 500;
          font-style: italic;
        }

        .project-footer {
          margin-top: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }


        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border: 1px solid var(--primary);
          border-radius: 8px;
          background: rgba(0, 179, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .project-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 179, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .project-link:hover {
          color: white;
          background: var(--primary);
          border-color: var(--primary);
          transform: translateX(4px);
        }

        .project-link:hover::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .project-content {
            padding: 20px;
          }
          
          .project-title {
            font-size: 18px;
          }
          
          .project-footer {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}