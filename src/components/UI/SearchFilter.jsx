export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const handleSort = (val) => {
    const sortCountries = [...countries].sort((a, b) => {
      return val === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountries);
  };

  return (
    <div className="section-searchFilter padded-container">
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
        className="select-section"
        id="search"
      />
      <button
        id="asc-btn"
        className="zero-margin-btn"
        onClick={() => handleSort("asc")}
      >
        Asc
      </button>
      <button
        id="desc-btn"
        className="zero-margin-btn"
        onClick={() => handleSort("dec")}
      >
        Desc
      </button>
      <label id="select" htmlFor="category">
        <select
          name="continentCategory"
          id="category"
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="All">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </div>
  );
};
