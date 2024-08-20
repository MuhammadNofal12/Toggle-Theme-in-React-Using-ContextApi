// App.js
import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import ModeButton from "./components/ModeButton";
import "./App.css"; // For additional styles

function App() {
  const { modeColor } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: modeColor, minHeight: "100vh" }}>
      <ModeButton />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
