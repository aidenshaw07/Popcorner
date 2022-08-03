import React, { useState, useEffect } from "react";
import { MOVIE_BASE_URL } from "../../config";
import "./trailer.scss"

const Trailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState([]);

  const TRAILER_API = `${MOVIE_BASE_URL}${movieId}/videos?api_key=e1976db05fc177e4395e16088185d3fd&language=en-US`;

  const fetchApiTrailer = async () => {
    const response = await fetch(TRAILER_API);
    const movieTrailer = await response.json();
    setTrailer(movieTrailer.results[0].key);
  };

  useEffect(() => {
    fetchApiTrailer();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="trailer-box" id="trailer">
      <iframe
        src={`https://www.youtube.com/embed/${trailer}`}
        height="300" width="650"
        allowFullScreen = {true}
        title="video"
        className="trailer-iframe" id="trailer-iframe"
      />
    </div>
  );
};

export default Trailer;
