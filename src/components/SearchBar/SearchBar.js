import React, { useState, useEffect } from "react";
import "./searchBar.scss";

const NavBar = (props) => {
  const SEARCH_API = `http://www.omdbapi.com/?s=${props.searchValue}&apikey=263d22d8`;
  console.log(SEARCH_API)

  const searchApi = async (title) => {
    const response = await fetch(SEARCH_API);
    const movieData = await response.json();
      // console.log(movieData.Search);  //i need to type input value in search bar
  };

  // useEffect(() => {
  //   searchApi();
  // }, []);



  return (
    <div>
      <nav className="navbar">
        <input
          type="text"
          className="input"
          value={props.searchValue}
          onChange={(event) => {props.setSearchValue(event.target.value)}}
          placeholder="Search For A Movie"
        />
      </nav>
    </div>
  );
};

export default NavBar;
