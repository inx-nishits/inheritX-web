import Link from 'next/link'
import { fetchPortfolioItems } from '../../utils/portfolioUtils'
import PortfolioDetailsPage from '../../components/portfoliodetails/PortfolioDetailsPage'

export const dynamic = 'force-dynamic'

export default async function PortfolioListDetailsPage ({ params }) {
  const { slug } = params || {}

  return (
    <>
     <PortfolioDetailsPage params={{ slug }} />
    </>
  )
}


