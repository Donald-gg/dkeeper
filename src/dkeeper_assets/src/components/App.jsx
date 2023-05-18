import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from '../../../declarations/dkeeper/index';
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notes = await dkeeper.readNote()
      setNotes(notes)
    }
    getNotes()
  }, [])

  function addNote(newNote) {
    if(newNote.title && newNote.content) {
      dkeeper.createNote(newNote)
      setNotes(prevNotes => {
        return [newNote, ...prevNotes];
      });
    }
  }

  function deleteNote(id) {
    dkeeper.filterNote(notes[id])
    const filteredNotes = notes.filter((note, index) => id !== index)
    setNotes(filteredNotes);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
