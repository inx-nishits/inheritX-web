import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Pricing" />
      <div className="tf-container py-5">Choose a plan that fits your needs.</div>
    </main>
  );
}

