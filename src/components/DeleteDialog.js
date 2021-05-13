import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({
  task = { title: "" },
  open,
  handleClose,
  handleDeleteTask,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{"Delete Task!"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Are You Sure to Delete Task "${task.title}"?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDeleteTask} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
