import React, { useState, useEffect } from "react";
import { MOVIE_BASE_URL } from "../../config";
import "./trailer.scss"

const Trailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState([]);

  const TRAILER_API = `${MOVIE_BASE_URL}${movieId.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const fetchApiTrailer = async () => {
    const response = await fetch(TRAILER_API);
    const movieTrailer = await response.json();
    setTrailer(movieTrailer.results[0].key);
  };

  useEffect(() => {
    fetchApiTrailer();
  }, []);

  return (
    <div className="trailer-box">
      <iframe
        src={`https://www.youtube.com/embed/${trailer}`}
        height="300" width="600"
        allowFullScreen = {true}
        title="video"
      />{" "}
    </div>
  );
};

export default Trailer;
