import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppHeader from "./Header";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import QuizPage from "../pages/QuizPage";
import { Paper, Container, Card } from "@mui/material";

let token = "";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const updateUserState = (newToken, newLoginState) => {
    token = newToken;
    setLoggedIn(newLoginState);
  }

  return (
    <Container maxWidth="md">
      <Paper sx={{ height: '100vh' }}>
        <AppHeader
          loggedIn={loggedIn}
          authToken={token}
          onRxUserData={updateUserState}
        />
        <Card sx={{ margin: '2em', padding: '2em' }}>
          <Switch>
            <Route exact path="/">
              <Home loggedIn={loggedIn} authToken={token} />
            </Route>
            <Route exact path="/signup">
              <Signup loggedIn={loggedIn} onRxUserData={updateUserState} />
            </Route>
            <Route exact path="/signin">
              <Signin loggedIn={loggedIn} onRxUserData={updateUserState} />
            </Route>
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
