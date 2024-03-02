import React from "react";

export default function MovieChip({ data, setSelected }) {
  const handleClick = () => {
    setSelected((prev) => prev.filter((item) => item !== data));
  };
  return (
    <div className="movie-chip">
      {data} &nbsp; <span onClick={handleClick}>X</span>{" "}
    </div>
  );
}
