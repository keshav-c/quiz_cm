import React from "react";
import { 
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup } from "@mui/material";

// expect questions, answers
const Questions = (props) => {
  
  // return props.questions.map((q) => (
  //   <fieldset key={`q-${q.id}`}>
  //     <legend>{q.qtext}</legend>
  //     {["A", "B", "C", "D"].map((choice) => (
  //       <div key={`${choice}-${q.id}`}>
  //         <input
  //           type="radio"
  //           value={choice}
  //           name={`answer-${q.id}`}
  //           id={`${choice}-${q.id}`}
  //           onChange={props.handler}
  //           checked={
  //             choice === (props.answers != null ? props.answers[q.id] : null)
  //           }
  //         />
  //         <label htmlFor={`${choice}-${q.id}`}>
  //           {`${choice}: ${q[choice]}`}
  //         </label>
  //       </div>
  //     ))}
  //   </fieldset>
  // ));

  const choiceChangeHandler = (event) => {
    const name = event.target.name;
    const qId = name.split('-')[1];
    const value = event.target.value;
    props.handler(qId, value);
    console.log(props.answers);
  };


  return props.questions.map((q, i) => (
    <FormControl component="fieldset" key={`q-${i}`}>
      <FormLabel component="legend">{q.qtext}</FormLabel>
      <RadioGroup
        name={`answer-${q.id}`}
        value={props.answers[q.id]}
        onChange={choiceChangeHandler}
      >
        {["A", "B", "C", "D"].map((c) => (
          <FormControlLabel
            key={`${c}-${i}`}
            value={c}
            control={<Radio />}
            label={`${c}: ${q[c]}`}
          />
        ))}
      </RadioGroup>
      <Divider />
    </FormControl>
  ));
};

export default Questions;
