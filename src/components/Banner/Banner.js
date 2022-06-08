import React, { useEffect, useState } from "react";
import "./banner.scss";

const Banner = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setData(data.results);
  };

  const renderData = data.map((item, index) => {
    return (
      <div className="banner-card-div" key={index}>
        <img
          className="banner-card"
          src={`https://image.tmdb.org/t/p/w500/${
            item.backdrop_path || item.poster_path
          }`}
          alt={item.title}
        />
        <div className="banner-body">
          {/* <h5 className="banner-title">{item.title}</h5>
          <p className="banner-text">{item.overview}</p> */}
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchApi();
  }, [page]);
  return (
    <div>
      {renderData[0]}
    </div>
  );
};

export default Banner;
