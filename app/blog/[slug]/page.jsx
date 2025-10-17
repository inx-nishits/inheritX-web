import BlogDetailsPage from "../../components/blog/blog-details";

export async function generateMetadata({ params }) {
  const { slug } = params || {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

  // TODO: Replace this mock with real post data fetch once available
  const postTitle = slug ? slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Blog'
  const postDescription = `Read insights about ${postTitle} from InheritX.`
  const ogImage = `${siteUrl}/image/logo/inx-logo.png`

  return {
    title: postTitle,
    description: postDescription,
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    openGraph: {
      type: 'article',
      url: `${siteUrl}/blog/${slug}`,
      title: postTitle,
      description: postDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: postTitle
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postDescription,
      images: [ogImage]
    }
  }
}


export const dynamic = 'force-static';

export default function Page({ params }) {
  const { slug } = params || {};

  return (
    <main>
      <BlogDetailsPage params={{ slug }} />
    </main>
  );
}


