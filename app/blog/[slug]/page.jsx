import BlogDetailsPage from "../../components/blog/blog-details";

export async function generateMetadata({ params }) {
  const { slug } = params || {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inheritx.com'

  // TODO: Replace this mock with real post data fetch once available
  const postTitle = slug ? slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Blog'
  const postDescription = `Read insights about ${postTitle} from InheritX.`
  const ogImage = `${siteUrl}/image/logo/inx-logo.png`
  const publishedTime = new Date().toISOString()
  const authors = [{ name: 'InheritX Team' }]
  const keywords = postTitle
    .split(' ')
    .filter(Boolean)
    .map((w) => w.toLowerCase())

  return {
    title: postTitle,
    description: postDescription,
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    authors,
    keywords,
    openGraph: {
      type: 'article',
      url: `${siteUrl}/blog/${slug}`,
      title: postTitle,
      description: postDescription,
      authors: ['InheritX Team'],
      publishedTime,
      tags: keywords,
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


