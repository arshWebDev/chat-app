import { createContext, useContext, useState, useEffect } from "react";

const DarkThemeContext = createContext(null);

const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};

const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("darkTheme") !== undefined) {
      setDarkTheme(JSON.parse(localStorage.getItem("darkTheme")));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkTheme(true);
      console.log("prefers");
    } else {
      setDarkTheme(false);
      console.log("else");
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <>
      <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        {children}
      </DarkThemeContext.Provider>
    </>
  );
};

export default DarkThemeProvider;
export { useDarkTheme };
