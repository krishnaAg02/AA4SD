import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("home");

  // Dark Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Membership", id: "membership" },
    { name: "Events", id: "events" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* ================= LOGO SECTION ================= */}
        <div className="flex items-center gap-4">
          
          {/* Cropped & Focused Logo */}
          <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-white shadow-md">
            <img
              src={logo}
              alt="Asia-Pacific Association"
              className="absolute h-full w-full object-cover scale-[1.4] object-[center_25%]"
            />
          </div>

          {/* Text */}
          <div className="leading-tight">
            <h1 className="text-2xl font-bold text-white">
              Asia-Pacific Association
            </h1>
            <p className="text-sm text-blue-200">
              For Sports Dentistry
            </p>
          </div>
        </div>

        {/* ================= NAV LINKS ================= */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-white font-medium transition duration-300
                ${active === link.id ? "text-red-400" : "hover:text-red-300"}
              `}
            >
              {link.name}

              {/* Animated Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-400 transition-all duration-300
                  ${
                    active === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              ></span>
            </button>
          ))}
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex items-center gap-6">
          
          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm">Light</span>

            <div
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition duration-300
                ${darkMode ? "bg-blue-500" : "bg-gray-300"}
              `}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition duration-300
                  ${darkMode ? "translate-x-7" : ""}
                `}
              ></div>
            </div>

            <span className="text-sm">Dark</span>
          </div>

          {/* Join Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
