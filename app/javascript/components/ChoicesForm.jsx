import React from "react";
import ChoiceForm from "./ChoiceForm";

// expected props: answer(A), choiceText ({A:...,B...,...}), qIndex (5), handler
const ChoicesForm = (props) => {
  const values = ["A", "B", "C", "D"];

  const optionElements = values.map((val) =>
    <ChoiceForm
      key={`${val}-${props.qIndex}`}
      value={val}
      answer={props.answer}
      qIndex={props.qIndex}
      choiceText={props.choiceText[val]}
      handler={props.handler}
    />
  );

  return <>{optionElements}</>;
};

export default ChoicesForm;