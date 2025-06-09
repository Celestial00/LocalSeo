import { LuCircleCheckBig } from "react-icons/lu";
import HeroImg from "../Assets/images/salo.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-cyan-400 to-blue-600 [font-family:'Poppins',sans-serif] text-black py-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Everything You Need to Optimize Your Google Business Profile — In One Place
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-black mb-8 sm:mb-10">
            Auto Citation Builder, Auto Review Replies, Google Posts, Social Media Scheduling, Keyword Tracking, and more — all in one intuitive dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
            <button className="bg-[#00D4FF] shadow-lg text-black  rounded-lg cursor-pointer w-[200px] h-[80px] font- transition-all duration-300">
              Start Free Trial Now
            </button>
            <button className="bg-white text-black font-medium px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-200 transition-all w-[200px] h-[80px] duration-300 text-base">
              Free Tools
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex gap-2 items-center">
              <LuCircleCheckBig className="text-white h-6 w-6" />
              <li className="list-none">Google-Compliant</li>
            </div>
            <div className="flex gap-2 items-center">
              <LuCircleCheckBig className="text-white h-6 w-6" />
              <li className="list-none">No Credit Card Required</li>
            </div>
            <div className="flex gap-2 items-center">
              <LuCircleCheckBig className="text-white h-6 w-6" />
              <li className="list-none">Built for Agencies & Local Businesses</li>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full max-w-[600px] h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
