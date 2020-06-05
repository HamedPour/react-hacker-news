import React from "react";
import "./HeadNav.css";

const HeadNav = () => {
  return (
    <div className="topNav">
      <nav className="navbar navbar-light">
        <div className="navbar-brand nav-logo">
          <span>H</span>
        </div>
        <h1 className="navbar-headline">Search Hacker News</h1>

        <form className="searchBar">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

export default HeadNav;
