import React from "react";

const FormInput = (props) => {
  const fieldName =
    props.field.toUpperCase()[0] + props.field.toLowerCase().substring(1);

  return (<div>
    <label htmlFor={props.field}>Your {fieldName}</label>
    <input
      type={props.field}
      id={props.field}
      name={props.field}
      onChange={props.changeHandler}
      value={props.enteredValue}
    />
  </div>);
};

export default FormInput;