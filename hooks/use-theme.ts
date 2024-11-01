/** @format */

import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light"); // default to 'light'

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Check initial theme
    setTheme(mediaQuery.matches ? "dark" : "light");

    // Log the theme or use it as needed
    console.log(`Current OS theme: ${mediaQuery.matches ? "dark" : "light"}`);

    // Optional: listen for theme changes
    const handleThemeChange = (e: any) =>
      setTheme(e.matches ? "dark" : "light");
    mediaQuery.addListener(handleThemeChange);

    // Cleanup the listener on unmount
    return () => mediaQuery.removeListener(handleThemeChange);
  }, []);
  return { theme, setTheme };
}
