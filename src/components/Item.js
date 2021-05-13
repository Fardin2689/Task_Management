import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 500,
    maxWidth: 500,
    margin: 5,
  },
}));

export default function Item(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={props.title} subheader={props.description} />
      <CardActions disableSpacing>
        <IconButton onClick={props.handleDeleteTask}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={props.handleEditTask}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
