import HireDetailsPage from '../../components/hireexperts/hire-experts-details'

export const dynamic = 'force-static'



export default function HireDynamicPage({ params }) {
  const { slug } = params || {}
  return (
    <>
      <HireDetailsPage params={{ slug }} />
    </>
  )
}


