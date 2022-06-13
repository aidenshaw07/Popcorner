import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./banner.scss";

const Banner = ({ data, setData, page }) => {
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchApi();
  }, [page]);
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280/${data[0]?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data[0]?.title}</h3>
            <h4>{data[0]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280/${data[1]?.backdrop_path}`}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{data[1]?.title}</h3>
            <h4>{data[1]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280/${data[2]?.backdrop_path}`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{data[2]?.title}</h3>
            <h4>{data[2]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280/${data[3]?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data[3]?.title}</h3>
            <h4>{data[3]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280/${data[4]?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data[4]?.title}</h3>
            <h4>{data[4]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
