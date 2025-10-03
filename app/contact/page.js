import PageTitle from '../components/PageTitle';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <PageTitle title="Contact" />
      <div className="tf-container py-5">
        <p>Email: contact@inheritx.com</p>
        <p>Phone: +1 (123) 456 889</p>
      </div>
    </main>
  );
}

