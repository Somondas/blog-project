import BlogCards from "@/components/BlogCards";
import { dummyPosts } from "@/constants/dummyData";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-slate-50">
      {/* Navbar */}
      <nav className="w-full h-auto  bg-sky-500 ">
        <h1 className="text-5xl py-4 pl-4 font-extrabold text-gray-50">
          blogs
        </h1>
      </nav>
      {/* Blog Cards */}
      <div className="w-full   h-full md:flex  md:flex-wrap md:justify-center ">
        {/* cards */}

        {dummyPosts.map(({ id, excerpt, slug, title }) => {
          return (
            <BlogCards
              key={title}
              title={title}
              excerpt={excerpt}
              slug={slug}
            />
          );
        })}
      </div>
    </div>
  );
};
// TODO:(Bonus) Add pagination
export default Blog;
