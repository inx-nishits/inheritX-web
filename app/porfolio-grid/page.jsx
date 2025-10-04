import PageTitle from '../components/PageTitle';
import PortfolioGridSection from '../components/portfolio/PortfolioGridSection';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Portfolio Grid" />
      <PortfolioGridSection />
    </main>
  );
}

