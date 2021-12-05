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
  
  const choiceChangeHandler = (event) => {
    const name = event.target.name;
    const qId = name.split('-')[1];
    const value = event.target.value;
    props.handler(qId, value);
  };


  return props.questions.map((q, i) => (
    <FormControl component="fieldset" key={`q-${i}`}>
      <FormLabel component="legend">{q.qtext}</FormLabel>
      <RadioGroup
        name={`answer-${q.id}`}
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
