import React, { useState } from "react";

const Signup = () => {
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
    const url = "/users";
    const body = JSON.stringify({
      email: enteredEmail,
      password: enteredPass
    });
    let response = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": token
      },
      body: body
    })
    console.log(response);
    const data = await response.json();
    if(response.ok) {      
      console.log("it worked");
      console.log(data);
    } 
    else {
      console.log("something went wrong");
      // console.log(data);
      data.message.forEach(msg => console.log(msg));
    }


    setEnteredEmail('');
    setEnteredPass('');
  };

  return (
    <form onSubmit={submitHandler}>
    <div>
      <label htmlFor="user_email">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={emailChangeHandler}
        value={enteredEmail}/>
    </div>
    <div>
      <label htmlFor="user_password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={passChangeHandler}
        value={enteredPass}/>
    </div>
    <div>
      <button type="submit">Register</button>
    </div>
  </form>      
  );
};



export default Signup;