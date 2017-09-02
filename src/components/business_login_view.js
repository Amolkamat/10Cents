import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from './header_view.js'

export default class BusinessLogin extends Component {


  render() {

    return (
      <div>
      <Header />
        Business Login View

      </div>
    );
  }
}
