import Link from "next/link";

const BlogCard = ({ title, excerpt, slug }: any) => {
  return (
    <div className="relative flex flex-col my-6 md:mx-4 mx-auto bg-white shadow-sm border border-slate-200 rounded-lg w-11/12 md:w-4/12 md:h-auto">
      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h5>
        <p className="text-slate-600 leading-normal font-light">{excerpt}</p>

        <Link href={`/blog/${slug}`}>
          <button
            className="rounded-md bg-blue-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
