import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./home.scss";
import MovieCards from "../MovieCards/MovieCards";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState([]);

  const nextPage = () => {
    setPage((next) => next + 1);
  };

  return (
    <> 
      <Header />
      <Banner data={data} setData={setData} />
      <SearchBar page={page} data={searchData} setData={setSearchData} />
      <MovieCards
        page={page}
        setPage={setPage}
        data={data}
        setData={setData}
        searchData={searchData}
        nextPage={nextPage}
      />
      <Footer nextPage={nextPage}/>
    </>
  );
};

export default Home;
