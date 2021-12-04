import React from "react";
import ChoicesForm from "./ChoicesForm";
import { FormControl, TextField } from "@mui/material";

// expected props: qIndex, question: {qText, A, B..D, answer, score}, handler
const QuestionForm = (props) => {
  const qName = `qtext-${props.qIndex}`;
  const { A, B, C, D } = props.question;
  const choiceText = { A, B, C, D };
  const sName = `score-${props.qIndex}`;

  return (
    <FormControl component="fieldset" margin="dense" fullWidth={true}>
      <TextField
        id={qName}
        name={qName}
        multiline
        minRows={5}
        fullWidth={true}
        onChange={props.handler}
        value={props.question.qText}
        label="Question"
        helperText="Enter the Question (Mandatory)"
      />

      <ChoicesForm
        qIndex={props.qIndex}
        answer={props.question.answer}
        choiceText={choiceText}
        handler={props.handler}
      />

      <TextField
        type="number"
        id={sName}
        name={sName}
        onChange={props.handler}
        label={sName}
        value={props.question.score}
        helperText="How many points for this questions? (Mandatory)"
      />
    </FormControl>
  );
};

export default QuestionForm;