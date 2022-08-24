import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faDroplet,
  faWind,
  faSun,
  faMoon,
  faTemperatureFull,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { weatherContext } from "../App";

export default function CurrentWeather() {
  const weather = useContext(weatherContext);

  const sunrise = () => {
    const sr = new Date(weather.sunrise);
    return `${sr.getHours().toString().padStart(2, 0)}:${sr
      .getMinutes()
      .toString()
      .padStart(2, 0)}`;
  };

  const sunset = () => {
    const sr = new Date(weather.sunset);
    return `${sr.getHours().toString().padStart(2, 0)}:${sr
      .getMinutes()
      .toString()
      .padStart(2, 0)}`;
  };

  return (
    <div className="currentWeather">
      <div className="cweather-flex">
        <FontAwesomeIcon icon={faTemperatureLow} />
        Feel:
        <span>
          {Math.round(weather.apparent_temperature)} {weather.degree_unit}
        </span>
      </div>
      <div className="cweather-flex">
        <FontAwesomeIcon icon={faDroplet} />
        Humidity:
        <span>{weather.relativehumidity_2m} %</span>
      </div>
      <div className="cweather-flex">
        <FontAwesomeIcon icon={faWind} />
        Wind:
        <span>
          {weather.windspeed} {weather.speed_unit}
        </span>
      </div>
      <div className="cweather-flex">
        <FontAwesomeIcon icon={faSun} />
        Rise:
        <span>&nbsp;{sunrise()}</span>
        <FontAwesomeIcon icon={faMoon} />
        Fall:
        <span>&nbsp;{sunset()}</span>
      </div>
      <div className="cweather-flex">
        <FontAwesomeIcon icon={faTemperatureFull} />
        High:
        <span>
          {Math.round(weather.temperature_2m_max[0])} {weather.degree_unit}
          &nbsp;
        </span>
        <FontAwesomeIcon icon={faTemperatureLow} />
        Low:
        <span>
          {Math.round(weather.temperature_2m_min[0])} {weather.degree_unit}
        </span>
      </div>
    </div>
  );
}
