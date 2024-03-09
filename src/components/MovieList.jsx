import React from "react";
import MovieRow from "./MovieRow";

export default function MovieList() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  return (
    <div>
      {movies.map((movie) => (
        <MovieRow key={movie} genre={movie} />
      ))}
    </div>
  );
}
