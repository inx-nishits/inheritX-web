import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Service Details" />
      <div className="tf-container py-5">
        <p>Deep dive into a selected service offering.</p>
      </div>
    </main>
  );
}

