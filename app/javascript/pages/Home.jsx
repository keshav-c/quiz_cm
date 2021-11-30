import React, { useState } from "react";
import NewQuiz from "../components/NewQuiz";

const ShowFormButton = (props) => (
  <button
    type="button"
    onClick={props.clickHandler}
  >
    Add New Quiz
  </button>
);

const Home = (props) => {
  const [showForm, setShowForm] = useState(false);

  const btnClickHandler = () => {
    setShowForm(true);
  };

  return (
    <>
      <h1>Home page</h1>
      {props.loggedIn && !showForm && <ShowFormButton clickHandler={btnClickHandler} />}
      {props.loggedIn && showForm && <NewQuiz authToken={props.authToken} />}
    </>
  );
};

export default Home;