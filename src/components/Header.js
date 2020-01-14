import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../actions";

const Header = props => {
  return props.loggedIn ? (
    <div>
      {/* I think the home and about need to be <a> tags because they are deployed separately.
          Can cross that bridge later.*/}
      <a href="https://build-week-airbnb-optimal-price.github.io/Marketing-page/index.html">
        Home
      </a>
      <Link to={`/user/${props.id}`}>Your Properties</Link>
      <a href="https://build-week-airbnb-optimal-price.github.io/Marketing-page/About.html#">
        About Us
      </a>
      <Link to="/login" onClick={props.logout}>
        Logout
      </Link>
      <Link to="/register">Register</Link>
      <Link to={`/user/${props.id}/analysis`}>Rental Description Analyzer</Link>
    </div>
  ) : (
    <div>
      <a href="https://build-week-airbnb-optimal-price.github.io/Marketing-page/index.html">
        Home
      </a>
      <Link to={`/user/${props.id}`}>Your Properties</Link>
      <a href="https://build-week-airbnb-optimal-price.github.io/Marketing-page/About.html#">
        About Us
      </a>{" "}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to={`/user/${props.id}/analysis`}>Rental Description Analyzer</Link>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { logout })(Header);
