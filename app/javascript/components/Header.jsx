import React from "react";
import { Link } from "react-router-dom";
import Logout from "./LogoutButton";
import { AppBar, Container, Button, Toolbar, Typography } from "@mui/material";

const AppHeader = (props) => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar>
        <Typography variant="h6">Create a Quiz</Typography>
        <Button
          component={Link}
          variant="text"
          color="inherit"
          to="/"
        >
          Home
        </Button>
        {!props.loggedIn && (
          <Button
            component={Link}
            variant="text"
            color="inherit"
            to="/signup"
          >
            Sign Up
          </Button>
        )}
        {!props.loggedIn && (
          <Button
            component={Link}
            variant="text"
            color="inherit"
            to="/signin"
          >
            Sign in
          </Button>
        )}
        {props.loggedIn && (
          <Logout
            authToken={props.authToken}
            onLogoutSuccess={props.onRxUserData}
          />
        )}
      </Toolbar>
    </Container>
  </AppBar>
);

export default AppHeader;