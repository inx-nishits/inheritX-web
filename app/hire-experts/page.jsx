import HireExperts from '../components/hireexperts/HireExperts';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Hire Dedicated Experts & Developers | InheritX',
  description: 'Hire expert developers for iPhone, Android, Python, React, AI, and more. Flexible hiring models tailored for startups and SMEs.',
  openGraph: {
    title: 'Hire Dedicated Experts & Developers | InheritX',
    description: 'Hire expert developers for various technologies with flexible hiring models.',
  }
}

export default function Page() {
  return (
    <main>
      <HireExperts />
    </main>
  );
}

