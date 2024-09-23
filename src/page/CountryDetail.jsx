import { useLocation, Link } from "react-router-dom";

function CountryDetail() {
  const location = useLocation();
  const country = location.state;

  // NATIVE NAME
  const nativeNameEntry = Object.entries(country.name.nativeName);
  const nativeNameArray = nativeNameEntry.map(([key, value]) => ({
    name: value.common,
  }));
  const nativeName = nativeNameArray[0].name;

  // LANGUAGE
  const languages = Object.values(country.languages)
    .map(String)
    .map((item) => {
      return `${item}, `;
    });

  // CURRENCY
  const currencyEntry = Object.entries(country.currencies);
  const currencyArray = currencyEntry.map(([key, value]) => ({
    name: value.name,
  }));
  const currency = currencyArray.map((item) => {
    return item.name;
  });

  return (
    <div className="detail-main">
      <Link className="back-btn" to="..">
        &larr; <p>Back</p>
      </Link>
      <div className="detail-container">
        <div className="detail-img-container">
            <img src={country.flags.png} />
        </div>
        <div className="detail-sub-container">
          <h2 >{country.name.common}</h2>
          <div className="sub-detail">
            <div className="native">
              <p className="detail">
                <span className="bold">Native Name: </span>
                {nativeName}
              </p>
              <p className="detail">
                <span className="bold">Population: </span>
                {country.population}
              </p>
              <p className="detail">
                <span className="bold">Region: </span>
                {country.region}
              </p>
              <p className="detail">
                <span className="bold">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="detail">
                <span className="bold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="currency">
              <p className="detail">
                <span className="bold">Top Level Domain: </span>
                {country.tld}
              </p>
              <p className="detail">
                <span className="bold">Currencies: </span>
                {currency}
              </p>
              <p className="detail">
                <span className="bold">Languages: </span>
                {languages}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
