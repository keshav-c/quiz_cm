import React from "react";
import AuthForm from "../components/AuthForm";

const Signup = (props) => 
  <AuthForm
    url="/users"
    prompt="Register"
    loggedIn={props.loggedIn}
    onSuccess={props.onRxUserData}
  />;

export default Signup;