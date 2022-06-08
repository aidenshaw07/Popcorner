import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import "./movieCards.scss";
import { Link, Route, Routes, useParams } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
import MovieCardsDetails from "../MovieCardsDetails/MovieCardsDetails";

const MovieCards = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const movies = useParams();
  console.log(data)
  

  

  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

  const SEARCH_API = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

  // `https://api.themoviedb.org/3/movie/${searchValue}?api_key=e1976db05fc177e4395e16088185d3fd&language=en-US`;

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const movie = await response.json();
    if (data.length >= 20) {
      setData([...data, ...movie.results]);
    } else {
      setData(movie.results);
    }
  };

  // const searchApi = async () => {
  //   const response = await fetch(SEARCH_API);
  //   const movie = await response.json();
  // };

  const nextPage = () => {
    setPage((next) => next + 1);
  };

  const renderData = data.map((item, index) => {
    return (
      <div className="divclass" key={index}>
        <Link to={`/${item.id}`}>
          <img
            className="card"
            src={`https://image.tmdb.org/t/p/w500/${
              item.poster_path || item.backdrop_path
            }`}
            onError={(e) => {
              e.target.src =
                "http://www.quickmeme.com/img/bd/bdb7ac37e00ff92776d0dead5171743db339c34a1f4f4c7293b3bde5ca960c79.jpg";
            }}
            alt={item.title}
          />
          </Link>
        <div className="card-title">
          <h5>{item.title}</h5>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchApi();
  }, [page]);

  return (

      <div>
        <div className="moviecards">{renderData}</div>
        <Footer nextPage={nextPage} />
      </div>

  );
};

export default MovieCards;
