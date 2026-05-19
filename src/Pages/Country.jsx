import { startTransition, useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../api/countryDataApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountriesData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterCountry = (country) => {
    if (filter === "All") return country;
    return country.region === filter;
  };

  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterCountry(country),
  );

  return (
    <>
      <div className="container country-section">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />

        <ul className="grid grid-three-cols padded-container">
          {filteredCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};
