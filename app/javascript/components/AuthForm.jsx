import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import FormInput from "./FormInput";
import { Button, FormControl } from "@mui/material";

// url, prompt, loggedIn, onSuccess
const AuthForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passChangeHandler = (event) => {
    setEnteredPass(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const token = document.querySelector('meta[name="csrf-token"]').content;
    const body = JSON.stringify({
      email: enteredEmail,
      password: enteredPass,
    });
    let response = await fetch(props.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": token,
      },
      body: body,
    });
    response = await response.json();
    if (response.errors) {
      console.log("something went wrong");
      response.errors.forEach((e) => console.log(e));
    } else {
      console.log("it worked");
      const { data } = response;
      setEnteredEmail("");
      setEnteredPass("");
      props.onSuccess(data.token, true);
    }
    console.log(response);
  };

  return (
    <form onSubmit={submitHandler}>
      {props.loggedIn && <Redirect to="/" />}
      <FormControl margin="normal" fullWidth={true}>
        <FormInput
          field="email"
          helperText="Enter a proper email"
          enteredValue={enteredEmail}
          changeHandler={emailChangeHandler}
        />
        <br/>
        <FormInput
          field="password"
          helperText="Enter a secure password"
          enteredValue={enteredPass}
          changeHandler={passChangeHandler}
        />
        <Button component="button" type="submit">{props.prompt}</Button>
      </FormControl>
    </form>
  );
};

export default AuthForm;