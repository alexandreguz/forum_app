import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigate = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link eventKey="forums">Forums</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="aboutUs">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contactUs">Contact us</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigate;
