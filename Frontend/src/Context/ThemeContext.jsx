import { createContext } from "react";

export const ThemeContext = createContext({
  theme: localStorage.getItem("theme") || "dark",

  toggleTheme: () => {},
});

export default function useTheme() {
  return useContext(ThemeContext);
}
