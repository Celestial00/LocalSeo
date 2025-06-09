export default function SimpleInfoSection() {
  return (
    <section className="bg-gradient-to-br from-cyan-400 to-blue-600 [font-family:'Poppins',sans-serif] text-white py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl text-black sm:text-4xl md:text-5xl font-bold mb-6 leading-tight [font-family:'Poppins',sans-serif]">
          What is All in One GBP Tools?
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-black font-medium mb-4 [font-family:'Poppins',sans-serif]">
          Advanced tools to grow and manage your local presence
        </p>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-black mb-10 [font-family:'Poppins',sans-serif]">
          We’re not just another local SEO tool.
          We are the complete command center for your Google Business Profile.
          From citations to reviews, social posts to keyword tracking — we do it all, faster and smarter.
        </p>

        {/* Amber Block */}
        <div className="bg-white text-black p-6 rounded-lg text-left text-sm sm:text-base">
        

          {/* Four Target Audience Blocks */}
          <p className="mb-4 font-semibold">Perfect for:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-black p-4 rounded-md shadow-sm font-medium [font-family:'Poppins',sans-serif]">
              🏪 Local Business Owners
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-black p-4 rounded-md shadow-sm font-medium [font-family:'Poppins',sans-serif]">
              👩‍💻 SEO Freelancers
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-black p-4 rounded-md shadow-sm font-medium [font-family:'Poppins',sans-serif]">
              🏢 Digital Marketing Agencies
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-black p-4 rounded-md shadow-sm font-medium [font-family:'Poppins',sans-serif]">
              🌐 Reputation Management Experts
            </div>
          </div>

          {/* Why It Matters */}
          <p className="font-semibold [font-family:'Poppins',sans-serif] ">Why It Matters:</p>
          <p className="italic">“80% of consumers lose trust if your business info is inconsistent online.”</p>
          <p>Don’t let your leads go to competitors. Let us automate your GBP growth.</p>
        </div>
      </div>
    </section>
  );
}
