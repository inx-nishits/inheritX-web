
import ServiceDetails from '../../components/service-details';

export default function ServiceDetailsPage({ params }) {
  const { category } = params || {};

  return (
    <>
      <ServiceDetails params={{ category }} />
    </>
  );
}

