import { dummyPosts } from "@/constants/dummyData";
import Image from "next/image";
import React from "react";

const BlogPage = () => {
  const post = dummyPosts[0];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Banner Image */}
      <div className="relative w-full h-[250px] md:h-[400px] mb-10 rounded-lg overflow-hidden">
        <img
          src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
          alt="Blog banner"
          className="object-cover object-center"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-800 mb-3 leading-tight text-center">
        {post.title}
      </h1>

      {/* Meta Info */}
      <p className="text-sm text-center text-gray-500 mb-8">
        By <span className="font-semibold">John Doe</span> · June 2, 2025
      </p>

      {/* Excerpt */}
      <h2 className="text-xl text-center text-gray-600 italic mb-8">
        “{post.excerpt}”
      </h2>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          nisi corrupti aperiam veniam, expedita vero a rerum quam inventore
          tempore consectetur rem laudantium tempora.
        </p>
        <p>
          Ea soluta tempora, autem, nobis at quod asperiores beatae, neque
          excepturi adipisci expedita minus debitis sapiente. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Deserunt, quidem.
        </p>
        <p>
          Praesentium fugiat ratione, commodi id vero distinctio ab dolores
          ducimus aut aliquid voluptatum recusandae doloribus, necessitatibus
          tenetur. Natus, hic. Autem, soluta.
        </p>
        <p>
          Thank you for reading. We hope this blog helped you understand modern
          full-stack development better!
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
