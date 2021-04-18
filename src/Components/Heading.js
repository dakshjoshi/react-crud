import React, { useContext } from "react";
import { Nav, NavItem, Navbar, NavbarBrand, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./specialCss.css";

export const Heading = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/">HOMEPAGE</NavbarBrand>
          <Nav>
            <NavItem>
              <Link className="btn btn-info" to="/add" id="btn">
                Add
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
