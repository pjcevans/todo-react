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
          <NavItem eventKey={1} href="#">Settings</NavItem>
          <NavItem eventKey={2} href="#">Profile</NavItem>
          <NavDropdown eventKey={3} title="Select list" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Saved list 1</MenuItem>
            <MenuItem eventKey={3.2}>Saved list 2</MenuItem>
            <MenuItem eventKey={3.3}>Saved list 3</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Completed list 1</MenuItem>
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
