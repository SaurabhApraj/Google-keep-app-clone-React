import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="main__note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            rows=""
            cols=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Write a note..."
          ></textarea>
          <Button onClick={addEvent}>
            <AddIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
