import React from "react";
import { TextField } from "@mui/material";

const FormInput = (props) => {
  const fieldName =
    props.field.toUpperCase()[0] + props.field.toLowerCase().substring(1);

  return <TextField
    type={props.field}
    id={props.field}
    name={props.field}
    onChange={props.changeHandler}
    value={props.enteredValue}
    label={fieldName}
    helperText={props.helperText}
  />
};

export default FormInput;