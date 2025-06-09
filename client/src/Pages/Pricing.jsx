import React from "react";

const plans = [
  {
    color: "green",
    title: "Starter Plan",
    price: "$29/month",
    description: "Perfect for local businesses just starting out.",
    features: [
      "✔️ 1 Google Business Profile",
      "✔️ AI-Based GBP Optimization",
      "✔️ Auto Review Replies",
      "✔️ Social Media Scheduler (Facebook & GBP)",
      "✔️ Digital Business Card Generator",
      "✔️ Basic Keyword Rank Tracker",
      "✔️ Weekly Performance Reports",
      "✔️ Live Chat Support",
    ],
  },
  {
    color: "blue",
    title: "Pro Plan",
    price: "$59/month",
    description:
      "Ideal for professionals and growing businesses managing multiple locations.",
    features: [
      "✔️ Manage up to 5 GBP Locations",
      "✔️ Full Citation Checker + Builder",
      "✔️ AI-Powered Content Generator",
      "✔️ Keyword Finder & Rank Tracking",
      "✔️ AI to Human Content Converter",
      "✔️ Auto Google Posts",
      "✔️ Full SEO Toolkit Access",
      "✔️ Email + Priority Support",
    ],
  },
  {
    color: "red",
    title: "Agency Plan",
    price: "$149/month",
    description:
      "Tailored for SEO agencies and freelancers managing multiple clients at scale.",
    features: [
      "✔️ Unlimited GBP Profiles",
      "✔️ White Label Dashboard",
      "✔️ Client Portal Access",
      "✔️ Bulk Citation Building & Fixing",
      "✔️ Team Access & Role Management",
      "✔️ API Access (Optional Add-on)",
      "✔️ Dedicated Account Manager",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="font-[Poppins] bg-gradient-to-br from-white to-blue-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          All in One GBP Tools – Pricing
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Transparent, Affordable, and Scalable Plans for Businesses,
          Freelancers, and Agencies.
        </p>
        <p className="mt-4 font-medium text-white/80">
          No hidden fees. No contracts. Just value.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white border-t-8 border-${plan.color}-500 shadow-xl rounded-xl p-8 flex flex-col justify-between hover:shadow-2xl transition duration-300 min-h-[620px] md:min-h-[640px] md:w-[105%]`}
          >
            <div>
              <h2 className={`text-2xl font-bold text-black-600 mb-2`}>
                {plan.title}
              </h2>
              <p className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4">
                {plan.price}
              </p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-8 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 px-4 rounded-full font-semibold transition`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Custom Plans Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">
          💼 Custom & Enterprise Solutions
        </h3>
        <p className="text-gray-700 mb-4">
          Need custom pricing or have more than 100 locations?
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full font-semibold transition"
        >
          👉 Contact Us
        </a>
      </div>

      {/* All Plans Include */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center text-sm text-gray-600">
        <h4 className="text-lg font-semibold mb-3">✅ All Plans Include:</h4>
        <ul className="space-y-2">
          <li>7-Day Free Trial — No credit card required</li>
          <li>Cancel anytime, risk-free</li>
          <li>100% Compliant with Google Guidelines</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingPage;
