import PageTitle from '../components/PageTitle';
import PortfolioDetailsSection from '../components/portfolio/PortfolioDetailsSection';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Portfolio Details" />
      <PortfolioDetailsSection />
    </main>
  );
}

