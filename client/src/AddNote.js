import React, { useState } from "react";

const AddNote = ({ updateNotes }) => {
  const [newNote, setNewNote] = useState("");
  //   const { updateNotes } = useContext(UserContext);
  const characterLimit = 300;
  const handleSave = () => {
    fetch("/note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: newNote,
      }),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        updateNotes(data);
        setNewNote("");
      });
  };
  const handleChange = e => {
    if (characterLimit - e.target.value.length >= 0) {
      setNewNote(e.target.value);
    }
  };
  return (
    <div className="note new">
      <textarea
        className="txt-area"
        rows="8"
        cols="10"
        placeholder=" add a note..."
        value={newNote}
        onChange={handleChange}
      ></textarea>
      <div className="note-bottom">
        <small>{characterLimit - newNote.length} remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
