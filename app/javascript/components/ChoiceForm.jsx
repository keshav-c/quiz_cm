import React from "react";
import { FormGroup, Radio, TextField } from "@mui/material";

// expects props: value (A), answer(A), choiceText, qIndex (5), handler
const ChoiceForm = (props) => (
  <FormGroup row={true}>
    <Radio
      name={`answer-${props.qIndex}`}
      value={props.value}
      checked={props.value === props.answer}
      onChange={props.handler}
    />
    <TextField
      fullWidth={true}
      name={`${props.value}-${props.qIndex}`}
      value={props.choiceText}
      onChange={props.handler}
      label={`Choice ${props.value}`}
      helperText={`Text of Choice ${props.value} (Mandatory)`}
    />
  </FormGroup>
);

export default ChoiceForm;