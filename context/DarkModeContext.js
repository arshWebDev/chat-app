import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext(null);

const useDarkMode = () => {
  return useContext(DarkModeContext);
};

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </>
  );
};

export default DarkModeProvider;
export { useDarkMode };
