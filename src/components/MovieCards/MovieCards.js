import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

const MovieCards = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState([]);

  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

  console.log(API_URL);

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setData(data.results);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const renderData = data.map((item, index) => {
    return (
      <div key={index}>
        <img
          className="card"
          src={`https://image.tmdb.org/t/p/w500/${
            item.backdrop_path || item.poster_path
          }`}
          alt={item.title}
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.overview}</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchApi();
  }, [page]);

  return (
    <div>
      {renderData}
      <Footer nextPage={nextPage} />
    </div>
  );
};

export default MovieCards;
