import React, { useState } from "react";
import NewQuiz from "../components/NewQuiz";
import { Button, Typography } from "@mui/material";

const ShowFormButton = (props) => (
  <Button
    component="button"
    type="button"
    onClick={props.clickHandler}
  >
    {props.prompt}
  </Button>
);

const Home = (props) => {
  const [showForm, setShowForm] = useState(false);

  const btnClickHandler = () => {
    setShowForm((oldState) => !oldState);
  };
  const showFormBtnPrompt = showForm ? "Hide Quiz Form" : "Create New Quiz";

  return (
    <>
      <Typography align="center" variant="h2">Home page</Typography>
      {
        props.loggedIn && 
          <ShowFormButton
            prompt={showFormBtnPrompt}
            clickHandler={btnClickHandler}
          />
      }
      {props.loggedIn && showForm && <NewQuiz authToken={props.authToken} />}
    </>
  );
};

export default Home;