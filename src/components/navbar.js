import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap';

export default class navbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hire Ben for StatsBomb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="http://www.benpreston.net">Bens Site</Nav.Link>

            <NavDropdown title="Stats" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Match Stats
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Team Stats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Player Stats
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://statsbomb.com/">
                Stats Bomb
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
