import React, { useEffect, useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    // fetch(
    //   "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=oyz6LTXPYe2kllKFHdiFIR0QWUosagX6"
    // )
    //   .then((data) => data.json())
    //   .then((data) => setWeather(data))
    //   .catch((error) => console.log(error));
  }, []);
  console.log(weather);
  return (
    <div className="main-weather">
      <div className="date-time">Time</div>
      <div className="weather">
        {" "}
        <div>
          <p>Weather</p>
          {weather
            ? weather.timelines.daily[0].values.temperatureAvg > 20
              ? "Sunny"
              : "Winter"
            : "Loading"}
        </div>
        <div>
          <p>Temperature</p>
          {weather
            ? weather.timelines.daily[0].values.temperatureAvg
            : "Loading..."}
        </div>
        <div>
          <p> Humidity</p>
          {weather
            ? weather.timelines.daily[0].values.humidityAvg
            : "Loading..."}
        </div>
        <div>
          <p>Wind</p>
          {weather
            ? weather.timelines.daily[0].values.windGustAvg
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
