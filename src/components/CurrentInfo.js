import { useContext } from "react";
import { weatherContext } from "../App";

export default function CurrentInfo() {
  const weather = useContext(weatherContext);
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="currentInfo">
      <span className="clocation">
        {weather.place}
        <br></br>
      </span>
      <span className="cdayhour">
        {days[date.getDay()]} <br></br>{" "}
        {weather.degree_unit === "°C"
          ? `${date.getDate().toString().padStart(2, 0)}/${date
              .getMonth()
              .toString()
              .padStart(2, 0)}/${date.getFullYear()}`
          : `${date.getMonth().toString().padStart(2, 0)}/${date
              .getDate()
              .toString()
              .padStart(2, 0)}/${date.getFullYear()}`}
        &nbsp;&nbsp;&nbsp;
        {date.getHours().toString().padStart(2, 0)}:
        {date.getMinutes().toString().padStart(2, 0)}
        <br></br>
      </span>
      <span className="cweather">
        {weather.currentWeather} <br></br>
      </span>
      <div className="ctemp-flex">
        <span className="ctemp">
          {Math.round(weather.temperature)}
          {weather.degree_unit}&nbsp;&nbsp;
        </span>
        {weather.currentWeatherI}
      </div>
    </div>
  );
}
