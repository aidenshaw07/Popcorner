import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./home.scss";
import MovieCards from "../MovieCards/MovieCards";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState([]);

  return (
    <> 
      <Header />
      <Banner data={data} setData={setData} />
      <SearchBar setData={setSearchData} />
      <MovieCards
        page={page}
        setPage={setPage}
        data={data}
        setData={setData}
        searchData={searchData}
      />
    </>
  );
};

export default Home;
