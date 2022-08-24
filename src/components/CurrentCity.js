import CurrentInfo from "./CurrentInfo";
import CurrentWeather from "./CurrentWeather";

export default function CurrentCity() {
  return (
    <div className="currentCity">
      <CurrentInfo />
      <CurrentWeather />
    </div>
  );
}
