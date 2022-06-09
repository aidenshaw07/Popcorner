import React, { useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import "./movieCards.scss";
import { Link } from "react-router-dom";

const MovieCards = (props) => {
  // const isMounted = useRef(false);
  // console.log(props.data);

  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${props.page}`;

  const fetchApi = async () => {
    const response = await fetch(API_URL);
    const movie = await response.json();
    // console.log(movie);
    props.setData([...props.data, ...movie.results]);
  };

  const nextPage = () => {
    props.setPage((next) => next + 1);
  };

  const renderData = props.data.map((item, index) => {
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
    return () => {
      console.log("unmount");
      props.setData([]);
    }
  }, [props.page]);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     fetchApi()
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [props.page]);

  return (
    <div>
      <div className="moviecards">{renderData}</div>
      <Footer nextPage={nextPage} />
    </div>
  );
};

export default MovieCards;
