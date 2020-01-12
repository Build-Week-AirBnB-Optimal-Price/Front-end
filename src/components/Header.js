import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../actions";

const Header = props => {
  return props.loggedIn ? (
    <div>
      <Navbar>
        <Navlist>
          {/* I think the home and about need to be <a> tags because they are deployed separately.
          Can cross that bridge later.*/}
          <Link to="https://build-week-airbnb-optimal-price.github.io/Marketing-page/index.html">
            Home
          </Link>
          <Link to={`/user/${props.id}`}>Your Properties</Link>
          <Link to="https://build-week-airbnb-optimal-price.github.io/Marketing-page/About.html#">
            About Us
          </Link>
          <Link to="/login" onClick={props.logout}>
            Logout
          </Link>
          <Link to="/register">Register</Link>
        </Navlist>
      </Navbar>
    </div>
  ) : (
    <div>
      <Navbar>
        <Navlist>
          <Link to="/">Home</Link>
          <Link to={`/user/${props.id}`}>Your Properties</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Navlist>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { logout })(Header);
