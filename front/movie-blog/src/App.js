import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MoviePage from "./Components/MoviePage";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Movie" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
