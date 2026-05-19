import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryCard = ({ country }) => {
  return (
    <li className="country-card container-card bg-white-box">
      <div className="img">
        <img src={country.flags.svg} alt={`${country.name}'s flag image`} />
      </div>
      <div className="country-details">
        <h3 className="card-title">
          {country.name.common.length > 10
            ? country.name.common.slice(0, 10) + "..."
            : country.name.common}
        </h3>
        <p>
          <span className="card-description">Population: </span>
          {country.population}
        </p>
        <p>
          <span className="card-description">Region: </span>
          {country.region}
        </p>
        <p>
          <span className="card-description">Capital: </span>
          {country.capital[0]}
        </p>
        <NavLink to={`/country/${country.name.common}`}>
          <button className="btn btn-darken btn-inline bg-white-box">
            Read More <FaLongArrowAltRight />
          </button>
        </NavLink>
      </div>
    </li>
  );
};
