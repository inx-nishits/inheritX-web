import BlogDetailsPage from "../../components/blog/blog-details";


export const dynamic = 'force-static';

export default function Page({ params }) {
  const { slug } = params || {};

  return (
    <main>
      <BlogDetailsPage params={{ slug }} />
    </main>
  );
}


