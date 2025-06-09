import React from "react";

export default function About() {
  return (
       <div className="font-[Poppins] bg-gradient-to-br from-blue-50 to-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl text-lg md:text-xl">
          Empowering Businesses to Dominate Local Search
        </p>
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold text-blue-600">All in One GBP Tools</span>,
            we’re redefining how local businesses, SEO professionals, and agencies manage
            Google Business Profiles. Our all-in-one platform provides every tool you need
            to optimize, track, and grow your online presence — seamlessly, effectively, and affordably.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">🚀 Our Mission</h2>
          <p>
            To simplify and supercharge local SEO by offering intuitive, AI-powered tools that
            help businesses stand out, generate leads, and build lasting visibility on Google Search and Maps.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">💡 Why We Exist</h2>
          <p>
            Local search has become the most powerful digital marketing channel.
            Yet, managing a Google Business Profile can be time-consuming and complex.
            We created All in One GBP Tools to eliminate that complexity and help every
            business — no matter the size — grow effortlessly.
          </p>
        </div>

        {/* Our Journey */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">📈 Our Journey</h2>
          <p>
            We started as SEO professionals ourselves — constantly switching between tools to manage GBP listings,
            citations, reviews, content, and rankings. Frustrated by the inefficiency, we decided to build the ultimate
            platform — one that combines everything in a single dashboard.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🔥 What Makes Us Different?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>✅ Built by SEO Experts</strong> – We understand what truly works.</li>
            <li><strong>✅ Real AI + Automation</strong> – Auto-reply to reviews, auto-post, humanize AI content, and more.</li>
            <li><strong>✅ Designed for Everyone</strong> – From solopreneurs to global agencies.</li>
            <li><strong>✅ Google Guidelines First</strong> – Always 100% compliant.</li>
            <li><strong>✅ Scalable & Secure</strong> – Ready to grow with your business.</li>
          </ul>
        </div>

        {/* Join Us */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">🙌 Join Us</h2>
          <p className="mb-4">
            Join 1,000+ businesses and marketers who trust All in One GBP Tools to simplify local SEO.
            Let’s build your local presence — smarter, faster, stronger.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md">
            🚀 Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
