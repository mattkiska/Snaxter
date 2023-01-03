import React from "react";
import { Link } from "react-router-dom";
import SnaxterLogo from "../assets/snaxterlogo.png";
import { useState } from "react";

function Header() {
  return (
    <div className="header">
      <h1 className="header-welcome">Welcome to Snaxter!</h1>
      <Link to="/">
        <img className="logo" src={SnaxterLogo} alt="Snaxter Logo" />
      </Link>
      <button>
        Cart
      </button>
    </div>
  );
}

export default Header;
