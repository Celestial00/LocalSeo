import React from 'react'

export default function LocalbusinessSec() {
  return (
<section className="bg-gradient-to-br from-cyan-400 to-blue-600 py-16 px-4 sm:px-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">
      Why Local Businesses & Agencies Love Us
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition-all">
        <h3 className="text-black font-semibold text-xl mb-2">
           Save 20+ Hours Per Client Each Month
        </h3>
        <p className="text-black/80">
          No more copy-paste, spreadsheet madness or logging into 10 different platforms.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition-all">
        <h3 className="text-black font-semibold text-xl mb-2">
           Win More Leads with High-Ranking Listings
        </h3>
        <p className="text-black/80">
          We help you dominate your local search results with smart automation.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition-all">
        <h3 className="text-black font-semibold text-xl mb-2">
           Designed for Growth
        </h3>
        <p className="text-black/80">
          Scale effortlessly — whether you manage 1 profile or 1,000.
        </p>
      </div>
    </div>
  </div>
</section>


  )
}
