import { useContext } from "react";
import { weatherContext } from "../App";

export default function ForecastDay({ day, d }) {
  const weather = useContext(weatherContext);
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
    <div style={{ fontSize: "0.8rem" }}>
      {days[day % 7]}
      {weather.daily_weather_icon[d]}
      {`${Math.round(weather.temperature_2m_min[d])} ${weather.degree_unit}`}
      <br></br>
      {`${Math.round(weather.temperature_2m_max[d])} ${weather.degree_unit}`}
    </div>
  );
}
