import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MOVIE_BASE_URL } from "../../config";
import Header from "../Header/Header";
import Trailer from "../Trailer/Trailer";
import "./movieCardsDetails.scss";

const MovieCardsDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [page, setPage] = useState(1);

  const { movieId } = useParams();

  const DETAILS_API = `${MOVIE_BASE_URL}${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const CREDITS_API = `${MOVIE_BASE_URL}${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const fetchApiDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(DETAILS_API);
      const movie = await response.json();
      setMovieDetails(movie);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(movieDetails);
    }
  };

  const fetchApiCast = async () => {
    try {
      setLoading(true);
      const response = await fetch(CREDITS_API);
      const cast = await response.json();
      setCast(cast.cast);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(cast);
    }
  };

  const renderCast = cast.map((item, index) => {
    
    return (
      <div className="cast-div" key={index}>
        <img
          className="cast-img"
          src={`https://image.tmdb.org/t/p/w1280/${item?.profile_path}`}
          onError={(e) => {
            e.target.src = "https://i.imgur.com/oUESttn.jpg";
          }}
          alt={item.name}
        />
        <div className="cast-name">
          <h3>{item.name}</h3>
          <h5>{item.character}</h5>
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
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) return <div className="fallback">Loading...</div>;

  return (
    <>
      <Header />
      <div
        style={
          movieDetails.backdrop_path === null
            ? {
                backgroundImage: `url(https://i.imgur.com/8oVv3A8.png)`,
              }
            : {
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path})`,
              }
        }
        className="container-details"
      >
        <div className="mcd" id="movie-overview">
          <h4>{movieDetails.title}</h4>
          <h6>{movieDetails.overview}</h6>
        </div>
        <div className="trailer">
          <div>
            <h3 id="my-content" className="mcd-h3">
              Budget : ${movieDetails.budget}
            </h3>
            <h3 id="my-content" className="mcd-h3">
              Release Date : {movieDetails.release_date}
            </h3>
            <h3 id="my-content" className="mcd-h3">
              Runtime : {movieDetails.runtime} minutes
            </h3>
            <h3 id="my-content" className="mcd-h3">
              Rating : {movieDetails.vote_average}
            </h3>
          </div>
          <div>
            <Trailer movieId={movieId} />
          </div>
        </div>
      </div>
      <h1 className="cast-movie" id="cast-of-the-movie">
        Cast of the Movie
      </h1>
      <div className="moviecardsdetails">{renderCast}</div>
    </>
  );
};

export default MovieCardsDetails;
