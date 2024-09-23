import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <Link key={country.name.common} to={country.name.common} state={country}>
      <div className="country-container">
        <img src={country.flags.png} />
        <div className="country-detail">
          <h3 className="country-name">{country.name.common}</h3>
          <p className="detail"><span className="bold">Population: </span>{country.population}</p>
          <p className="detail"><span className="bold">Region: </span>{country.region}</p>
          <p className="detail capital"><span className="bold">Capital: </span>{country.capital}</p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
