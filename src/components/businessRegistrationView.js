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
        <div className = "text-center businessHeading">
          <h1>Please register and connect to your Customers instantly</h1>
        </div>
<div className="businessRegistration-cover-left"></div>
<div className="title-cover-right">
    <div className="title-cover-right-child">

                  <BusinessRegistration />

    </div>
</div>
</div>

<div className="company-logo-container">
                    <h4>Our Partners</h4>
                    <img src="/images/logo1.jpeg" />
                    <img src="/images/logo4.jpg" />
                    <img src="/images/logo2.jpg" />
                    <img src="/images/logo3.jpg" />

                </div>

</div>

    );
  }
}
