import React from "react";
import { Route, Switch } from "react-router-dom";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Homepage from "./pages/homepage/homepage.component";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={SignInAndSignUpPage} />
    </Switch>
  );
}

export default App;
