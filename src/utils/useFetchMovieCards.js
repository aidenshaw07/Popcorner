import { useState, useEffect } from "react";
import { UPCOMING_BASE_URL } from "../config";

const useFetchMovieCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // console.log(loading);
  const nextPage = () => {
    setPage((next) => next + 1);
  };

  const API_URL = `${UPCOMING_BASE_URL}${page}`;

  const fetchApi = async () => {
    try {
      const response = await fetch(API_URL);
      const movie = await response.json();
      setData([...data, ...movie.results]);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, setData, nextPage, page };
};

export default useFetchMovieCards;
