import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import MovieCardsDetails from "./components/MovieCardsDetails/MovieCardsDetails";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:movieId" element={<MovieCardsDetails />} />
    {/* <Route path="/*"  element={<Home />} /> */}
  </Routes>
);

export default App;
