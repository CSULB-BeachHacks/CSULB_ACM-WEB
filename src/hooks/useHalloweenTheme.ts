import { useEffect, useState } from "react";

export type Theme = "default" | "halloween" | "halloween-season";

export const useHalloweenTheme = () => {
  const [theme, setTheme] = useState<Theme>("default");

  useEffect(() => {
    const checkTheme = () => {
      const today = new Date();
      const month = today.getMonth() + 1; // 0-11, so add 1
      const day = today.getDate();

      // Check user preference first
      const savedTheme = localStorage.getItem("userTheme");
      if (savedTheme === "halloween") {
        applyTheme("halloween");
        return;
      }

      // Auto-detect based on date
      if (month === 10 && day === 31) {
        applyTheme("halloween");
      } else if (month === 10) {
        applyTheme("halloween-season");
      } else {
        applyTheme("default");
      }
    };

    const applyTheme = (newTheme: Theme) => {
      setTheme(newTheme);
      document.body.className = document.body.className.replace(
        /halloween-theme|halloween-season/g,
        ""
      );
      
      if (newTheme !== "default") {
        document.body.classList.add(newTheme);
      }

      // Update logo
      const logoElements = document.querySelectorAll<HTMLImageElement>('img[alt="CSULB ACM"]');
      logoElements.forEach((img) => {
        img.src = newTheme === "halloween" ? "/images/halo-acm.png" : "/images/acm.png";
      });

      // Update CSS variables
      if (newTheme === "halloween") {
        document.documentElement.style.setProperty("--accent-halloween", "24 100% 50%"); // Orange
      } else if (newTheme === "halloween-season") {
        document.documentElement.style.setProperty("--accent-halloween", "39 100% 50%"); // Light orange
      }
    };

    checkTheme();

    // Check every hour
    const interval = setInterval(checkTheme, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "halloween" ? "default" : "halloween";
    localStorage.setItem("userTheme", newTheme);
    window.location.reload(); // Simple reload to apply theme
  };

  return { theme, toggleTheme };
};
