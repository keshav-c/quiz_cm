import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default AppHeader;