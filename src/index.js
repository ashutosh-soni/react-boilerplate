import React from 'react';
import ReactDOM from 'react-dom';
import { configInit } from './config/config'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const profileInfo = (config) => {
  console.log('App Environment:', config.activeEnv);
  console.log('Version:', config.version);
}

function renderApp () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

function boot () {
  let config = configInit();
  profileInfo(config);
  renderApp();
}

boot();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
