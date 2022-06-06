import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./home.scss";
import NavBar from "../Navbar/NavBar";
import MovieCards from "../MovieCards/MovieCards";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      {/* <NavBar /> */}
      <MovieCards />
    </>
  );
};

export default Home;
