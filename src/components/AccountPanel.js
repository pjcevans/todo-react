import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import FaShareAlt from "react-icons/lib/fa/share-alt";

const AccountPanel = (props) => {
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">To-do lists: </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#" onClick={(event) => props.reset()}>Reset to blank list</NavItem>
          <NavItem eventKey={2} href="#" onClick={(event) => props.loadExampleData()}>Load example data</NavItem>
          <NavDropdown eventKey={3} title="Select list" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Not</MenuItem>
            <MenuItem eventKey={3.2}>In</MenuItem>
            <MenuItem eventKey={3.3}>Use</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Yet</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#"><FaShareAlt size={20} /></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

};
export default AccountPanel;
