import React from "react";
import QuestionForm from "./QuestionForm";

// expected props: questions :[question....], handler
const QuestionsForm = (props) => {
  const questions = props.questions.map((question, index) => 
    <QuestionForm
      key={`q-${index}`}
      qIndex={index}
      question={question}
      handler={props.handler}
    />
  );

  return (<>{questions}</>)
};

export default QuestionsForm;