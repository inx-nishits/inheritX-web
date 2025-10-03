import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Team" />
      <div className="tf-container py-5">Meet our team.</div>
    </main>
  );
}

