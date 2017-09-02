import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from './header_view.js'
import BusinessRegistration from '../containers/businessRegistration'
import GooglePlaces from "../containers/googlePlaces"

export default class BusinessRegistrationView extends Component {


  render() {

    return (
      <div>
      <Header />
      <GooglePlaces />

      </div>
    );
  }
}
