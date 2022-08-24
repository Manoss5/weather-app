import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({ setMetric, setCity }) {
  const [location, setLocation] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setCity(location);
      setLocation("");
    }
  };
  return (
    <div className="search">
      <div className="searchBar">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="sm"
          className="searchIcon"
        />
        <input
          type="text"
          placeholder="search for a city..."
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={handleSearch}
        ></input>
      </div>
      <div>
        <button onClick={() => setMetric(true)}>°C</button>
        <button onClick={() => setMetric(false)}>°F</button>
      </div>
    </div>
  );
}
