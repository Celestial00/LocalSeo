import React from "react";

const features = [
  {
    icon: "🔍",
    title: "AI-Based GBP Optimization Assistant",
    description:
      "Automatically optimize your entire profile based on your business category, location, and keywords.",
    points: [
      "AI-generated descriptions, categories, services, and FAQs",
      "Auto-detects missing fields and suggests improvements",
      "Ensures GBP is 100% Google-compliant and SEO-ready",
    ],
    badge: "Perfect for: Instant setup, faster results, and zero guesswork",
  },
  {
    icon: "🏗️",
    title: "Auto Citation Builder, Checker & Fixer",
    description:
      "Ensure consistent business listings across 100+ local directories like Yelp, Bing, Apple Maps, etc.",
    points: [
      "Scan for NAP (Name, Address, Phone) inconsistencies",
      "Fix outdated or missing listings with one click",
      "Automatically build citations in local directories",
    ],
  },
  {
    icon: "✍️",
    title: "Google Posts + Social Media Scheduler",
    description: "Post everywhere from a single dashboard.",
    points: [
      "Write once, post to GBP, Facebook, Instagram, LinkedIn",
      "Schedule weekly/monthly content calendar",
      "Generate post ideas with built-in AI",
    ],
  },
  {
    icon: "💬",
    title: "AI-Powered Review Reply Generator",
    description: "Never leave a review unanswered again.",
    points: [
      "AI auto-generates personalized replies using keywords",
      "Choose tone: friendly, professional, grateful",
      "Save and reuse response templates",
    ],
  },
  {
    icon: "📊",
    title: "Live Keyword Rank Tracker",
    description: "Track your business ranks in real time — by keyword, city, or zip code.",
    points: [
      "Monitor Google Map & Search rankings",
      "Daily/weekly updates",
      "Keyword trends and performance insights",
    ],
  },
  {
    icon: "🧠",
    title: "AI to Human Content Converter",
    description: "Turn robotic AI content into human-sounding text.",
    points: [
      "Remove robotic tone and AI-detection triggers",
      "Retain keyword optimization",
      "Use for posts, descriptions, replies, and more",
    ],
  },
  {
    icon: "🪪",
    title: "Digital Business Card Generator",
    description: "Create a mobile-ready digital card to boost conversions.",
    points: [
      "Instant share via QR code, WhatsApp, SMS, or Email",
      "Live Google reviews, contact links, social links",
      "One-tap call, directions, and website links",
    ],
  },
  {
    icon: "🔑",
    title: "High-Intent Keyword Finder",
    description: "Discover what customers are searching locally.",
    points: [
      "Auto-recommendations based on niche and location",
      "Filter by competition, intent, and traffic volume",
      "Instant keyword ideas for posts, FAQs, and GBP fields",
    ],
  },
  {
    icon: "🛠️",
    title: "SEO Toolkit Built-In",
    description: "All your SEO tools in one dashboard.",
    points: [
      "AI Content Detector",
      "Plagiarism Checker, Readability Checker, and more",
      "Keyword Density Analyzer",
    ],
  },
  {
    icon: "🔄",
    title: "Cross-Platform Sync & Dashboard",
    description: "Manage everything from a single dashboard.",
    points: [
      "Real-time sync with Google, Facebook, etc.",
      "Visual activity reporting",
      "Multi-location and multi-client support",
    ],
  },
];

const FeaturesPage = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 text-gray-800 font-[Poppins]">
      <div className="text-center py-16 px-6 bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Features – All in One GBP Tools</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Everything you need to manage, optimize, and scale your Google Business Profile — without juggling
          10 tools or wasting 20+ hours per week.
        </p>
        <div className="mt-6 text-white/90 space-y-2">
          <p>✅ Designed for Local Businesses</p>
          <p>✅ Built for Agencies & Freelancers</p>
          <p>✅ Trusted by 5,000+ Global Users</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {feature.badge && (
              <div className="mt-4 text-sm font-medium text-green-600">{feature.badge}</div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center py-12 px-4">
        <h2 className="text-xl font-bold mb-2">✅ Ready to Explore All Features?</h2>
        <p className="mb-6 text-gray-600">Manage, optimize, and dominate your Google Business Profile from one dashboard.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/start-trial"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full"
          >
            🔵 Start Free Trial
          </a>
          <a
            href="/tools"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full"
          >
            🟢 Try Free Tools
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;