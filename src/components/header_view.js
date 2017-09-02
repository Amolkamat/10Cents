import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {


  render() {

    return (
      <div>

        <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">10 ¢</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/businessLogin">
                <NavItem eventKey={1} href="#">Business Login </NavItem>
              </LinkContainer>
              <LinkContainer to="/businessRegistration">
              <NavItem eventKey={2} href="#">Business Sign Up </NavItem>
            </LinkContainer>
                <LinkContainer to="/home">
                <NavItem eventKey={3} href="#">About </NavItem>
              </LinkContainer>
                <NavItem eventKey={4} href="#">App Reviews </NavItem>
                <NavItem eventKey={5} href="#"> </NavItem>
              </Nav>

            </Navbar.Collapse>
          </Navbar>

      </div>
    );
  }
}
