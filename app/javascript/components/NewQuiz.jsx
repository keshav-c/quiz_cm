import React, { useState } from "react";
import QuestionsForm from "./QuestionsForm";

const NewQuiz = (props) => {
  const [quiz, setQuiz] = useState({
    title: "",
    questions: []
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
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      console.log("it worked");
      console.log(data);
    } else {
      console.log("something went wrong");
      data.message.forEach((msg) => console.log(msg));
    }
  }

  return (
    <>
      <h2>New Quiz Form</h2>
      <form>
        <div>
          <label htmlFor="title">Quiz Title</label>
          <input type="input" id="title" name="title" onChange={formChangeHandler} />
        </div>
        
        <QuestionsForm questions={quiz.questions} handler={formChangeHandler} />

        <button
          type="button"
          onClick={formChangeHandler}
          name="add"
        >Add Another Question</button>
        
        <button type="submit" onClick={submitHandler} >Submit Quiz</button>
        
      </form>
    </>
  );
};

export default NewQuiz;