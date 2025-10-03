import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
    </main>
  );
}

