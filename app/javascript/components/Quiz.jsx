import React, { useState } from "react";
import Questions from "./Questions";
import Score from "./Score";

const Quiz = (props) => {
  const [score, setScore] = useState(null);
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
  
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const payload = {quiz, token: props.slug};
    const csrf_token = document.querySelector(
      'meta[name="csrf-token"]'
    ).content;

    const response = await fetch(`/quiz/${props.slug}/evaluate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf_token,
      },
      body: JSON.stringify(payload)
    });
    if(response.ok) {
      const rxData = await response.json();
      setScore(rxData);
    }
  };


  return (
    <>
      <h2>{title}</h2>
      <form>
        <Questions questions={questions} handler={formChangeHandler} />
        <button type="submit" onClick={formSubmitHandler}>Submit Quiz</button>
      </form>
      {!!score && <Score results={(score)} /> }
    </>
  );
};

export default Quiz;