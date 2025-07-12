import { Link } from "react-router-dom";
import { LuCircleCheckBig } from "react-icons/lu";
import HeroImg from "../Assets/images/salo.png";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-600 [font-family:'Poppins',sans-serif] text-black px-4">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 py-20">
        {/* Left Side - Text */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">
            Page Not Found
          </h2>
          <p className="text-lg text-white mb-8">
            Oops! The page you're looking for doesn’t exist. It might have been
            removed or relocated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/"
              className="bg-white text-black font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 w-[200px] text-center"
            >
              Go Back Home
            </Link>
            <a
              href="https://support.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00D4FF] text-black font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-300 transition-all duration-300 w-[200px] text-center"
            >
              Contact Support
            </a>
          </div>

          <ul className="flex flex-col sm:flex-row gap-4 mt-8 text-white">
            <li className="flex items-center gap-2">
              <LuCircleCheckBig className="text-white h-5 w-5" />
              Google-Compliant
            </li>
            <li className="flex items-center gap-2">
              <LuCircleCheckBig className="text-white h-5 w-5" />
              Friendly Support
            </li>
            <li className="flex items-center gap-2">
              <LuCircleCheckBig className="text-white h-5 w-5" />
              Trusted Platform
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={HeroImg}
            alt="Not Found Illustration"
            className="w-full max-w-[500px] h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
