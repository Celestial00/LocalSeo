import { LuCircleCheckBig } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-cyan-400 to-blue-600 text-black py-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Everything You Need to Optimize Your Google Business Profile — In One
          Place
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-black mb-8 sm:mb-10">
          Auto Citation Builder, Auto Review Replies, Google Posts, Social Media
          Scheduling, Keyword Tracking, and more — all in one intuitive
          dashboard.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <button className="bg-[#00D4FF] shadow-lg text-black font-semibold rounded-lg cursor-pointer w-[200px] h-[80px] text-lg transition-all duration-300">
            Start Free Trial Now
          </button>
          <button className="bg-white text-black font-medium px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-200 transition-all w-[200px] h-[80px] duration-300 text-base">
            Free Tools
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-4 sm:gap-6">
          <div className="flex gap-2 items-center justify-center">
            <LuCircleCheckBig className="text-white" />
            <l1> Google-Compliant</l1>{" "}
          </div>
          <div className="flex gap-2 items-center justify-center">
            <LuCircleCheckBig className="text-white" />
            <l1>No Credit Card Required </l1>
          </div>
          <div className="flex gap-2 items-center justify-center ">
            <LuCircleCheckBig className="text-white" />
            <l1>Built for Agencies & Local Businesses</l1>
          </div>
        </div>
      </div>
    </section>
  );
}
