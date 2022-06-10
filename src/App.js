import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieCardsDetails from "./components/MovieCardsDetails/MovieCardsDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieCardsDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
