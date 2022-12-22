import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navcolo">
          <div className="container-fluid ">
            <a className="navbar-brand text-white" href="#">
              VesNews
            </a>
            <button
              className="navbar-toggler boxcolo"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/sport">
                    Sport
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/techonology">
                    Techonology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
