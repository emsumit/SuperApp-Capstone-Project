import React from "react";
import profileBig from "../assets/profileBig.png";
import "./UserInfo.css";

export default function UserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const movies = JSON.parse(localStorage.getItem("movies"));
  return (
    <div className="userinfo-main">
      <div className="user-img">
        <img src={profileBig} />
      </div>
      <div className="user-information">
        <div className="user-data">
          <p>{info.name}</p>
          <p>{info.email}</p>
          <h2>{info.username}</h2>
        </div>
        <div className="movie-list">
          {movies.map((item) => {
            return (
              <div className="movie-item" key={item}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
