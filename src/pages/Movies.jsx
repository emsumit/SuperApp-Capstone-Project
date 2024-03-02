import { useState } from "react";
import { useNavigate } from "react-router-dom";

import action from "../assets/movies/action.png";
import drama from "../assets/movies/drama.png";
import fantasy from "../assets/movies/fantasy.png";
import fiction from "../assets/movies/fiction.png";
import horror from "../assets/movies/horror.png";
import music from "../assets/movies/music.png";
import romance from "../assets/movies/romance.png";
import thriller from "../assets/movies/thriller.png";
import western from "../assets/movies/western.png";

import MovieBox from "../components/MovieBox";
// import MovieChip from "../components/MovieChip";

import "./Movies.css";
import MovieChip from "../components/MovieChip";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#148A08",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];
export default function Movies() {
  const [selected, setSelected] = useState([]);
  console.log(selected);
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      navigate("/display");
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="movies-left-container">
        <div className="movies-info">
          <h1
            style={{
              fontFamily: "Single Day, cursive",
              fontSize: "3rem",
              color: "#72DB73",
            }}
          >
            SuperApp
          </h1>
          <h1>
            Choose your <br /> Entertainment Category
          </h1>
        </div>
        <div className="movie-buttons">
          <div className="movies-selected">
            {selected.map((item) => {
              return (
                <MovieChip key={item} data={item} setSelected={setSelected} />
              );
            })}
          </div>
          <div className="select-error">
            {selected.length < 3 ? <p>Minimum 3 Categories Required</p> : <></>}
          </div>
        </div>
        <div className="next-btn-div">
          <button onClick={handleClick} className="movie-next-btn">
            Next Page
          </button>
        </div>
      </div>
      <div className="movies-container">
        {genres.map((genres) => {
          return (
            <MovieBox
              key={genres.id}
              data={genres}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </div>
  );
}
