export default function FinalCTA() {
  return (
    <section className="bg-white py-20 [font-family:'Poppins',sans-serif] px-4 sm:px-6  text-black font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Skyrocket Your Google Business Profile?
        </h2>
        <p className="text-black/80 text-base sm:text-lg mb-6">
          Don’t just manage your GBP — master it.
        </p>

        <ul className="text-sm sm:text-base text-black/70 mb-10 space-y-2">
          <li>✅ Try Free Tools — No Signup Needed</li>
          <li>✅ 7-Day Free Trial on All Plans</li>
        </ul>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow">
            🔵 Start Free Trial
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow">
            🟢 See Plans & Pricing
          </button>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium shadow">
            📞 Book a Demo Call
          </button>
        </div>
      </div>
    </section>
  );
}
