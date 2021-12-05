import React from "react";
import { Button } from "@mui/material";

const Logout = (props) => {
  const clickHandler = async (event) => {
    const csrf_token = document.querySelector('meta[name="csrf-token"]').content;
    let response = await fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf_token,
      },
      body: JSON.stringify({ auth_token: props.authToken }),
    });
    const data = await response.json();
    if (response.ok) {
      props.onLogoutSuccess("", false);      
    } else {
      data.errors.forEach((msg) => console.log(msg));
    }
  };

  // variant="text" color="danger" 
  return (
    <Button
      component="button"
      variant="text"
      color="inherit"
      onClick={clickHandler}
    >
      Log Out
    </Button>
  );
};

export default Logout;