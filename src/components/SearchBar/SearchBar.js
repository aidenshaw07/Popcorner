import React, { useState, useEffect } from "react";
import "./searchBar.scss";

const NavBar = ({ setData }) => {
  const [searchValue, setSearchValue] = useState(undefined);

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`;

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
      <nav className="navbar">
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

export default NavBar;
