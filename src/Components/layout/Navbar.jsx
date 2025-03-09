import React from "react";
import SearchIcon from "/public/Searchicon.svg";
import Logo from "/public/TypographyLogo.svg";

const Navbar = () => {
  {
    /* ---------- Navbar Items -------- */
  }
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our services", path: "/services" },
    { name: "About Us", path: "/aboutus" },
    { name: "What's new?", path: "/whatsnew" },
  ];
  return (
    <div className="max-w-max-width mx-auto py-5">
      <div className="flex items-center">
        {/* ---------- Logo -------- */}
        <div className="w-1/2">
          <img src={Logo} alt="Logo" />
        </div>
        {/* ---------- NavItem -------- */}
        <div className="w-1/2 flex items-center">
          <div className="flex gap-x-10 font-Raleway">
            {navItems.map((item, index) => (
              <ul key={index}>
                <li className="hover:text-red-500 cursor-pointer font-semibold">
                  {item.name}
                </li>
              </ul>
            ))}
          </div>
          {/* ---------- Button -------- */}
          <div className="ml-10 flex items-center">
            {/* ---------- Search Button -------- */}
            <button className="bg-[#ffedc9] p-3 rounded-xl">
              <img src={SearchIcon} alt="" />
            </button>
            {/* ---------- Contact Us Button -------- */}
            <button className="bg-[#ffe4d9] py-3 px-5 ml-4 font-Raleway font-bold text-red-700 rounded-xl">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
