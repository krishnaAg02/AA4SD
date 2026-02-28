import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="flex items-center gap-3">
      
      {/* Light Text */}
      <span
        className={`text-sm font-semibold transition ${
          !darkMode ? "text-gray-900" : "text-gray-400"
        }`}
      >
        Light
      </span>

      {/* Toggle Switch */}
      <button
        onClick={toggleTheme}
        className={`relative w-14 h-8 rounded-full transition duration-300 ${
          darkMode ? "bg-blue-600" : "bg-blue-400"
        }`}
      >
        {/* Slider Circle */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ${
            darkMode ? "translate-x-6" : ""
          }`}
        />
      </button>

      {/* Dark Text */}
      <span
        className={`text-sm font-semibold transition ${
          darkMode ? "text-gray-900 dark:text-white" : "text-gray-400"
        }`}
      >
        Dark
      </span>
    </div>
  );
};

export default ThemeToggle;
