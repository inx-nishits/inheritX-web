import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="FAQs" />
      <div className="tf-container py-5">Frequently asked questions.</div>
    </main>
  );
}

