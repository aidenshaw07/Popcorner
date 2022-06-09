import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./searchBar.scss";

const NavBar = (props) => {

  const [searchedData, setSearchedData] = useState('avengers');

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${props.searchValue}&page=1&include_adult=false`;
  // console.log(SEARCH_API)

  const searchApi = async (title) => {
    const response = await fetch(SEARCH_API);
    const movieData = await response.json()
    setSearchedData(movieData.results);
    // console.log(searchedData);  //i need to type input value in search bar
  };



  //   const renderSearchData = props.searchedData.map((item, index) => {
  //     return (
  //       <div className="divclass" key={index}>
  //         {/* <Link to={`/${item.id}`}>
  //           <img
  //             className="card"
  //             src={`https://image.tmdb.org/t/p/w500/${
  //               item.poster_path || item.backdrop_path
  //             }`}
  //             onError={(e) => {
  //               e.target.src =
  //                 "http://www.quickmeme.com/img/bd/bdb7ac37e00ff92776d0dead5171743db339c34a1f4f4c7293b3bde5ca960c79.jpg";
  //             }
  //             }
  //             alt={item.title}
  //           />
  //         </Link> */}
  //         <div className="card-title">
  //           <h5>{item.title}</h5>
  //         </div>
  //       </div>
  //     );
  //   }
  // );


  // useEffect(() => {
  //   searchApi();
  // }, [searchedData]);

  return (
    <div>
      <nav className="navbar">
        <input
          type="text"
          className="input"
          value={props.searchValue}
          onChange={(event) => {
            props.setSearchValue(event.target.value);
          }}
          placeholder="Search For A Movie"
        />
      </nav>
    </div>
  );
};

export default NavBar;
