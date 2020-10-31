import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import $ from "jquery";

const NavbarCont = () => {
  
  return (
      <Navbar
        expand="lg"
        variant="dark"
        className="navbarCont"
      >
        <div className="container">
          <Navbar.Brand href="/home" style={{ color:"#05c46b",fontSize:"40px"}}>&lt;NH/&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar">
            <Nav.Link href="/home" className="navItem" style={{color:"#05c46b"}}>Home</Nav.Link>
            <Nav.Link href="/portfolio" className="navItem" style={{ color: "white" }}>Portfolio</Nav.Link>
            <Nav.Link href="/blog" className="navItem" style={{color:"white"}}>Blog</Nav.Link>
            <Nav.Link href="/aboutMe" className="navItem" style={{color:"white"}}>About me</Nav.Link>
            <Nav.Link href="/contact" className="navItem" style={{color:"white"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
  );
};

export default NavbarCont;