import Link from "next/link";
import { BlogPostProp } from "@/app/blog/page";

const BlogCard = ({ title, excerpt, slug, coverImage }: BlogPostProp) => {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 w-full max-w-sm mx-auto">
      {/* Image section - fixed height, cropped */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={coverImage.url}
          alt={coverImage.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h5 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
            {title}
          </h5>
          <p className="text-slate-600 text-sm line-clamp-3">{excerpt}</p>
        </div>

        <div className="mt-4">
          <Link href={`/blog/${slug}`}>
            <button
              className="w-full rounded-md bg-blue-800 py-2 px-4 text-center text-sm text-white transition-all hover:bg-blue-700"
              type="button"
            >
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
