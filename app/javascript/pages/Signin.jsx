import React from "react";
import SigninForm from "../components/SigninForm";

const Signin = (props) => {
  const justLoggedIn = props.location.justLoggedIn;

  return (
    <SigninForm
      justLoggedIn={!!justLoggedIn}
      loggedIn={props.loggedIn}
      onSuccess={props.onRxUserData}
    />
  );
};

export default Signin;
