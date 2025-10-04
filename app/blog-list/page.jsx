import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Blog List" />
      <div className="tf-container py-5">Posts listing.</div>
    </main>
  );
}

