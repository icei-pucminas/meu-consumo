import { useState } from "react";
import "./App.scss";
import AppRoutes from "./routes/Routes";

const App: React.FC = () => {
  const verifyDarkMode = (): boolean => {
    const isDark = localStorage.getItem("isDark") || "";
    return isDark.includes("true");
  };
  const [isDarkMode, setIsDarkMode] = useState(verifyDarkMode());

  window.addEventListener("storage", () => {
    setIsDarkMode(verifyDarkMode());
  });

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <AppRoutes />
    </div>
  );
};

export default App;
