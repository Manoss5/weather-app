import { useContext } from "react";
import { weatherContext } from "../App";

export default function ForecastHour({ hour, h }) {
  const weather = useContext(weatherContext);
  return (
    <div>
      {(hour % 24).toString().padStart(2, 0)}:00
      {weather.hourly_weather_icon[h]}
      {Math.round(weather.temperature_2m[h])} {weather.degree_unit}
    </div>
  );
}
