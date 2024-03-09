import React from "react";
import UserInfo from "../components/UserInfo";
import Notes from "../components/Notes";
import Weather from "../components/Weather";
import News from "../components/News";
import "./Display.css";

export default function Display() {
  return (
    <>
      <div className="left-container">
        <div>
          <div className="userinfo-notes">
            <UserInfo />
            <Weather />
          </div>

          <div className="notes">
            <Notes />
          </div>
        </div>
        <div className="timer">Timer</div>
      </div>

      <div className="news">
        <News />
        <button className="next-btn">Next Page</button>
      </div>
    </>
  );
}
