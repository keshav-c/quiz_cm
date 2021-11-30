import React, { useState } from "react";
import QuestionsForm from "./QuestionsForm";

const NewQuiz = (props) => {
  const [quizData, setQuizData] = useState({
    title: "",
    questions: []
  });

  const formChangeHandler = (event) => {
    const name = event.target.name;

    if (name === "add") {
      setQuizData((data) => {
        let {title, questions} = data;
        questions = [
          ...questions,
          {qtext: "", A: "", B: "", C: "", D: "", answer: "A", score: 1},
        ];
        return {title, questions};
      });
    } else if (name === "title") {
      setQuizData((data) => {
        let {title, questions} = data;
        title = event.target.value;
        return {title, questions};
      });
    } else if (name.startsWith("question")) {
      let i = name.split('-')[1];
      setQuizData((data) => {
        let {title, questions} = data;
        questions[i].qText = event.target.value;
        return {title, questions};
      });
    } else {
      let [prop, i] = name.split("-");
      setQuizData((data) => {
        let { title, questions } = data;
        questions[i][prop] = event.target.value;
        return { title, questions };
      });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // const token = props.authToken;
    // const {}

    console.log(quizData);
  }

  const numQ = quizData.questions.length;

  return (
    <>
      <h2>New Quiz Form</h2>
      <form>
        <div>
          <label htmlFor="title">Quiz Title</label>
          <input type="input" id="title" name="title" onChange={formChangeHandler} />
        </div>
        
        <QuestionsForm questions={quizData.questions} handler={formChangeHandler} />

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