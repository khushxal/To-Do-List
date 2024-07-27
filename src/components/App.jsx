import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";
function App() {
  const [notes, setNotes] = useState([]);

  // save functionality is to be added in App.jsx
  function saveNote(newnote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }

  // delete functionality is to be added in App.jsx only
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Form onAdd={saveNote} />
      {notes.map((notesItem, index) => (
        <Note
          key={index}
          id={index}
          title={notesItem.title}
          content={notesItem.content}
          onDelete={() => {
            deleteNote(index);
          }}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
