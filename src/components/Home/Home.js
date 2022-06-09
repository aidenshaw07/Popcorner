import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./home.scss";
import MovieCards from "../MovieCards/MovieCards";
import NavBar from "../SearchBar/SearchBar";

const Home = (props) => {
  return (
    <>
      <Header />
      <Banner />
      <NavBar data={props.data} setData={props.setData} searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
      <MovieCards page={props.page} setPage={props.setPage} data={props.data} setData={props.setData}/>
    </>
  );
};

export default Home;
