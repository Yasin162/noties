import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/User";
import NotesList from "./NotesList";
import Search from "./Search";
const Home = () => {
  const { loggedIn, errors } = useContext(UserContext);
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("/note")
      .then(res => res.json())
      .then(data => {
        setNotes(data);
      });
  }, []);
  if (!loggedIn) {
    return <h1>{errors}</h1>;
  } else {
    const updateNote = (newText, textId) => {
      fetch(`note/${textId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          text: newText,
          id: textId,
        }),
      })
        .then(res => res.json())
        .then(data => {
          //   setNotes([...notes, data]);
          //   const editNote = notes.map(n => n.id);
          //   const editingNote = editNote.find();
        });
    };
    const deleteNote = textId => {
      fetch(`/note/${textId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: textId,
        }),
      });
      const findNote = notes.find(n => n.id === textId);
      const newNotesList = notes.filter(n => n.id !== findNote.id);
      console.log(newNotesList, notes, findNote);
      setNotes(newNotesList);
    };

    const updateNotes = data => {
      const newNote = {
        id: data.id,
        text: data.text,
        updated_at: data.updated_at,
      };
      setNotes([...notes, newNote]);
    };
    return (
      <div>
        <h1>Notes</h1>
        <Search searchNote={setSearchText} />
        <NotesList
          deleteNote={deleteNote}
          updateNotes={updateNotes}
          updateOneNote={updateNote}
          notes={notes.filter(note =>
            note.text.toLowerCase().includes(searchText)
          )}
        />
      </div>
    );
  }
};

export default Home;
