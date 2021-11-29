import React from "react";
import { Link } from "react-router-dom";
import Logout from "./LogoutButton";

// authToken, loggedIn, onRxUserData
const AppHeader = (props) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!props.loggedIn && (
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        )}
        {!props.loggedIn && (
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        )}
        {props.loggedIn && (
          <Logout
            authToken={props.authToken}
            onLogoutSuccess={props.onRxUserData}
          />
        )}
      </ul>
    </nav>
  </header>
);

export default AppHeader;