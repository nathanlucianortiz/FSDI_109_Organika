import React, { Component } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About me
              </Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-warning my-2 my-sm-0" to="/cart">
              <i className="fa fa-shopping-cart">
                <p>View Cart</p>
              </i>
            </Link>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
