import React from "react";
import UserInfo from "../components/UserInfo";
import Notes from "../components/Notes";
import Weather from "../components/Weather";
import News from "../components/News";
import Timer from "../components/Timer";
import "./Display.css";
import { useNavigate } from "react-router-dom";

export default function Display() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/Browser");
  };
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
        <div className="timer">
          <Timer />
        </div>
      </div>

      <div className="news">
        <News />
        <button onClick={handleChange} className="next-btn">
          Next Page
        </button>
      </div>
    </>
  );
}
