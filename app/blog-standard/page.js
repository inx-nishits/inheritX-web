import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Blog Standard" />
      <div className="tf-container py-5">Standard blog layout.</div>
    </main>
  );
}

