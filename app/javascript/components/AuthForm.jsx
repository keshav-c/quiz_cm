import React, { useState } from "react";

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
    } else {
      console.log("something went wrong");
      data.message.forEach((msg) => console.log(msg));
    }

    setEnteredEmail("");
    setEnteredPass("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={passChangeHandler}
          value={enteredPass}
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default AuthForm;