import { Link } from "react-router-dom";
import { LuCircleCheckBig } from "react-icons/lu";

export default function ToolComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-600 [font-family:'Poppins',sans-serif] text-black px-4">
      <div className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Tool Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8">
          We're working on something amazing to make your experience even better.
          Our new tool will help you streamline your workflow and get smarter insights — all in one place.
        </p>

        <ul className="flex flex-col sm:flex-row justify-center gap-4 text-white mb-10">
          <li className="flex items-center gap-2 justify-center">
            <LuCircleCheckBig className="text-white h-5 w-5" />
            Simple & Fast
          </li>
          <li className="flex items-center gap-2 justify-center">
            <LuCircleCheckBig className="text-white h-5 w-5" />
            No Setup Required
          </li>
          <li className="flex items-center gap-2 justify-center">
            <LuCircleCheckBig className="text-white h-5 w-5" />
            Seamless Integration
          </li>
        </ul>

        <Link
          to="/"
          className="bg-white text-black font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 inline-block"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
