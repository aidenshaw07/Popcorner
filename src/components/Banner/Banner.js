import React, { useEffect } from "react";
import "./banner.scss";

const Banner = (props) => {
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${props.page}`;

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    props.setData(data.results);
  };

  const renderData = props.data.map((item, index) => {
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
          <h1 className="banner-text">{item.title}</h1>
          <h3 className="banner-text">{item.overview}</h3>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchApi();
  }, [props.page]);
  return <div>{renderData[0]}</div>;
};

export default Banner;
