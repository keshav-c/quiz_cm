import React from "react";

const Logout = (prompt) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const csrf_token = document.querySelector('meta[name="csrf-token"]').content;
    const body = JSON.stringify({ auth_token: prompt.auth_token });
    let response = await fetch(props.url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf_token,
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
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <button type="submit">{props.prompt}</button>
      </div>
    </form>
  );
};

export default Logout;