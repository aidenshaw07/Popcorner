import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import "./movieCards.scss";

const MovieCards = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const movie = await response.json();
    if(data.length >= 20) {
      setData([...data, ...movie.results]);
    } else {
      setData(movie.results);
    }
    console.log(movie.results);
  };

  const nextPage = () => {
    setPage((next) => next + 1);
  };

  const renderData = data.map((item, index) => {
    return (
      <div className="divclass" key={index}>
        <img
          className="card"
          src={`https://image.tmdb.org/t/p/w500/${
            item.poster_path || item.backdrop_path
          }`}
          alt={item.title}
        />
        <div className="card-title">
          <h5 >{item.title}</h5>
        </div>
      </div>
    );
  });

  // const noImage = () => {
  //   if(item.poster_path || item.backdrop_path === null) {
  //     return (
  //       <img src="src\components\MovieCards\error.jpg" alt="error" />
  //     );
  //   }
  // }

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
