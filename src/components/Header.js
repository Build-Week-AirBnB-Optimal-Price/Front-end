// import { Link } from "react-router-dom";
import React, { useState } from 'react';

// import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Smart Home Prices</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://build-week-airbnb-optimal-price.github.io/Marketing-page/index.html">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/properties">Your Properties</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://build-week-airbnb-optimal-price.github.io/Marketing-page/About.html#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/analysis">Analysis Tool</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
