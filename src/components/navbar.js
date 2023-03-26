/* eslint-disable */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cookie from "react-cookies";
import { Link, Redirect } from "react-router-dom";
import image from "../logo.svg";
import "./navbar.css";
import "../splitwise.css";

class Navbar extends PureComponent {
  handleLogout = () => {
    cookie.remove("cookie", { path: "/" });
    localStorage.clear();
    <Redirect to="/" />;
  };

  render() {
    const islogin = localStorage.getItem("user")
    return (
      <>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#4CAF50" }}
        >
          <div className="navbar-brand mb-0 mt-0 h1">
            
            <h1 className="inline">
              <b>
                <a href="/home" style={{ color: "white", marginLeft : "180%" }}>
                🌾 Food Security Insights
                </a>
              </b>
            </h1>
          </div>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <ul
            className="nav nav-menu ml-auto"
            style={{ listStyleType: "none" }}
          >
            {/* {this.getLoginTabs()} */}
            {<li className="nav-item">
              <a className="nav-link text-white" href="/home" role="button">                
                <h4 className="customLink"> 🏠 Home</h4>
              </a>
            </li>}

          </ul>
        </nav>
      </>
    );
  }
}

Navbar.defaultProps = {
  colour: "5BC5A7",
  textColour: "FFFFFF",
};

export default Navbar;