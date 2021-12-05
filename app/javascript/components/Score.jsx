import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions} from "@mui/material";


const Score = (props) => {
  const {score, total} = props.results;
  
  return (
    <>
      <Dialog open={props.open} onClose={props.closeHandler}>
        <DialogTitle id="dialog-title">{"Result"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-message">
            {`You scored ${score} out of ${total}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeHandler}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Score;