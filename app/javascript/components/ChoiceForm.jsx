import React from "react";

// expects props: value (A), answer(A), choiceText, qIndex (5), handler
const ChoiceForm = (props) => (
  <fieldset>
    <legend>{`Choice ${props.value}`}</legend>
    <input
      type="radio"
      name={`answer-${props.qIndex}`}
      value={props.value}
      checked={props.value === props.answer}
      onChange={props.handler}
    />
    <input
      type="text"
      name={`${props.value}-${props.qIndex}`}
      value={props.choiceText}
      onChange={props.handler}
    />
  </fieldset>
);

export default ChoiceForm;