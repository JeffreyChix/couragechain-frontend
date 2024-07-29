"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const useInitialTheme = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(isDarkMode ? "dark" : "light");
    }
  }, [theme]);

  return { theme, setTheme };
};

export { useInitialTheme };
