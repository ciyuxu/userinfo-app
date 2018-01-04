import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "./styles/theme";
import Routes from "./routes";
import "./App.css";


class App extends Component {
  getChildContext() {
    return { muiTheme };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.childContextTypes = { muiTheme: PropTypes.object.isRequired };

export default App;
