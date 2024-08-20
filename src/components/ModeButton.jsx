// ModeButton.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ModeButton = () => {
  const { modeColor, toggleMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleMode}>
      {modeColor === "white" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ModeButton;
