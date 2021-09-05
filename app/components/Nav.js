import React from "react";
import { ThemeConsumer } from "../contexts/theme";

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <button
          style={{ fontSize: 30 }}
          className="btn-clear"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "💡" : "🔦"}
        </button>
      )}
    </ThemeConsumer>
  );
}
