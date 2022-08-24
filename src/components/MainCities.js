export default function MainCities({ setCity }) {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "New York" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "Athens" },
    { id: 5, name: "Sydney" },
  ];

  return (
    <div className="menu">
      {cities.map((city) => {
        return (
          <button key={city.id} onClick={() => setCity(city.name)}>
            {city.name}
          </button>
        );
      })}
    </div>
  );
}
