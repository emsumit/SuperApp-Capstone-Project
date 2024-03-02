import React from "react";
import "./MovieBox.css";

export default function MovieBox({ data, selected, setSelected }) {
  const handleClick = () => {
    if (selected.includes(data.id)) {
      setSelected((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelected((prev) => {
        return [...prev, data.id];
      });
    }
  };
  const isSelected = selected.includes(data.id);
  return (
    <>
      <div
        className="movie-box-container"
        onClick={handleClick}
        style={{
          background: data.color,
          borderColor: isSelected ? "#11B800" : "",
        }}
      >
        <p>{data.id}</p>
        {data.image}
      </div>
    </>
  );
}
