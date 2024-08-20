// ThemeContext.js
import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [modeColor, setModeColor] = useState("white");

  const toggleMode = () => {
    setModeColor((prevMode) => (prevMode === "white" ? "black" : "white"));
  };

  return (
    <ThemeContext.Provider value={{ modeColor, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
