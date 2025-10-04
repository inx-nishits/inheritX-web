import PageTitle from '../components/PageTitle';
import PortfolioListSection from '../components/portfolio/PortfolioListSection';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Portfolio List" />
      <PortfolioListSection />
    </main>
  );
}

