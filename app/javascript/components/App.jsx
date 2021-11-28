import React from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppHeader from "./Header";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const App = (props) => (
  <>
    <h1>The App {props.name}</h1>
    <AppHeader />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
    </Switch>
  </>
);

export default App;
