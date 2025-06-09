import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../Data/BlogData";

const BlogPage = () => {
  return (
    <div className="min-h-screen [font-family:'Poppins',sans-serif] bg-gradient-to-br from-white to-gray-100 text-gray-800 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-4">
          Blog – Tips, Guides & News for Local SEO & Google Business Profiles
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-10">
          Your go-to resource for mastering local SEO, optimizing your Google
          Business Profile, and staying updated on industry trends.
        </p>

        <h1 className="text-center text-5xl mb-4 [font-family:'Poppins',sans-serif]">
          Daily Blogs
        </h1>
        {/* Blog Cards Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {blogPosts.map((post, index) => (
            <Link to={`/blogpost/${index}`}>
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700">
                    {post.description
                      .split(" ", 25)
                      .slice(
                        0,
                        Math.floor(post.description.split(" ").length / 2)
                      )
                      .join(" ")}
                    ...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Category Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {[
            {
              title: "📍 Google Business Profile Optimization",
              posts: [
                "How to Choose the Right GBP Categories for Maximum Reach",
                "The Ultimate Guide to Optimizing Google Business Descriptions",
                "Top 5 GBP Photo Tips to Boost Engagement",
              ],
            },
            {
              title: "📈 Local SEO Strategies",
              posts: [
                "The Top 10 Local SEO Ranking Factors in 2025",
                "How to Build NAP Consistency Across All Listings",
                "How to Win the Local 3-Pack in Google Maps",
              ],
            },
            {
              title: "🤖 AI-Powered Content Marketing",
              posts: [
                "How to Humanize AI Content Without Losing Keywords",
                "7 AI Tools to Supercharge Your Local Content Strategy",
                "AI vs Human Content: What Google Prefers in 2025",
              ],
            },
            {
              title: "💼 Agency Growth Tips",
              posts: [
                "How to Onboard GBP Clients with Ease",
                "Best White-Label Tools for Local SEO Agencies",
                "Building Scalable Packages for Local SEO Clients",
              ],
            },
            {
              title: "🛠️ Product Updates & New Features",
              posts: [
                "NEW! Auto Citation Builder Now Live 🔥",
                "HumanizeAI Integration for AI Content Conversion",
                "Social Media Post Scheduler with Image Uploader Added",
              ],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold mb-4 text-blue-600">
                {category.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {category.posts.map((post, idx) => (
                  <li key={idx}>{post}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-md mb-10">
          <h3 className="text-2xl font-bold mb-3 text-blue-700">
            🧠 Why Follow Our Blog?
          </h3>
          <ul className="text-gray-700 space-y-1">
            <li>📌 Actionable strategies to grow your local presence</li>
            <li>⚡ Real-world examples and case studies</li>
            <li>🎥 How-to tutorials and tool walkthroughs</li>
            <li>🧭 Google algorithm updates and interpretations</li>
            <li>🚀 Marketing ideas to help your business dominate locally</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8 rounded-2xl text-center mb-10">
          <h3 className="text-2xl font-semibold mb-2">
            📬 Subscribe to Our Newsletter
          </h3>
          <p className="mb-4">
            Get the best local SEO strategies, tool updates, and exclusive blog
            content straight to your inbox.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Subscribe Now ➝
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">📝 Want to Contribute?</h3>
          <p className="text-gray-700 mb-4">
            Are you a local SEO expert or digital marketer? We accept guest
            posts!
          </p>
          <a
            href="#contact"
            className="text-blue-600 font-bold hover:underline"
          >
            Contact us to submit your topic idea
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
