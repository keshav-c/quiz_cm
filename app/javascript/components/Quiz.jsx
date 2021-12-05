import React, { useState } from "react";
import Questions from "./Questions";
import Score from "./Score";
import { Button, FormControl, Typography } from "@mui/material";

// expect data: {title, questions}, slug
const Quiz = (props) => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const formChangeHandler = (qId, newAnswer) => {
    setAnswers((answers) => {
      answers[qId] = newAnswer;
      return answers;
    });
  };
  
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const quiz = [];
    for(let id in answers) {
      quiz.push({ id: id, answer: answers[id] });
    }
    const payload = {quiz, token: props.slug};
    const csrf_token = document.querySelector('meta[name="csrf-token"]').content;

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
      setShowResults(true);
    }
  };

  const resultsCloseHandler = () => {
    setShowResults(false);
    setScore(null);
  };


  return (
    <>
      <Typography align="center" variant="h3">{props.data.title}</Typography>
      <form>
        <FormControl margin="normal" fullWidth={true}>
          <Questions
            questions={props.data.questions}
            answers={answers}
            handler={formChangeHandler}
          />
          <Button
            component="button"
            type="submit"
            onClick={formSubmitHandler}
          >
            Get Results
          </Button>
        </FormControl>
      </form>
      {!!score && 
        <Score
          results={(score)}
          open={showResults}
          closeHandler={resultsCloseHandler}
        />
      }
    </>
  );
};

export default Quiz;