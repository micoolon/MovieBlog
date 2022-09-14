import React, { useContext } from "react";

function MoviePage() {
  return (
    <>
      <div className="mainPageHeader">
        <span className="siteTitle">Name of Movie</span>
        <span>
          <img
            className="moviePoster"
            src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
            alt="Movie Poster"
          ></img>
        </span>
        <br />
        <div>
          <h2>Description</h2>
          <p>This is the description of the movie</p>
        </div>
        <div>
          <h2>Cast</h2>
          <p>This is the cast of the movie</p>
        </div>
        <div>
          <h2>Review</h2>
          <p>This is the review of the movie</p>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
