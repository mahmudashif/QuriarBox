import React, { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Make sure to install react-icons
import SearchIcon from "/public/Searchicon.svg";
import Logo from "/public/TypographyLogo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  /* ---------- Navbar Items -------- */
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our services", path: "/services" },
    { name: "About Us", path: "/aboutus" },
    { name: "What's new?", path: "/whatsnew" },
  ];

  // Handle clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="max-w-max-width mx-auto py-3 md:py-4 lg:py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        {/* ---------- Logo -------- */}
        <div className="flex-shrink-0 w-32 sm:w-40 md:w-auto">
          <img
            src={Logo || "/placeholder.svg"}
            alt="Logo"
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* ---------- Mobile Menu Button -------- */}
        <div className="flex md:hidden items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-red-500 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* ---------- Desktop Navigation -------- */}
        <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
          <div className="flex gap-x-4 lg:gap-x-10 font-Raleway">
            {navItems.map((item, index) => (
              <ul key={index}>
                <li className="hover:text-red-500 cursor-pointer font-semibold text-sm lg:text-base">
                  {item.name}
                </li>
              </ul>
            ))}
          </div>

          {/* ---------- Button -------- */}
          <div className="ml-4 lg:ml-10 flex items-center">
            {/* ---------- Search Button -------- */}
            <button className="bg-[#ffedc9] p-2 lg:p-3 rounded-lg lg:rounded-xl">
              <img
                src={SearchIcon || "/placeholder.svg"}
                alt="Search"
                className="h-4 w-4 lg:h-5 lg:w-5"
              />
            </button>

            {/* ---------- Contact Us Button -------- */}
            <button className="bg-[#ffe4d9] py-2 px-3 lg:py-3 lg:px-5 ml-2 lg:ml-4 font-Raleway font-bold text-red-700 text-sm lg:text-base rounded-lg lg:rounded-xl transition duration-300 hover:bg-red-500 hover:text-white hover:scale-105">
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Menu (Dropdown) -------- */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg absolute left-4 right-4 z-50"
        >
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="font-Raleway font-semibold hover:text-red-500"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 flex items-center justify-between border-t border-gray-200">
              {/* ---------- Search Button -------- */}
              <button className="bg-[#ffedc9] p-2 rounded-lg">
                <img
                  src={SearchIcon || "/placeholder.svg"}
                  alt="Search"
                  className="h-4 w-4"
                />
              </button>

              {/* ---------- Contact Us Button -------- */}
              <button className="bg-[#ffe4d9] py-2 px-4 font-Raleway font-bold text-red-700 rounded-lg transition duration-300 hover:bg-red-500 hover:text-white">
                Contact us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
