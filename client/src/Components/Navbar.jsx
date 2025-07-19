import { useEffect, useState, useRef } from "react";
import { ChevronDown, Cookie, LogOut, Menu, X } from "lucide-react";
import userImg from "../assets/images/def.png"; // Replace with your actual avatar image
import logo from "../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
// import { AiPostgenerator } from "../Controllers/Freemium.tools.Controller";
import Cookies from "js-cookie";

import { useModal } from "../Contexts/ModelContext";
useModal;

export default function Navbar() {
  const [showTools, setShowTools] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFreeOpen, setMobileFreeOpen] = useState(false);
  const [mobilePremiumOpen, setMobilePremiumOpen] = useState(false);
  const [isLogedIn, setisLogedIn] = useState(() => {
    return !!Cookies.get("user");
  });
  const navigate = useNavigate();
  const { openModal } = useModal();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [prevSearches, setPrevSearches] = useState([]);

  const searchRef = useRef();

  const FreeTools = [
    "AI Post Generator",

    "Reviewing Reply Templates",

    "Citation Scan",

    "GBP Audit",

    "Keyword Suggestions Tool",

    "AI Humanizer",

    "Live Keyword Rank Tracker",
  ];

  const PremiumTools = [
    "AI-Based GBP Optimization Assistant",

    "Auto Citation Checker, Builder & Syncer",

    "Auto Google Posts + Social Media Scheduler",

    "Auto Review Reply Generator",

    "AI to Human Content Converter",

    "Digital Business Card Builder",

    "High-Intent Keyword Finder",

    "All-in-One SEO Toolkit",

    "Full GBP + Social Integration",
  ];

  const allTools = [...FreeTools, ...PremiumTools];
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearchSelect = (tool) => {
    setSearchQuery(tool);
    setPrevSearches((prev) =>
      [tool, ...prev.filter((t) => t !== tool)].slice(0, 5)
    );
    HandleTool(tool);
    setSearchOpen(false);
  };

  const filteredTools = searchQuery
    ? allTools.filter((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allTools;

  useEffect(() => {
    if (Cookies.get("user")) {
      setisLogedIn(true);
    }
  }, [isLogedIn]);

  const HandleTool = (Name) => {
    if (!!isLogedIn) {
      if (Name === "AI Post Generator") {
        navigate("/ReviewToolPage", { state: { tool: "Ai Post Generator" } });
      }

      if (Name === "Reviewing Reply Templates") {
        navigate("/ReviewToolPage", {
          state: { tool: "Reviewing Reply Templates" },
        });
      } else if (Name === "Keyword Suggestions Tool") {
        navigate("/SerpToolPage");
      } else if (Name === "Keyword Suggestions Tool") {
        navigate("/SerpToolPage");
      } else if (Name === "AI Humanizer") {
        navigate("/SaplingToolPage");
      } else if (Name === "Review Reply Templates") {
        navigate("/ReviewToolPage");
      } else if (Name === "Live Keyword Rank Tracker") {
        navigate("/RankingPage");
      }
    } else {
      openModal();
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    Cookies.remove("user");
    setisLogedIn(false);
  };

  return (
    <nav className="bg-white sticky top-0 text-black px-6 py-4  flex items-center shadow-lg z-10  justify-between     w-full">
      {/* Left Section - Logo & Desktop Menu */}
      <div className="flex items-center gap-10">
        <div className="text-2xl [font-family:'Poppins',sans-serif] font-bold">
          <img src={logo} className="w-20 h-20" />
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          <li className=" font-light hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/"> Home </Link>
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
      <div className="flex [font-family:'Poppins',sans-serif]  items-center  justify-center gap-5 ">
        <div ref={searchRef} className="relative z-30">
          <input
            type="text"
            onFocus={() => {
              setSearchOpen(true);
              setShowUserMenu(false);
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for your favorite tools"
            className=" max-sm:w-50 lg:w-120  px-4 py-2 mb-1.9 border border-gray-400 rounded-md focus:outline-none shadow-sm"
          />

          {searchOpen && (
            <>
              {/* Grayed out background */}
              <div
                className="fixed inset-0 bg-black opacity-20 z-10"
                onClick={() => setSearchOpen(false)}
              />

              {/* Dropdown */}
              <div className="absolute mt-2 max-sm:w-50 lg:w-120 bg-white rounded-md shadow-lg z-20 p-4">
                {prevSearches.length > 0 && (
                  <>
                    <h4 className="text-xs font-medium text-gray-500 mb-2">
                      Previous Searches
                    </h4>
                    <div className="space-y-1 mb-3">
                      {prevSearches.map((t, i) => (
                        <div
                          key={`prev-${i}`}
                          className="py-1 px-2 hover:text-amber-600 cursor-pointer rounded hover:bg-gray-100"
                          onClick={() => handleSearchSelect(t)}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <h4 className="text-xs font-medium text-gray-500 mb-2">
                  Tools
                </h4>
                <div className="max-h-40 overflow-y-auto space-y-1">
                  {filteredTools.length > 0 ? (
                    filteredTools.map((t, i) => (
                      <div
                        key={`match-${i}`}
                        className="py-1 px-2 hover:text-amber-600 cursor-pointer rounded hover:bg-gray-100"
                        onClick={() => handleSearchSelect(t)}
                      >
                        {t}
                      </div>
                    ))
                  ) : (
                    <div className="py-1 text-gray-500">No matches</div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Section - Avatar */}
        <div className="flex items-center gap-4">
          {isLogedIn ? (
            <div className="relative hidden md:block">
              <button onClick={() => setShowUserMenu(!showUserMenu)}>
                <img
                  src={userImg}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 inset-shadow-2xs mt-2 w-48 bg-white text-black rounded-md ring-1 ring-gray-200 z-50 flex flex-col justify-between h-48">
                  <div>
                    <div className="px-4 py-2 font-light cursor-pointer hover:bg-gray-200 [font-family:'Poppins',sans-serif]">
                      Profile
                    </div>
                    <div className="px-4 py-2 font-light cursor-pointer hover:bg-gray-200 [font-family:'Poppins',sans-serif]">
                      Settings
                    </div>
                    <div className="px-4 py-2 font-light cursor-pointer hover:bg-gray-200 [font-family:'Poppins',sans-serif]">
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
              onClick={handleLogin}
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
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-26 left-0 w-full bg-white text-black flex flex-col gap-4 px-6 py-4 md:hidden z-50">
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/"> Home </Link>
          </div>

          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/features"> Features </Link>
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/blog"> Blog </Link>
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/price"> Price </Link>
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            <Link to="/about"> About us </Link>
          </div>

          <div>
            <button
              onClick={() => setMobileFreeOpen(!mobileFreeOpen)}
              className="flex items-center justify-between w-full font-light [font-family:'Poppins',sans-serif] hover:text-amber-600"
            >
              Free Tools{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  mobileFreeOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileFreeOpen && (
              <ul className="mt-2 ml-4 space-y-1">
                {FreeTools.map((tool, index) => (
                  <li
                    key={`mobile-free-${index}`}
                    onClick={() => HandleTool(tool)}
                    className="text-sm px-2 py-1 font-light cursor-pointer hover:text-amber-600 [font-family:'Poppins',sans-serif]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <button
              onClick={() => setMobilePremiumOpen(!mobilePremiumOpen)}
              className="flex items-center justify-between w-full font-light [font-family:'Poppins',sans-serif] hover:text-amber-600"
            >
              Premium Tools{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  mobilePremiumOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobilePremiumOpen && (
              <ul className="mt-2 ml-4 space-y-1">
                {PremiumTools.map((tool, index) => (
                  <li
                    key={`mobile-premium-${index}`}
                    className="text-sm px-2 py-1 font-light cursor-pointer hover:text-amber-600 [font-family:'Poppins',sans-serif]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            )}
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
