import React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";

function note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
        className="button"
      >
        DELETE
      </button>
    </div>
  );
}

export default note;
