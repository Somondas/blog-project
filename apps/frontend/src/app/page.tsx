import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-2xl text-center space-y-8">
        <Image
          // TODO: Replace the icons
          src="/favicon.ico"
          alt="Blog Logo"
          width={96}
          height={96}
          className="mx-auto rounded"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Stories, Insights & Ideas — All in One Place
        </h1>
        <p className="text-gray-600 text-lg">
          Explore blog posts from creators, developers, and thinkers powered by
          Next.js, PayloadCMS, and Supabase.
        </p>
        <Link href="/blog">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
            🚀 Browse Blogs
          </button>
        </Link>
      </div>
    </main>
  );
}
