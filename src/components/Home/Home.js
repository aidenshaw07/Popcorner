import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./home.scss";
import NavBar from "../Navbar/NavBar";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
    </>
  );
};

export default Home;
