import { renderRichText } from "@/lib/renderRichText"; // 👈 use your actual path
// |--------------------------------------------------------

type Props = {
  params: {
    slug: string;
  };
};
// -> BlogPost type-----
export type BlogPost = {
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
  content: any[];
};

// >> getPost Function --------------------------
export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?where[slug][equals]=${slug}&where[published][equals]=true`
    );

    if (!res.ok) throw new Error("Failed to fetch post");

    const data = await res.json();

    return data.docs?.[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const BlogPage = async ({ params }: Props) => {
  const post = await getPost(params.slug);
  const author = process.env.NEXT_PUBLIC_BLOG_AUTHOR || "Unknown Author";

  // ! I have to stop typescript complaining about this function later
  const coverImage: { url: string; alt: string } = {
    url:
      post?.coverImage?.url && post.coverImage.url.startsWith("/api")
        ? `${process.env.NEXT_PUBLIC_API_URL}/${post.coverImage.url}`
        : post?.coverImage?.url ?? "/fallback.jpg",

    alt: post?.coverImage?.alt ?? post?.title,
  };

  // TODO: Fix this... this look awfull...
  if (!post) return <div className="text-center py-20">Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* coverImage */}
      <div className="relative w-full h-[250px] md:h-[400px] mb-10 rounded-lg overflow-hidden">
        <img
          src={coverImage.url || "https://via.placeholder.com/800x400"}
          alt="Blog coverImage"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-800 mb-3 text-center">
        {post.title}
      </h1>

      {/* Meta Info */}
      <p className="text-sm text-center text-gray-500 mb-8">
        By <span className="font-semibold">{author}</span> · June 2, 2025
      </p>

      {/* Excerpt */}
      <h2 className="text-xl text-center text-gray-600 italic mb-8">
        “{post.excerpt}”
      </h2>

      {/* Rendered Rich Text Content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
        {renderRichText(post.content?.root?.children || [])}
      </div>
    </div>
  );
};

export default BlogPage;
