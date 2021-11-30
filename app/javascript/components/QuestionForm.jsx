import React from "react";
import ChoicesForm from "./ChoicesForm";

// expected props: qIndex, question: {qText, A, B..D, answer, score}, handler
const QuestionForm = (props) => {
  const qName = `q-${props.qIndex}`;
  const { A, B, C, D } = props.question;
  const choiceText = { A, B, C, D };
  const sName = `s-${props.qIndex}`;

  return (
    <fieldset>
      <legend>{`Question ${props.qIndex + 1}`}</legend>

      <label htmlFor={qName}>Question</label>
      <textarea
        rows="5"
        cols="60"
        name={qName}
        id={qName}
        onChange={props.handler}
        value={props.question.qText}
      />

      <ChoicesForm
        qIndex={props.qIndex}
        answer={props.question.answer}
        choiceText={choiceText}
        handler={props.handler}
      />

      <label htmlFor={sName}>Score</label>
      <input
        type="number"
        id={sName}
        htmlFor={sName}
        onChange={props.handler}
        value={props.question.score}
      />
    </fieldset>
  );
};

export default QuestionForm;