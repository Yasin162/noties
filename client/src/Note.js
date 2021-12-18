import React, { useState } from "react";

const Note = ({ noteId, text, timestamp, deleteNote, updateOneNote }) => {
  const [editNote, setEditNote] = useState(text);
  const handleChange = e => {
    setEditNote(e.target.value);
  };
  const color = {
    backgroundColor: "red",
  };
  return (
    <div className="note">
      {/* <span> */}
      <textarea
        className="text-edit"
        rows="8"
        cols="10"
        placeholder=" add a note..."
        value={editNote}
        onChange={handleChange}
      >
        {text}
      </textarea>
      {/* </span> */}
      <div className="note-bottom">
        <small>{timestamp}</small>
        <button className="save" onClick={updateOneNote(editNote, noteId)}>
          Save
        </button>
        <button
          className="save"
          style={color}
          onClick={() => deleteNote(noteId)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Note;
