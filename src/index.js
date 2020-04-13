import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { configInit } from "./config/config";
import { setConfig } from "./redux/config/config.actions";
import { setWindowSize } from "./redux/window-resize/windowResize.actions";
import { store } from "./redux/store";

import "./index.css";
import App from "./App";

// screen size event listener
window.addEventListener("resize", () => {
  store.dispatch(setWindowSize(window.innerWidth, window.innerHeight));
});

// @desc This function init the config based on .env file then log the projection of config
//       like { version & environment } and save the config object to redux store.
const profileInit = () => {
  // 1. Init config based on .env
  let config = configInit();
  console.log("App Environment:", config.activeEnv);
  console.log("Version:", config.version);
  store.dispatch(setConfig(config));
};

// @desc This function is entry point for rendering on root
const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

// @desc This function is a wrapper for init the app in proper way.
const boot = () => {
  // Profile init set the config of app based on .env file
  profileInit();
  // Rendering of the app
  renderApp();
};

// Here the project start booting up.
boot();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
