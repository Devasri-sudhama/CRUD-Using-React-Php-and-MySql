import React from "react";
import "../../styles/main.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-md nav-bgcolor navbar-dark">
      <a className="navbar-brand" href="#">
      <p>
          <center>CRUD using React-Php-Mysql</center>
        </p>
      </a>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        
        <ul className="navbar-nav">
          {/* <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>     */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
