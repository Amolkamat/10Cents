import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from './header_view.js'
import BusinessRegistration from '../containers/businessRegistration'


export default class BusinessRegistrationView extends Component {


  render() {

    return (
      <div>
      <Header />



      <div className="title-cover-landing">
<div className="title-cover-left"></div>
<div className="title-cover-right">
    <div className="title-cover-right-child">
          
                  <BusinessRegistration />

    </div>
</div>
</div>


</div>

    );
  }
}
