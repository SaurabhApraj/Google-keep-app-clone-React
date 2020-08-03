import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <Button onClick={deleteNote}>
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
};

export default Note;
