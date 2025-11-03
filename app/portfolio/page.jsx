import ProjectsPage from '../components/projects'
export const dynamic = 'force-dynamic'

export default async function Page() {

  return (
    <ProjectsPage basePath='/portfolio' detailsBasePath='/portfolio' pageTitle='Our Portfolio' />
  )
}


