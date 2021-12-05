import React from "react";
import { Alert } from "@mui/material";

const Errors = (props) => (
  props.errors.map((error, i) => 
    <Alert
      key={`error-${i}`}
      severity="error"
    >
      {error}
    </Alert>
  )
);

export default Errors;