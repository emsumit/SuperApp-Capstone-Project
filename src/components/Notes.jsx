import React, { useState } from "react";
import "./Notes.css";

export default function Notes() {
  const [notes, setNotes] = useState(localStorage.getItem("notes") ?? "");
  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };
  return (
    <div className="main-notes">
      <h1> All Notes</h1>
      <textarea
        className="text-area"
        onChange={handleChange}
        value={notes}
        row={20}
        cols={20}
      ></textarea>
    </div>
  );
}
