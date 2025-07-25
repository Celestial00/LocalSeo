import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800 font-[Poppins] min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full py-20 px-6 bg-gradient-to-br from-cyan-400 to-blue-600 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Got questions, suggestions, or need help? Reach out — we’ll reply ASAP.
        </p>
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col md:flex-row px-6 md:px-16 lg:px-32 py-16 gap-16">
        {/* Form */}
        <form className="flex-1 flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Your full name"
            className="w-full text-lg bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none py-4 placeholder:text-gray-500 transition-all"
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full text-lg bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none py-4 placeholder:text-gray-500 transition-all"
          />
          <textarea
            rows="5"
            placeholder="Type your message here..."
            className="w-full text-lg bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none py-4 resize-none placeholder:text-gray-500 transition-all"
          />
          <button
            type="submit"
            className="w-full bg-black text-white text-lg py-4 tracking-wide hover:bg-gray-900 transition-all"
          >
            📩 Send Message
          </button>
        </form>

        {/* Info */}
        <div className="flex-1 flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Our Info</h2>
          <p className="text-gray-700">
            We respond to all messages within 24 hours (usually much faster).
          </p>
          <ul className="space-y-3 text-base">
            <li>📍 <strong>Address:</strong> 123 AI Tools Ave, Tech City, NY 10001</li>
            <li>📞 <strong>Phone:</strong> (123) 456-7890</li>
            <li>✉️ <strong>Email:</strong> <a href="mailto:support@yourapp.com" className="text-blue-600 underline">support@yourapp.com</a></li>
            <li>⏱️ <strong>Support Hours:</strong> Mon–Fri, 9AM – 6PM (EST)</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-12 px-6">
        <h2 className="text-xl font-bold mb-2">💬 Let's Talk!</h2>
        <p className="mb-6 text-gray-600">
          Whether you're a business owner or agency, we're here to help you grow with AI.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/start-trial"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8"
          >
            🔵 Start Free Trial
          </a>
          <a
            href="/tools"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8"
          >
            🟢 Try Free Tools
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
    