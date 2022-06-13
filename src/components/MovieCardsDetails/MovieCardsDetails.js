import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./movieCardsDetails.scss";

const MovieCardsDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [cast, setCast] = useState([]);
  const [page, setPage] = useState(1);

  const movieId = useParams();
  const DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const CREDITS_API = `https://api.themoviedb.org/3/movie/${movieId.movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;



  const fetchApiDetails = async () => {
    const response = await fetch(DETAILS_API);
    const details = await response.json();
    setMovieDetails(details);
  };

  const fetchApiCast = async () => {
    const response = await fetch(CREDITS_API);
    const cast = await response.json();
    setCast(cast.cast);
  };

  const renderCast = cast.map((item, index) => {
    return (
      <div className="cast-div" key={index}>
        <img
          className="cast-img"
          src={`https://image.tmdb.org/t/p/w1280/${item.profile_path}`}
          onError={(e) => {
            e.target.src =
              "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg";
          }}
          alt={item.name}
        />
        <div className="cast-name">
          <h3>{item.name}</h3>
          <h4>{item.character}</h4>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchApiDetails();
    fetchApiCast();
    return () => {
      setPage(1);
    };
  }, [page]);

  return (
    <div>
      <Header />
      <div className="mcd-div">
        <div className="mcd-div-img">
          <img
            className="mcd-img"
            src={`https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`}
            onError={(e) => {
              e.target.src =
                "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg";
            }}
            alt={movieDetails.title}
          />
        </div>
        <div className="mcd-details">
          <h1>{movieDetails.original_title}</h1>
          <h3>({movieDetails.title})</h3>
          <h2 className="mcd-h2">{movieDetails.overview}</h2>
          <h3 className="mcd-h3">Budget : {movieDetails.budget}</h3>
          <h3 className="mcd-h3">Release Date : {movieDetails.release_date}</h3>
          <h3 className="mcd-h3">Runtime : {movieDetails.runtime} minutes</h3>
          <h3 className="mcd-h3">Rating : {movieDetails.vote_average}</h3>
          <div className="moviecardsdetails">{renderCast}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardsDetails;
