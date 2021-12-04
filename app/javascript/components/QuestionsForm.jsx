import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

// expected props: questions :[question....], handler
const QuestionsForm = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const questions = props.questions.map((question, index) => (
    <Accordion
      key={`q-${index}`}
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        id={`question-${index}-panel`}
      >
        <Typography>{`Question ${index+1}`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <QuestionForm
          qIndex={index}
          question={question}
          handler={props.handler}
        />
      </AccordionDetails>
    </Accordion>
  ));

  return (<>{questions}</>);
};

export default QuestionsForm;