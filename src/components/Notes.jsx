import React, { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(localStorage.getItem("notes") ?? "");
  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        alignContent: "end",
        flexDirection: "column",
        width: "300px",
        height: "430px",
        borderRadius: "15px",
        backgroundColor: "#F1C75B",
      }}
    >
      <h1 style={{ color: "black", margin: "8%" }}> All Notes</h1>
      <textarea
        onChange={handleChange}
        value={notes}
        style={{
          margin: "0 8% 8% 8%",
          width: "83%",
          height: "90%",
          padding: "0",
          backgroundColor: "#F1C75B",
          border: "none",
        }}
        row={20}
        cols={20}
      ></textarea>
    </div>
  );
}
