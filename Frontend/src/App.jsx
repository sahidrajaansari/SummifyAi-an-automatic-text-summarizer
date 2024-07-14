import { useEffect, useState } from "react";
import { NavBar, Footer } from "./Components";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const setCurrentUser = (user) => {
    setUser(user);
    localStorage.setItem("user", user);
  };
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
    console.log(theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="w-full h-screen">
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
