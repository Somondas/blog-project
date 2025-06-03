import BlogCards from "@/components/BlogCards";
import BlogPagination from "@/components/BlogPagination";
import ErrorDialog from "@/components/ErrorDialog";
import { dummyPosts } from "@/constants/dummyData";
import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";
// | --------------------------------------------------------------------

// -> Types ---------------
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
type Props = {
  searchParams: {
    page?: string;
  };
};
// >> getPost Function-------------
const getPosts = async (
  page: number = 1
): Promise<{ posts: BlogPostProp[]; totalPages: number }> => {
  const res = await fetch(
    `http://localhost:3001/api/posts?where[published][equals]=true&limit=6&page=${page}`,
    { cache: "no-cache" }
  );

  // TODO: (IMP) Add a beatiful dialog box
  if (!res.ok) throw new Error("Something went wrong");

  const data = await res.json();
  const posts = data.docs.map((post: any) => ({
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

  return {
    posts,
    totalPages: data.totalPages,
  };
};

const Blog = async ({ searchParams }: Props) => {
  const currentPage = Number(searchParams.page) || 1;
  let posts: BlogPostProp[] = [];
  let totalPages = 1;
  let error: string | null = null;
  try {
    const response = await getPosts(currentPage);
    posts = response.posts;
    totalPages = response.totalPages;
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch blog posts";
  }

  if (error) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center">
        <ErrorDialog />
      </div>
    );
  }
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
      {/* Pagination */}
      <div className="flex justify-center py-6">
        <BlogPagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};
// TODO: (IMP) It is working on your machine, fix the .env file, replace the static strings with them....
export default Blog;
