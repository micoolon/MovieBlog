// import React, { useContext } from "react";

// function MoviePage() {
//   return (
//     <>
// <div className="mainPageHeader">
//   <span className="siteTitle">Name of Movie</span>
//   <span>
//     <img
//       className="moviePoster"
//       src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
//       alt="Movie Poster"
//     ></img>
//   </span>
//   <br />
//   <div>
//     <h2>Description</h2>
//     <p>This is the description of the movie</p>
//   </div>
//   <div>
//     <h2>Cast</h2>
//     <p>This is the cast of the movie</p>
//   </div>
//   <div>
//     <h2>Review</h2>
//     <p>This is the review of the movie</p>
//   </div>
// </div>
//     </>
//   );
// }

// export default MoviePage;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import AppContext from "../context/AppContext";
// const axios = require("axios").default;
import axios from "axios";

function MoviePage() {
  // const appContext = useContext(AppContext);
  // const user = appContext.user;
  // const setUser = appContext.setUser;
  // const setPetToEdit = appContext.setPetToEdit;
  const [errorMessage, setErrorMessage] = useState();
  const [currentMovie, setCurrentMovie] = useState();
  // const [editOpened, setEditOpened] = useState(false);
  let { id } = useParams();

  // const handleReturn = async () => {
  //   setErrorMessage(undefined);
  //   const result = await axios
  //     .put(`http://localhost:4000/pet/${id}/return`, user.id, {
  //       headers: {
  //         Authorization: "Bearer " + user.token,
  //         id: user.id,
  //       },
  //     })
  //     .then((response) => {
  //       const data = response.data;
  //       return data;
  //     })
  //     .catch((error) => {
  //       return error.response.data;
  //     });
  //   if (typeof result === "string") {
  //     setErrorMessage(result);
  //   } else {
  //     setErrorMessage("Pet Returned Successfully");
  //     getPet();
  //   }
  // };

  const getMovie = () => {
    axios.get(`http://localhost:4000/movie/${id}`).then((response) => {
      if (response.data.length === 0) {
        setErrorMessage("No Movie Found!");
        console.log("Nope");
      } else {
        setCurrentMovie(...response.data);
        console.log(...response.data);
      }
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    if (currentMovie) {
      console.log(currentMovie);
    }
  }, [currentMovie]);

  return (
    <>
      {currentMovie && (
        <>
          <div className="mainPageHeader">
            <h1 className="siteTitle">
              {currentMovie.name.charAt(0).toUpperCase() +
                currentMovie.name.slice(1)}
            </h1>
            <span>
              <img
                className="moviePoster"
                src={currentMovie.posterUrl}
                alt="Movie Poster"
              ></img>
            </span>
            <br />
            <div>
              <h2>Description</h2>
              <p>{currentMovie.description}</p>
            </div>
            <div>
              <h2>Cast</h2>
              <p>{currentMovie.cast}</p>
            </div>
            <div>
              <h2>Review</h2>
              <p>{currentMovie.review}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MoviePage;
