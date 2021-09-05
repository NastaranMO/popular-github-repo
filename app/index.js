import React from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import "./index.css";
import { ThemeProvider } from "./contexts/theme";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light",
        }));
      },
    };
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          {/* <Popular /> */}
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
