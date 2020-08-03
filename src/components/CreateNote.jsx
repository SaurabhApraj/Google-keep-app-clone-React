import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const show = () => {
    setExpand(true);
  };
  const hide = () => {
    setExpand(false);
  };

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
      <div className="main__note" onDoubleClick={hide}>
        <form className="form">
          {expand ? (
            <input
              className="txt"
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <br />
          <textarea
            className="txtarea"
            rows=""
            cols=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Write a note..."
            onClick={show}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="btn" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
