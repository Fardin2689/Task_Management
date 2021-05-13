import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { v1 as uuidv1 } from "uuid";

export default function ItemDialog(props) {
  const [task, setTask] = React.useState({});

  React.useEffect(() => {
    setTask(props.task);
  }, [props.task]);

  const handleInput = (event) => {
    setTask({ ...task, [event.target.id]: event.target.value });
  };
  const handleAddBt = () => {
    const addId2Task = { ...task, id: uuidv1() };
    props.handleAddTask(addId2Task);
  };
  const handleEditBt = () => {
    props.handleEditTask(task);
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>
        {props.task.id ? "Edit Task" : "Create New Task"}
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="title"
          required
          label="Task Title"
          fullWidth
          onChange={handleInput}
          value={task.title}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          multiline
          rowsMax={4}
          onChange={handleInput}
          value={task.description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button
          disabled={!task.title}
          onClick={props.task.id ? handleEditBt : handleAddBt}
          color="primary"
        >
          {props.task.id ? "Edit" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
