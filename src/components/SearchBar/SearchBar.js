import React, { useState, useEffect } from "react";
import "./searchBar.scss";
import { SEARCH_BASE_URL } from "../../config";

const SearchBar = ({ setData }) => {
  const [searchValue, setSearchValue] = useState(undefined);

  const SEARCH_API = `${SEARCH_BASE_URL}${searchValue}&page=1&include_adult=false`;

  const searchApi = async () => {
    const response = await fetch(SEARCH_API);
    const movieData = await response.json();
    setData(movieData.results);
  };

  useEffect(() => {
    searchApi();
  }, [searchValue]);

  return (
    <div>
      <nav className="searchBar">
        <input
          type="text"
          className="input"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Search For A Movie"
        />
      </nav>
    </div>
  );
};

export default SearchBar;
