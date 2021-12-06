import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import AppHeader from "./Header";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import QuizPage from "../pages/QuizPage";
import { Paper, Container, Card } from "@mui/material";

let token = "";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    if(cookies['token']) {
      token = cookies['token'];
      setLoggedIn(true);
    }
  });

  const updateUserState = (newToken, newLoginState) => {
    if(newLoginState) { // logged in
      let expiry = new Date();
      expiry.setTime(expiry.getTime() + 1000 * 60 * 30);
      setCookie("token", newToken, { path: "/", expires: expiry });
    } else { // logged out
      removeCookie('token');
    }
    token = newToken;
    setLoggedIn(newLoginState);
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ minHeight: "100vh", padding: "1em" }}>
        <AppHeader
          loggedIn={loggedIn}
          authToken={token}
          onRxUserData={updateUserState}
        />
        <Card sx={{ margin: "2em", padding: "1em" }}>
          <Switch>
            <Route exact path="/">
              <Home loggedIn={loggedIn} authToken={token} />
            </Route>
            <Route exact path="/signup">
              <Signup loggedIn={loggedIn} onRxUserData={updateUserState} />
            </Route>
            <Route
              exact
              path="/signin"
              render={(props) => (
                <Signin
                  {...props}
                  loggedIn={loggedIn}
                  onRxUserData={updateUserState}
                />
              )}
            />
            <Route exact path="/quiz/:quizId">
              <QuizPage />
            </Route>
          </Switch>
        </Card>
      </Paper>
    </Container>
  );
};

export default App;
