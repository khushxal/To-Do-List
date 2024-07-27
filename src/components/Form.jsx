import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { Fab } from "@mui/material";
// import { Zoom } from "@mui/material";

function NoteForm(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  // handling the change of values in inputs
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  // calling the method which call the save method from App.jsx
  function handleSubmit(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form method="post" className="create-note">
        <input
          onChange={handleChange}
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <hr />
        <textarea
          onChange={handleChange}
          rows={10}
          type="text"
          id="content"
          name="content"
          placeholder="Note Content"
          value={note.content}
        />
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
