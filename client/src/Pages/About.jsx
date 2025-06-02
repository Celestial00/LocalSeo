import React from "react";

export default function About() {
  return (

      <>
    <div className=" w-full h-50 bg-gradient-to-br from-cyan-400 to-blue-600 py-50 flex justify-center items-center ">
      <h1 className="text-8xl [font-family:'Poppins',sans-serif] text-white "> About Us </h1>
    </div>

    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-[Poppins]">
      {/* About Us Heading Centered */}
     

      {/* Content Section */}
      <div className="bg-white text-gray-800 px-10 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className=" text-5xl  font-bold mb-6 text-blue-600">
            Empowering Businesses to Dominate Local Search
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            At <strong>All in One GBP Tools</strong>, we’re redefining how local businesses, SEO professionals, and agencies manage Google Business Profiles.
            Our all-in-one platform provides every tool you need to optimize, track, and grow your online presence — seamlessly, effectively, and affordably.
          </p>

          <h3 className="text-4xl font-semibold mb-2">🚀 Our Mission</h3>
          <p className="mb-6 text-base leading-relaxed">
            To simplify and supercharge local SEO by offering intuitive, AI-powered tools that help businesses stand out, generate leads,
            and build lasting visibility on Google Search and Maps.
          </p>

          <h3 className="text-4xl font-semibold mb-2">💡 Why We Exist</h3>
          <p className="mb-6 text-base leading-relaxed">
            Local search has become the most powerful digital marketing channel. Yet, managing a Google Business Profile can be time-consuming and complex.
            We created All in One GBP Tools to eliminate that complexity and help every business — no matter the size — grow effortlessly.
          </p>

          <h3 className="text-4xl font-semibold mb-2">📈 Our Journey</h3>
          <p className="mb-6 text-base leading-relaxed">
            We started as SEO professionals ourselves — constantly switching between tools to manage GBP listings, citations, reviews, content, and rankings.
            Frustrated by the inefficiency, we decided to build the ultimate platform — one that combines everything in a single dashboard.
          </p>

          <h3 className="text-4xl font-semibold mb-2">🔥 What Makes Us Different?</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-base">
            <li>✅ <strong>Built by SEO Experts</strong> – We understand what truly works.</li>
            <li>✅ <strong>Real AI + Automation</strong> – Auto-reply to reviews, auto-post, humanize AI content, and more.</li>
            <li>✅ <strong>Designed for Everyone</strong> – From solopreneurs to global agencies.</li>
            <li>✅ <strong>Google Guidelines First</strong> – Always 100% compliant.</li>
            <li>✅ <strong>Scalable & Secure</strong> – Ready to grow with your business.</li>
          </ul>

          <h3 className="text-4xl font-semibold mb-2">🙌 Join Us</h3>
          <p className="text-base leading-relaxed">
            Join 1,000+ businesses and marketers who trust All in One GBP Tools to simplify local SEO.
            Let’s build your local presence — smarter, faster, stronger.
          </p>
        </div>
      </div>
    </div>

      </>
    
  );
}
