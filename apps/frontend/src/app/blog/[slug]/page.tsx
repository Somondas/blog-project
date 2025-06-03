import { dummyPosts } from "@/constants/dummyData";
import React from "react";
import { renderRichText } from "@/lib/renderRichText"; // 👈 use your actual path

const BlogPage = () => {
  const post = dummyPosts[0];
  const author = process.env.NEXT_PUBLIC_BLOG_AUTHOR || "Unknown Author";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Banner */}
      <div className="relative w-full h-[250px] md:h-[400px] mb-10 rounded-lg overflow-hidden">
        <img
          src={post.banner || "https://via.placeholder.com/800x400"}
          alt="Blog banner"
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
        {renderRichText(post.content)}
      </div>
    </div>
  );
};

export default BlogPage;
