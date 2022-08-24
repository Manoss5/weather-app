import { useState, useEffect, createContext } from "react";
import MainCities from "./components/MainCities";
import Search from "./components/Search";
import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import SearchForWeather from "./services/weatherAPI";

export const weatherContext = createContext();

function App() {
  const [weather, setWeather] = useState({});
  const [metric, setMetric] = useState(true);
  const [city, setCity] = useState("Athens");

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await SearchForWeather(
        metric,
        city,
        weather.coords,
        weather.place
      );
      setWeather(weatherData);
    };
    fetchWeather();
  }, [metric, city]);

  return (
    weather.apparent_temperature && (
      <weatherContext.Provider value={weather}>
        <div
          className="App"
          style={{ background: `linear-gradient(to right, ${weather.bc})` }}
        >
          <MainCities setCity={setCity} />
          <Search setMetric={setMetric} setCity={setCity} />
          <CurrentCity />
          <Forecast />
          <div className="creditDiv">
            <div>
              <span className="credit1">Attribution: </span>
              <a className="credit" href="https://open-meteo.com/">
                Weather data by Open-Meteo.com
              </a>
            </div>
            <div>
              <span className="credit1">API data are offered under: </span>
              <a
                className="credit"
                href="https://creativecommons.org/licenses/by-nc/4.0/"
              >
                Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
              </a>
            </div>
          </div>
        </div>
      </weatherContext.Provider>
    )
  );
}

export default App;
