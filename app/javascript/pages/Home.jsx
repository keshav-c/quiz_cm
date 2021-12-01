import React, { useState } from "react";
import NewQuiz from "../components/NewQuiz";

const ShowFormButton = (props) => (
  <button
    type="button"
    onClick={props.clickHandler}
  >
    {props.prompt}
  </button>
);

const Home = (props) => {
  const [showForm, setShowForm] = useState(false);

  const btnClickHandler = () => {
    setShowForm((oldState) => !oldState);
  };
  const showFormBtnPrompt = showForm ? "Hide Quiz Form" : "Add New Quiz";

  return (
    <>
      <h1>Home page</h1>
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