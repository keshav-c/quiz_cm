import React from "react";

const Questions = (props) => {
  
  return props.questions.map((q, i) => (
    <fieldset key={`q-${i}`}>
      <legend>{q.qtext}</legend>
      {["A", "B", "C", "D"].map((c) => (
        <div key={`${c}-${i}`}>
          <input
            type="radio"
            value={c}
            name={`answer-${i}`}
            id={`${c}-${i}`}
            onChange={props.handler}
            // checked={c === q.answer}
          />
          <label htmlFor={`${c}-${i}`}>{`${c.toUpperCase()}: ${q[c]}`}</label>
        </div>
      ))}
    </fieldset>
  ));
};

export default Questions;
