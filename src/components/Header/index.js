import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Header() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="empresa">Empresa</Nav.Link>
            <Nav.Link href="fornecedor">Fornecedor</Nav.Link>
            <NavDropdown title="Formularios">
                <Nav.Link href="formempresa">Empresa</Nav.Link>
                <Nav.Link href="formfornecedor">Fornecedor</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Header;
  