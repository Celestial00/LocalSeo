import { useEffect, useState } from "react";
import { ChevronDown, Cookie, LogOut, Menu, X } from "lucide-react";
import userImg from "../assets/def.png"; // Replace with your actual avatar image
import logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiPostgenerator } from "../Controllers/Freemium.tools.Controller";
import Cookies from "js-cookie";
import { useModal } from "../Contexts/ModelContext";
useModal

export default function Navbar() {
  const [showTools, setShowTools] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLogedIn, setisLogedIn] = useState(() => {
    return !!Cookies.get("user");
  });
  const navigate = useNavigate();
  const { openModal } = useModal();


  const FreeTools = [
    "AI Post Generator",

    "Review Reply Templates",

    "Citation Scan",

    "GBP Audit",

    "Keyword Suggestions Tool",

    "AI Humanizer",
  ];

  const PremiumTools = [
    "AI-Based GBP Optimization Assistant",

    "Auto Citation Checker, Builder & Syncer",

    "Auto Google Posts + Social Media Scheduler",

    "Auto Review Reply Generator",

    "Live Keyword Rank Tracker",

    "AI to Human Content Converter",

    "Digital Business Card Builder",

    "High-Intent Keyword Finder",

    "All-in-One SEO Toolkit",

    "Full GBP + Social Integration",
  ];

  useEffect(() => {
    if (Cookies.get("user")) {
      setisLogedIn(true);
    }
  }, [isLogedIn]);

  const HandleTool = (Name) => {
    if (!!isLogedIn) {
      AiPostgenerator(Name);
    } else {
      openModal();
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  const handleLogout = () => {
    Cookies.remove("user");
    setisLogedIn(false);
  };

  return (
    <nav className="bg-white sticky top-0 text-black px-6 py-4  flex items-center shadow-lg z-10  justify-between w-full">
      {/* Left Section - Logo & Desktop Menu */}
      <div className="flex items-center gap-10">
        <div className="text-2xl [font-family:'Poppins',sans-serif] font-bold">
          <img src={logo} className="w-20 h-20" />
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          <li className=" font-light hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/home"> Home </Link>
          </li>
          <li className=" font-light hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            SEO Tips
          </li>
          <li className=" font-light hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/Features"> Features </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => setShowTools(!showTools)}
              className="flex items-center gap-1 font-light cursor-pointer  hover:text-amber-600 [font-family:'Poppins',sans-serif]"
            >
              Tools <ChevronDown size={16} />
            </button>
            {showTools && (
              <div className="absolute mt-2 w-196 bg-white inset-shadow-2xs text-black rounded-md ring-1 ring-gray-200 transition-all duration-200 origin-top z-50 p-4 grid grid-cols-2 gap-4">
                {/* Free Tools Column */}
                <div>
                  <h3 className="text-sm font-semibold mb-2 [font-family:'Poppins',sans-serif]">
                    Free Tools
                  </h3>
                  <ul className="space-y-1">
                    {FreeTools.map((tool, index) => (
                      <li
                        onClick={() => {
                          HandleTool(tool);
                        }}
                        key={`free-${index}`}
                        className="px-2 py-1 hover:text-amber-600 [font-family:'Poppins',sans-serif] font-light cursor-pointer"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Premium Tools Column */}
                <div>
                  <h3 className="text-sm font-semibold mb-2 [font-family:'Poppins',sans-serif]">
                    Premium
                  </h3>
                  <ul className="space-y-1">
                    {PremiumTools.map((tool, index) => (
                      <li
                        key={`premium-${index}`}
                        className="px-2 py-1 hover:text-amber-600 [font-family:'Poppins',sans-serif] font-light cursor-pointer"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li className="hover:text-amber-600 [font-family:'Poppins',sans-serif] font-light cursor-pointer">
            <Link to="/Blog"> Blog </Link>
          </li>

          <li className="hover:text-amber-600 [font-family:'Poppins',sans-serif] font-light cursor-pointer">
            <Link to="/Price"> Price </Link>
          </li>

          <li className=" font-light hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/about"> About us </Link>
          </li>
        </ul>
      </div>

      {/* Right Section - Avatar */}
      <div className="flex items-center gap-4">
        {isLogedIn ? (
          <div className="relative hidden md:block">
            <button onClick={() => setShowUserMenu(!showUserMenu)}>
              <img src={userImg} alt="User" className="w-8 h-8 rounded-full" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 inset-shadow-2xs mt-2 w-48 bg-white text-black rounded-md ring-1 ring-gray-200 z-50 flex flex-col justify-between h-48">
                <div>
                  <div className="px-4 py-2 font-light cursor-pointer [font-family:'Poppins',sans-serif]">
                    Profile
                  </div>
                  <div className="px-4 py-2 font-light cursor-pointer [font-family:'Poppins',sans-serif]">
                    Settings
                  </div>
                  <div className="px-4 py-2 font-light cursor-pointer [font-family:'Poppins',sans-serif]">
                    Placeholder
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 bg-amber-600 text-white cursor-pointer [font-family:'Poppins',sans-serif] rounded-b-md"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLogin} // Define your login logic or redirect
            className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-md hidden md:block [font-family:'Poppins',sans-serif]"
          >
            Login
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden "
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-26 left-0 w-full bg-white text-black flex flex-col gap-4 px-6 py-4 md:hidden z-50">
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/"> Home </Link>
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            SEO Tips
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/features"> Home </Link>
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/price"> Home </Link>
          </div>

          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            Tool 1
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            Tool 2
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            Placeholder
          </div>

          {isLogedIn === true ? (
            <div className="border-t pt-4">
              <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
                Profile
              </div>
              <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
                Settings
              </div>
              <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
                Placeholder
              </div>
              <button
                onClick={handleLogout} // Add this function in your component
                className="mt-4 w-full flex items-center gap-2 px-4 py-2 bg-amber-600 text-white hover:bg-amber-700 rounded-md [font-family:'Poppins',sans-serif]"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-md [font-family:'Poppins',sans-serif]"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
