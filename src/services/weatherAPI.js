import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloudSun,
  faCloud,
  faSmog,
  faCloudRain,
  faSnowflake,
  faCloudBolt,
} from "@fortawesome/free-solid-svg-icons";

const date = new Date();
const hour = date.getHours();

const SearchForWeather = async (metric, city, c, p) => {
  console.log(c);
  let coords;
  let place;
  const location = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );
  const results = await location.json();
  if (
    results.results &&
    city.toLowerCase() === results.results[0].name.toLowerCase()
  ) {
    coords = `latitude=${results.results[0].latitude}&longitude=${results.results[0].longitude}`;
    place = results.results[0].name;
  } else {
    alert("Input doesn't match a city");
    coords = c;
    place = p;
  }

  const degree_unit = metric ? "°C" : "°F";
  const speed_unit = metric ? "km/h" : "Mph";

  const degree = metric
    ? ""
    : "&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch";

  const BASE_URL = `https://api.open-meteo.com/v1/forecast?${coords}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true${degree}&timezone=auto`;

  const url = new URL(BASE_URL);
  const wCode = [
    "Clear Sky",
    "Partly Cloudy",
    "Overcast",
    "Fog",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  const wIcon = [
    <FontAwesomeIcon icon={faSun} size="lg" />,
    <FontAwesomeIcon icon={faCloudSun} size="lg" />,
    <FontAwesomeIcon icon={faCloud} size="lg" />,
    <FontAwesomeIcon icon={faSmog} size="lg" />,
    <FontAwesomeIcon icon={faCloudRain} size="lg" />,
    <FontAwesomeIcon icon={faSnowflake} size="lg" />,
    <FontAwesomeIcon icon={faCloudBolt} size="lg" />,
  ];

  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  let {
    current_weather: {
      temperature,
      windspeed,
      weathercode: currentWeathercode,
    },
    hourly: {
      temperature_2m,
      relativehumidity_2m,
      apparent_temperature,
      weathercode,
    },
    daily: {
      weathercode: dailyWeathercode,
      temperature_2m_max,
      temperature_2m_min,
      sunrise,
      sunset,
    },
  } = data;

  let currentWeather;
  let currentWeatherI;

  switch (currentWeathercode) {
    case 0:
    case 1:
      currentWeather = wCode[0];
      currentWeatherI = wIcon[0];
      break;
    case 2:
      currentWeather = wCode[1];
      currentWeatherI = wIcon[1];
      break;
    case 3:
      currentWeather = wCode[2];
      currentWeatherI = wIcon[2];
      break;
    case 45:
    case 48:
      currentWeather = wCode[3];
      currentWeatherI = wIcon[3];
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      currentWeather = wCode[4];
      currentWeatherI = wIcon[4];
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      currentWeather = wCode[5];
      currentWeatherI = wIcon[5];
      break;
    case 95:
    case 96:
    case 99:
      currentWeather = wCode[6];
      currentWeatherI = wIcon[6];
      break;
    default:
      break;
  }

  temperature_2m = temperature_2m.splice(hour + 1, 10);
  relativehumidity_2m = relativehumidity_2m[hour];
  apparent_temperature = apparent_temperature[hour];
  weathercode = weathercode.splice(hour + 1, 10);

  const hourly_weather_icon = weathercode.map((w) => {
    switch (w) {
      case 0:
      case 1:
        return wIcon[0];
      case 2:
        return wIcon[1];
      case 3:
        return wIcon[2];
      case 45:
      case 48:
        return wIcon[3];
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 80:
      case 81:
      case 82:
        return wIcon[4];
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return wIcon[5];
      case 95:
      case 96:
      case 99:
        return wIcon[6];
      default:
        return w;
    }
  });

  const daily_weather_icon = dailyWeathercode.map((w) => {
    switch (w) {
      case 0:
      case 1:
        return wIcon[0];
      case 2:
        return wIcon[1];
      case 3:
        return wIcon[2];
      case 45:
      case 48:
        return wIcon[3];
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 80:
      case 81:
      case 82:
        return wIcon[4];
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return wIcon[5];
      case 95:
      case 96:
      case 99:
        return wIcon[6];
      default:
        return w;
    }
  });
  sunrise = sunrise[0];
  sunset = sunset[0];

  const threshold = metric ? 20 : 60;
  let bc =
    temperature < threshold
      ? `rgb(37, 175, 255), rgb(0, 47, 255)`
      : `rgb(253, 183, 53), rgb(255, 115, 0)`;

  return {
    temperature,
    windspeed,
    currentWeather,
    currentWeatherI,
    temperature_2m,
    relativehumidity_2m,
    apparent_temperature,
    hourly_weather_icon,
    daily_weather_icon,
    temperature_2m_max,
    temperature_2m_min,
    sunrise,
    sunset,
    degree_unit,
    speed_unit,
    place,
    coords,
    bc,
  };
};

export default SearchForWeather;
