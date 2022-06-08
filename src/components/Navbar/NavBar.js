import React, { useState, useEffect } from "react";
import "./navbar.scss";

const NavBar = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const SEARCH_API = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

  const searchApi = async () => {
    const response = await fetch(SEARCH_API);
    const movie = await response.json();
    setData(movie.Search);
     console.log(movie.Search);
  };

  useEffect(() => {
    searchApi();
  }, [searchValue]);



  return (
    <div>
      {/* <p>{firstMatch.Title}</p> */}
      <nav className="navbar">
        <input
          type="text"
          className="input"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search For A Movie"
        />
      </nav>
    </div>
  );
};

export default NavBar;
