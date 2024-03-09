import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="timer-container">
      <div className="">
        {" "}
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={seconds}
          colors={["#FF6A6A"]}
          className="timer-circle"
          size={110}
          strokeWidth={5}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              setIsPlaying(false);
              return <div>Time is up</div>;
            } else {
              return (
                <>
                  <div>{Math.floor(remainingTime / 3600)}:</div>
                  <div> {Math.floor((remainingTime % 3600) / 60)}:</div>
                  <div>{remainingTime % 60}</div>
                </>
              );
            }
          }}
        </CountdownCircleTimer>
      </div>
      <div className="timer-btns">
        <div>
          <div>
            Seconds
            <button
              className="custom-up-button"
              onClick={() => setSeconds((prev) => prev + 1)}
            ></button>
            <button
              className="custom-down-button"
              onClick={() => {
                if (seconds > 0) {
                  setSeconds((prev) => prev - 1);
                }
              }}
            ></button>
          </div>
          <div>
            Minutes
            <button
              className="custom-up-button"
              onClick={() => setSeconds((prev) => prev + 60)}
            ></button>
            <button
              className="custom-down-button"
              onClick={() => {
                if (seconds >= 60) {
                  setSeconds((prev) => prev - 60);
                }
              }}
            ></button>
          </div>
          <div>
            Hours
            <button
              className="custom-up-button"
              onClick={() => setSeconds((prev) => prev + 3600)}
            ></button>
            <button
              className="custom-down-button"
              onClick={() => {
                if (seconds > 3600) {
                  setSeconds((prev) => prev - 3600);
                }
              }}
            ></button>
          </div>
        </div>
        <div>
          <button
            className="start-btn"
            disabled={isPlaying}
            onClick={() => setIsPlaying(true)}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
