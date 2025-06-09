export default function ComparisonSection() {
  return (
    <section className="bg-gradient-to-br from-cyan-400 to-blue-600  text-black py-20 px-4 sm:px-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          📊 Compare Us to Other Tools
        </h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-sm sm:text-lg">
                <th className="py-2 px-4">Feature</th>
                <th className="py-2 px-4">All in One GBP Tools</th>
                <th className="py-2 px-4">Competitor Tools</th>
              </tr>
            </thead>
            <tbody className="text-base sm:text-lg">
              {[
                ["Auto Citation Builder & Fixer", true, false],
                ["GBP + Social Post Scheduler", true, false],
                ["AI to Human Converter", true, false],
                ["Live Keyword Tracker", true, false],
                ["Digital Business Card", true, false],
                ["AI Review Response Generator", true, false],
                ["SEO Toolkit", true, false],
              ].map(([feature, us, them], idx) => (
                <tr key={idx} className="bg-white rounded-xl">
                  <td className="py-3 px-4">{feature}</td>
                  <td className="py-3 px-4 text-green-400">{us ? "✅" : "❌"}</td>
                  <td className="py-3 px-4 text-red-400">{them ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-black/80 text-center text-base sm:text-lg">
          ✔️ All tools in ONE dashboard — no switching tabs or tools!
        </p>
      </div>
    </section>
  );
}
