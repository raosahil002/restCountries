import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Country from "../component/Country";
import { FiSearch } from "react-icons/fi";

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleFilterChange = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios
        .get("https://restcountries.com/v3.1/all")
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
      setData(response.data);
    };

    getData();
  }, []);

  const displayedCountries = data.filter((country) =>
    country.name.common.toLowerCase().includes(name.toLowerCase())
  );

  const filteredCountries = region
    ? data.filter((country) => country.region === region)
    : data;

  const renderedCountries = name
    ? displayedCountries.map((country) => {
        return <Country country={country} key={nanoid()} />;
      })
    : filteredCountries.map((country) => {
        return <Country country={country} key={nanoid()} />;
      });

  return (
    <div className="home-container">
      <div className="home-utility-container">
        <div className="home-input">
          <FiSearch />
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Search for a country..."
          />
        </div>
        <select
          name="Filter by Region"
          value={region}
          onChange={handleFilterChange}
          className="home-select"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="home-country-container">
        {loading ? (
          <h1>Loading . . .</h1>
        ) : error ? (
          <h1>error</h1>
        ) : (
          renderedCountries
        )}
      </div>
    </div>
  );
}

export default HomePage;
