import React from "react";
import { Link } from "react-router-dom";
import Logout from "./LogoutButton";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const AppHeader = (props) => (
  <AppBar position="static">
    <Toolbar sx={{ justifyContent: 'flex-end' }}>
      <Typography variant="h6" sx={{ marginRight: 'auto' }}>Create a Quiz</Typography>
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
  </AppBar>
);

export default AppHeader;