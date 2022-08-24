import ForecastHour from "./ForecastHour";
import ForecastDay from "./ForecastDay";
import { useState } from "react";

export default function Forecast() {
  const [today, setToday] = useState(true);
  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const days = [0, 1, 2, 3, 4, 5, 6];
  const date = new Date();
  let hour = date.getHours() + 1;
  let day = date.getDay();
  return (
    <div>
      <button className="label label1" onClick={() => setToday(false)}>
        Next Days
      </button>
      <button className="label" onClick={() => setToday(true)}>
        Next Hours
      </button>
      <div className="forecast">
        <div className="forecast-flex">
          {today
            ? hours.map((h) => <ForecastHour key={h} hour={hour++} h={h} />)
            : days.map((d) => <ForecastDay key={d} day={day++} d={d} />)}
        </div>
      </div>
    </div>
  );
}
