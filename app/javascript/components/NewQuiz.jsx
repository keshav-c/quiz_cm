import React, { useState } from "react";
import QuestionsForm from "./QuestionsForm";
import ShareableLink from "./ShareableLink";
import { Button, FormControl, TextField } from "@mui/material";

const NewQuiz = (props) => {
  const [quiz, setQuiz] = useState({
    title: "",
    questions: []
  });
  const [quizSubmitted, setQuizSubmitted] = useState({
    status: false,
    link: ""
  });

  const formChangeHandler = (event) => {
    const name = event.target.name;

    if (name === "add") {
      setQuiz((data) => {
        let {title, questions} = data;
        questions = [
          ...questions,
          {qtext: "", A: "", B: "", C: "", D: "", answer: "A", score: 1},
        ];
        return {title, questions};
      });
    } else if (name === "title") {
      setQuiz((data) => {
        let {title, questions} = data;
        title = event.target.value;
        return {title, questions};
      });
    } else {
      let [prop, i] = name.split("-");
      setQuiz((data) => {
        let { title, questions } = data;
        questions[i][prop] = event.target.value;
        return { title, questions };
      });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const token = props.authToken
    const csrf_token = document.querySelector('meta[name="csrf-token"]').content;
    let response = await fetch("/quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf_token,
      },
      body: JSON.stringify({token, quiz})
    });
    const data = await response.json();
    if (response.ok) {
      setQuizSubmitted({
        status: true,
        link: `/quiz/${data.slug}`
      });
    } else {
      data.message.forEach((msg) => console.log(msg));
    }
  }

  const resultsCloseHandler = () => {
    setQuizSubmitted({
      status: false,
      link: ""
    });
  }

  return (
    <>
      <form>
        <FormControl margin="normal" fullWidth={true}>
          <TextField
            type="input"
            id="title"
            name="title"
            onChange={formChangeHandler}
            label="Quiz Title"
            helperText="Enter a title (Mandatory)"
          />

          <QuestionsForm
            questions={quiz.questions}
            handler={formChangeHandler}
          />

          <Button component="button" type="button" onClick={formChangeHandler} name="add">
            Add Question
          </Button>

          <Button component="button" type="submit" onClick={submitHandler}>
            Submit Quiz
          </Button>
        </FormControl>
      </form>
      {quizSubmitted.status && 
        <ShareableLink
          link={quizSubmitted.link}
          open={quizSubmitted.status}
          closeHandler={resultsCloseHandler}
        />
      }
    </>
  );
};

export default NewQuiz;