import React, { useState } from "react";
import QuestionsForm from "./QuestionsForm";

const NewQuiz = () => {
  const [quizData, setQuizData] = useState({
    title: "",
    questions: []
  });

  const formChangeHandler = (event) => {
    const name = event.target.name;
    if (name === "Add") {
      setQuizData((data) => {
        let {title, questions} = data;
        questions = [
          ...questions,
          {
            qText: "",
            A: "",
            B: "",
            C: "",
            D: "",
            answer: "A",
          },
        ];
        return {title, questions};
      });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    console.log("form submitted");
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
          name="Add"
        >Add Another Question</button>
        
        <button type="submit" onClick={submitHandler} >Submit Quiz</button>
        
      </form>
    </>
  );
};

export default NewQuiz;