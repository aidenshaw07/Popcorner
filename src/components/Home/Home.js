import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./home.scss";
import MovieCards from "../MovieCards/MovieCards";
import NavBar from "../Navbar/NavBar";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <NavBar />
      <MovieCards />
    </>
  );
};

export default Home;
