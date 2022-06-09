import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import MovieCardsDetails from "./components/MovieCardsDetails/MovieCardsDetails";

const App = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            page={page}
            setPage={setPage}
            data={data}
            setData={setData}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        }
      />
      <Route
        path="/:movieId"
        element={<MovieCardsDetails setPage={setPage} data={data} setData={setData} />}
      />
      {/* <Route path="/*"  element={<Home />} /> */}
    </Routes>
  );
};

export default App;
