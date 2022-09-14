import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div className="navbar">
      <>
        <Link className="navItem" to="/">
          Home
        </Link>
        <Link className="navItem" to="/Movie">
          Movie Page
        </Link>
      </>
    </div>
  );
}

export default Nav;
