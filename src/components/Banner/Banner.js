import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./banner.scss";

const Banner = (props) => {
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${props.page}`;

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    props.setData(data.results);
  };

  // const renderData = props.data.map((item, index) => {
  //   return (
  //     <div className="banner-card-div" key={index}>
  //       <img
  //         className="banner-card"
  //         src={`https://image.tmdb.org/t/p/w500/${
  //           item.backdrop_path}`}
  //         alt={item.title}
  //       />
  //       {/* <div className="banner-body">
  //         <h1 className="banner-text">{item.title}</h1>
  //         <h3 className="banner-text">{item.overview}</h3>
  //       </div> */}
  //     </div>
  //   );
  // });

  useEffect(() => {
    fetchApi();
  }, [props.page]);
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500/${props.data[0]?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.data[0]?.title}</h3>
            <h4>{props.data[0]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500/${props.data[1]?.backdrop_path}`}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{props.data[1]?.title}</h3>
            <h4>{props.data[1]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500/${props.data[2]?.backdrop_path}`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{props.data[2]?.title}</h3>
            <h4>{props.data[2]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500/${props.data[3]?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.data[3]?.title}</h3>
            <h4>{props.data[3]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500/${props.data[4]?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.data[4]?.title}</h3>
            <h4>{props.data[4]?.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
