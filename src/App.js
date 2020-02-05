import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.scss';


function App() {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Webwinkle Inventory</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/homepage">Home</Nav.Link>
          <Nav.Link href="/list">List of Products</Nav.Link>
          <Nav.Link href="/create">Add Product</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
