import React, { useState } from "react";
import Questions from "./Questions";

const Quiz = (props) => {
  const title = props.data.title;
  let questions = props.data.questions;
  questions = questions.map((q) => ({...q, answer: ""}));

  const solutions = questions.map((q) => ({id: q.id, answer:q.answer}));
  const [quiz, setQuiz] = useState(solutions);

  const formChangeHandler = (event) => {
    const index = event.target.name.split("-")[1];
    setQuiz((solutions) => {
      solutions[index]["answer"] = event.target.value;
      return solutions;
    });
  };
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    console.log(quiz);
  };


  return (
    <>
      <h2>{title}</h2>
      <form>
        <Questions questions={questions} handler={formChangeHandler} />
        <button type="submit" onClick={formSubmitHandler}>Submit Quiz</button>
      </form>
    </>
  );
};

export default Quiz;