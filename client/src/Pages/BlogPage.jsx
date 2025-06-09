import React from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../Data/BlogData";

const BlogDetails = () => {
  const { id } = useParams();
  const post = BlogPost.find((p, index) => index === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <h2 className="text-2xl font-bold">Blog post not found.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl shadow mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
