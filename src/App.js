import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Button from "@material-ui/core/Button";

import {
  selectActiveEnv,
  selectVersion,
} from "./redux/config/config.selectors";

import logo from "./logo.svg";
import "./App.css";

function App({ activeEnv, appVersion }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>App current environment: {activeEnv}</p>
        <p>Version: {appVersion}</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  activeEnv: selectActiveEnv,
  appVersion: selectVersion,
});

export default connect(mapStateToProps)(App);
