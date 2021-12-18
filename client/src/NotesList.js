import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, updateNotes, deleteNote, updateOneNote }) => {
  return (
    <div className="notes-list">
      {notes.map(n => (
        <Note
          noteId={n.id}
          key={n.id}
          text={n.text}
          timestamp={n.updated_at}
          deleteNote={deleteNote}
          updateOneNote={updateOneNote}
        />
      ))}
      <AddNote updateNotes={updateNotes} />
    </div>
  );
};

export default NotesList;
