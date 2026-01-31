import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="text-[#FF6600]" size={20} />
      ) : (
        <Moon className="text-[#FF6600]" size={20} />
      )}
    </button>
  );
};

export default Theme;
