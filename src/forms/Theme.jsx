import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light"); // default to dark

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="inline-flex items-center justify-center transition-colors">
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <Sun size={20} className="text-[#FF6600] cursor-pointer" />
        ) : (
          <Moon size={20} className="text-[#FF6600] cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default Theme;
