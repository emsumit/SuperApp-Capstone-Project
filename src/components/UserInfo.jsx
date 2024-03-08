import React from "react";
import profileBig from "../assets/profileBig.png";

export default function UserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const movies = JSON.parse(localStorage.getItem("movies"));
  return (
    <div
      style={{
        width: "440px",
        height: "280px",
        display: "flex",

        backgroundColor: "#5746EA",
        borderRadius: "20px",
      }}
    >
      <div style={{ margin: "2%" }}>
        <img src={profileBig} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "5%",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ margin: "0 0 5px 0" }}>{info.name}</p>
          <p style={{ margin: "0 0 5px 0" }}>{info.email}</p>
          <h2 style={{ margin: "0 0 5px 0" }}>{info.username}</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {movies.map((item) => {
            return (
              <div
                style={{
                  margin: "6px",
                  width: "120px",
                  height: "30px",
                  backgroundColor: "#9F94FF",
                  alignItems: "center",
                  borderRadius: "25px",
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
