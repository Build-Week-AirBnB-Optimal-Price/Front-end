import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  width: 400px;
`;

const Navlist = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <div>
      <Navbar>
        <Navlist>
          {/* I think the home and about need to be <a> tags because they are deployed separately.
          Can cross that bridge later.*/}
          <Link to="/">Home</Link>
          <Link to="/properties">Your Properties</Link>
          <Link to="/about">About Us</Link>
        </Navlist>
      </Navbar>
    </div>
  );
};

export default Header;
