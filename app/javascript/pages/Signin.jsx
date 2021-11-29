import React from "react";
import AuthForm from "../components/AuthForm";

const Signin = (props) => (
  <AuthForm
    url="/login"
    prompt="Login"
    loggedIn={props.loggedIn}
    onSuccess={props.onRxUserData}
  />
);

export default Signin;
