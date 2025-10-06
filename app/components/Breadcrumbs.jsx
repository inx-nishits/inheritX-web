"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { servicesData } from './services/servicesData';

export default function Breadcrumbs () {
  const pathname = usePathname() || '/';

  // Normalize and split path into segments
  const segments = pathname.split('/').filter(Boolean);

  // Early return: only Home
  if (segments.length === 0) {
    return (
      <div className="breadkcum">
        <Link href="/" className="link-breadkcum body-2 fw-7">Home</Link>
      </div>
    );
  }

  // Build cumulative hrefs for each segment with dynamic label resolution
  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const parent = segments[index - 1] || '';
    return { href, label: resolveLabel(segment, parent) };
  });

  return (
    <div className="breadkcum" aria-label="Breadcrumb">
      <Link href="/" className="link-breadkcum body-2 fw-7">Home</Link>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <>
            <span key={`dot-${crumb.href}`} className="dot"></span>
            {isLast ? (
              <span key={crumb.href} className="page-breadkcum body-2 fw-7" aria-current="page">{crumb.label}</span>
            ) : (
              <Link key={crumb.href} href={crumb.href} className="link-breadkcum body-2 fw-7">{crumb.label}</Link>
            )}
          </>
        );
      })}
    </div>
  );
}

function resolveLabel (segment, parentSegment) {
  const decoded = decodeURIComponent(segment);

  // Dynamic services route: use configured service heading if available
  if (parentSegment === 'services' && servicesData && servicesData[decoded]) {
    const svc = servicesData[decoded];
    return svc.heading || svc.content_heading || makeTitleCase(decoded);
  }

  // portfolio: keep default label behavior

  // Common overrides for nicer labels
  const overrides = {
    'faq': 'FAQ',
    'ios': 'iOS',
    'ui': 'UI',
    'ux': 'UX',
    'ai': 'AI',
    'pwa': 'PWA',
    'about': 'About',
    'about-us': 'About Us',
    'services': 'Services',
    'team': 'Team',
    'contact': 'Contact',
    'pricing': 'Pricing',
    'blog': 'Blog',
    'blog-list': 'Blog',
    'blog-standard': 'Blog',
    'blog-details': 'Blog Details',
    'services-details': 'Service Details',
    'join-our-team': 'Join Our Team',
    'hire-experts': 'Hire Experts',
    'porfolio': 'Portfolio',
    'porfolio-grid': 'Portfolio',
    'porfolio-list': 'Portfolio',
    'porfolio-details': 'Portfolio Details'
  };

  if (overrides[decoded]) return overrides[decoded];

  return makeTitleCase(decoded);
}

function makeTitleCase (value) {
  return (value || '')
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// no previous-route injection


