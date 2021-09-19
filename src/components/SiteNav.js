import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function SiteNav() {
  return (
    <Navbar>
      <Navbar.Brand>Microblog</Navbar.Brand>
      <Nav.Link as={Link} to="/">
        Blog
      </Nav.Link>
      <Nav.Link as={Link} to="/new">
        Add a post
      </Nav.Link>
    </Navbar>
  );
}

export default SiteNav;
