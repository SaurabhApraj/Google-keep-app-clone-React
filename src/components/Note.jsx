import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const Note = () => {
  return (
    <>
      <div className="note">
        <h1>Title</h1>
        <p>This is the note</p>
        <Button>
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
};

export default Note;
