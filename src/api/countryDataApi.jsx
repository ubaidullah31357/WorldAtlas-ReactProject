import axios from "axios";

const countryDataApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountriesData = () => {
  return countryDataApi.get("/all?fields=name,population,region,capital,flags");
};

export const getIndCountryData = (name) => {
  return countryDataApi.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`,
  );
};
