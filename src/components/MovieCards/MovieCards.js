import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { UPCOMING_BASE_URL } from "../../config";
import "./movieCards.scss";

const MovieCards = ({ data, setData, page, searchData, nextPage }) => {
  const API_URL = `${UPCOMING_BASE_URL}${page}`;

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const movie = await response.json();
    setData([...data, ...movie.results]);
  };
  const whichData = searchData?.length > 2 ? searchData : data;

  const renderData = whichData.map((item, index) => {
    return (
      <div className="movie-cards-info" key={index}>
        <Link to={`/${item.id}`}>
          <img
            className="card"
            src={`https://image.tmdb.org/t/p/w1280/${
              item?.poster_path || item?.backdrop_path
            }`}
            onError={(e) => {
              e.target.src =
                "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg";
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
      <h1 className="upcoming-movies">Upcoming Movies</h1>
      <div className="moviecards">{renderData}</div>
    </div>
  );
};

export default MovieCards;
