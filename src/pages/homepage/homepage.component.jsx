import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Button from "@material-ui/core/Button";

import {
  selectActiveEnv,
  selectVersion,
} from "../../redux/config/config.selectors";
import { selectScreenSize } from "../../redux/window-resize/windowResize.selectors";

import logo from "./logo.svg";
import "./homepage.styles.scss";

const Homepage = ({ activeEnv, appVersion, screenSize }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>App current environment: {activeEnv}</p>
        <p>Version: {appVersion}</p>
        <p>Screen width: {screenSize.width}</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  activeEnv: selectActiveEnv,
  appVersion: selectVersion,
  screenSize: selectScreenSize,
});

export default connect(mapStateToProps)(Homepage);
