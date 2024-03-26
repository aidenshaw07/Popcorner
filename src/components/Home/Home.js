import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./home.scss";
import MovieCards from "../MovieCards/MovieCards";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import useFetchMovieCards from "../../utils/useFetchMovieCards";
import { LoadingOverlay } from "../Loading/Loading";

const Home = () => {
  const [searchData, setSearchData] = useState([]);

  const fetchedData = useFetchMovieCards();

  const { data, loading, setData, nextPage, page } = fetchedData;

  if (loading) return <LoadingOverlay show={loading} />;

  return (
    <>
      <Header />
      <Banner data={data} setData={setData} page={page} />
      <SearchBar data={searchData} setData={setSearchData} />
      <MovieCards data={data} setData={setData} searchData={searchData} />
      <Footer nextPage={nextPage} />
    </>
  );
};

export default Home;
