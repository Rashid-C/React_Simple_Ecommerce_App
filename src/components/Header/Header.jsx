import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 className="header">Mens Mall</h1>
      </Link>
      <Link to="/logout">
        <button className="logout-btn">Log out</button>
      </Link>
    </header>
  );
}

export default Header;
