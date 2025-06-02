import { useState } from "react";
import { ChevronDown, LogOut, Menu, X } from "lucide-react";
import userImg from "../assets/def.png"; // Replace with your actual avatar image
import logo from '../assets/Logo.png'

export default function Navbar() {
  const [showTools, setShowTools] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const FreeTools = [
    "AI Post Generator",

    "Review Reply Templates",

    "Citation Scan",

    "GBP Audit",

    "Keyword Suggestions Tool",

    "AI Humanizer",
  ];

  return (
    <nav className="bg-white fixed text-black px-6 py-4 flex items-center shadow-lg z-10 justify-between w-full">
      {/* Left Section - Logo & Desktop Menu */}
      <div className="flex items-center gap-10">
        <div className="text-2xl [font-family:'Poppins',sans-serif] font-bold">
          <img src={logo} className="w-14 h-14" />
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          <li className=" font-light hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            Home
          </li>
          <li className=" font-light hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            SEO Tips
          </li>
          <li className=" font-light hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            Features
          </li>

          <li className="relative">
            <button
              onClick={() => setShowTools(!showTools)}
              className="flex items-center gap-1 font-light cursor-pointer  hover:text-amber-600 [font-family:'Poppins',sans-serif]"
            >
              Tools <ChevronDown size={16} />
            </button>
            {showTools && (
              <div className="absolute mt-2 w-96 bg-white inset-shadow-2xs text-black rounded-md ring-1 ring-gray-200 transition-all duration-200 origin-top z-50 p-4 grid grid-cols-2 gap-4">
                {/* Free Tools Column */}
                <div>
                  <h3 className="text-sm font-semibold mb-2 [font-family:'Poppins',sans-serif]">
                    Free Tools
                  </h3>
                  <ul className="space-y-1">
                    {FreeTools.map((tool, index) => (
                      <li
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
                    {[
                      "Tool 1",
                      "Tool 2",
                      "Placeholder",
                      "Tool 1",
                      "Tool 2",
                    ].map((tool, index) => (
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
            Price
          </li>
        </ul>
      </div>

      {/* Right Section - Avatar */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <button onClick={() => setShowUserMenu(!showUserMenu)}>
            <img src={userImg} alt="User" className="w-8 h-8 rounded-full" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 inset-shadow-2xs mt-2 w-48 bg-white text-black rounded-md ring-1 ring-gray-200 z-50 flex flex-col justify-between h-48">
              <div>
                <div className="px-4 py-2  [font-family:'Poppins',sans-serif] font-light cursor-pointer">
                  Profile
                </div>
                <div className="px-4 py-2  [font-family:'Poppins',sans-serif] font-light cursor-pointer">
                  Settings
                </div>
                <div className="px-4 py-2  [font-family:'Poppins',sans-serif] font-light cursor-pointer">
                  Placeholder
                </div>
              </div>
              <button className="w-full flex items-center gap-2 px-4 py-2 bg-amber-600 text-white cursor-pointer [font-family:'Poppins',sans-serif] rounded-b-md">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black flex flex-col gap-4 px-6 py-4 md:hidden z-50">
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            Home
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            SEO Tips
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            Features
          </div>
          <div className="hover:text-amber-600 [font-family:'Poppins',sans-serif] cursor-pointer">
            Price
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
            <button className="mt-4 w-full flex items-center gap-2 px-4 py-2 bg-amber-600 [font-family:'Poppins',sans-serif] text-white hover:bg-amber-700 rounded-md">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
