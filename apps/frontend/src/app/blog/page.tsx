import BlogCards from "@/components/BlogCards";
import { dummyPosts } from "@/constants/dummyData";
import Link from "next/link";
import React from "react";
// | --------------------------------------------------------------------

// ?? BlogPost type
export interface BlogPostProp {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: {
    url: string;
    alt: string;
  };
}

// >> getPost Function-------------
const getPosts = async (): Promise<BlogPostProp[]> => {
  const res = await fetch(
    "http://localhost:3001/api/posts?where[published][equals]=true",
    { cache: "no-cache" }
  );

  // TODO: (IMP) Add a beatiful dialog box
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data.docs.map((post: any) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    coverImage: {
      url: post.coverImage?.url.startsWith("/api")
        ? `http://localhost:3001${post.coverImage.url}`
        : post.coverImage.url,
      alt: post.coverImage?.alt || post.title,
    },
  }));
};
const Blog = async () => {
  const posts = await getPosts();
  return (
    <div className="bg-slate-50">
      {/* Navbar */}
      <nav className="w-full h-auto  bg-sky-500 ">
        <h1 className="text-5xl py-4 pl-4 font-extrabold text-gray-50">
          blogs
        </h1>
      </nav>
      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* cards */}

        {posts.map((post) => (
          <BlogCards key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
// TODO:(Bonus) Add pagination
// TODO: (IMP) It is working on your machine, fix the .env file, replace the static strings with them....
export default Blog;
