import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions} from "@mui/material";

const ShareableLink = (props) => {
  return (
    <>
      <Dialog open={props.open} onClose={props.closeHandler}>
        <DialogTitle id="dialog-title">{"Success"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-message">
            <a href={props.link}>Link to Created Quiz</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeHandler}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );

};

export default ShareableLink;
