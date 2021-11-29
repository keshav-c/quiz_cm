import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppHeader from "./Header";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

let token = "";

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const updateUserState = (newToken, newLoginState) => {
    token = newToken;
    setLoggedIn(newLoginState);
  }

  return (
    <>
      <h1>The App {props.name}</h1>
      <AppHeader
        loggedIn={loggedIn}
        authToken={token}
        onRxUserData={updateUserState}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup loggedIn={loggedIn} onRxUserData={updateUserState} />
        </Route>
        <Route exact path="/signin">
          <Signin loggedIn={loggedIn} onRxUserData={updateUserState} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
