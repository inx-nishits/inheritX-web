import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Blog Details" />
      <div className="tf-container py-5">Single post details.</div>
    </main>
  );
}

