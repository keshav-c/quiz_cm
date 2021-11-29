import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import FormInput from "./FormInput";

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
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      console.log("it worked");
      console.log(data);
      setEnteredEmail("");
      setEnteredPass("");
      props.onSuccess(data.token, true);
    } else {
      console.log("something went wrong");
      data.message.forEach((msg) => console.log(msg));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {props.loggedIn && <Redirect to="/" />}
      <FormInput
        field="email"
        enteredValue={enteredEmail}
        changeHandler={emailChangeHandler}
      />
      <FormInput
        field="password"
        enteredValue={enteredPass}
        changeHandler={passChangeHandler}
      />
      <div>
        <button type="submit">{props.prompt}</button>
      </div>
    </form>
  );
};

export default AuthForm;