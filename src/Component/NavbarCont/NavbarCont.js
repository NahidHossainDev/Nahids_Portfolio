import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import $ from "jquery";
import { useState } from 'react';

const NavbarCont = () => {
  
  const [navBarCls, setNavBarCls] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 110) {
     setNavBarCls(true)
    } else {
      setNavBarCls(false);
   }
  }

  window.addEventListener("scroll", changeBackground);

  const style = {
    navStyle1: {
      background: "transparent",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
    },
    navStyle2: {
      background: " rgb(19, 47, 88)",
      transition: ".5s",
      position: "sticky",
      top: "0",
    },
  };

  return (
    <Navbar expand="lg" variant="dark" className="navbarCont" style ={navBarCls ? style.navStyle2 : style.navStyle1}>
      <div className="container">
        <Navbar.Brand
          href="/home"
          style={{ color: "#05c46b", fontSize: "40px" }}
        >
          &lt;NH/&gt;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar">
            <Nav.Link href="/home" className="navItem" style={{ color: "white" }} > Home </Nav.Link>
            <Nav.Link href="/portfolio" className="navItem" style={{ color: "white" }} >Portfolio </Nav.Link>
            <Nav.Link href="/blog" className="navItem" style={{ color: "white" }} >  Blog </Nav.Link>
            <Nav.Link href="/aboutMe" className="navItem" style={{ color: "white" }} >  About me  </Nav.Link>
            <Nav.Link href="/contact" className="navItem" style={{ color: "white" }} > Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarCont;