import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/*
============================================================
THEME CONTEXT
============================================================
*/

const ThemeContext = createContext();

/*
============================================================
THEME PROVIDER
============================================================
*/

export function ThemeProvider({ children }) {
  /*
  ----------------------------------------------------------
  LOAD SAVED THEME
  ----------------------------------------------------------
  */

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme =
      localStorage.getItem("nutrifit-theme");

    return savedTheme === "dark";
  });

  /*
  ----------------------------------------------------------
  APPLY THEME
  ----------------------------------------------------------

  Light mode:
  <html>

  Dark mode:
  <html class="dark">

  Tailwind's dark: utilities are connected to the
  .dark class through index.css.
  ----------------------------------------------------------
  */

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");

      root.style.backgroundColor = "#111111";

      localStorage.setItem(
        "nutrifit-theme",
        "dark"
      );
    } else {
      root.classList.remove("dark");

      root.style.backgroundColor = "#ffffff";

      localStorage.setItem(
        "nutrifit-theme",
        "light"
      );
    }
  }, [darkMode]);

  /*
  ----------------------------------------------------------
  TOGGLE THEME
  ----------------------------------------------------------

  Adds a temporary class while the theme changes.

  This allows the browser to transition the colors
  smoothly without the visual blinking that happened
  when the theme changed.
  ----------------------------------------------------------
  */

  const toggleTheme = () => {
    const root = document.documentElement;

    /*
    Add the transition class BEFORE changing the theme.
    */
    root.classList.add("theme-transition");

    /*
    Change the theme.
    */
    setDarkMode((current) => !current);

    /*
    Remove the transition class after the animation
    has finished.
    */
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 350);
  };

  /*
  ----------------------------------------------------------
  CONTEXT
  ----------------------------------------------------------
  */

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/*
============================================================
USE THEME
============================================================
*/

export function useTheme() {
  return useContext(ThemeContext);
}