import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from './header_view.js'
import BusinessLogin from "../containers/BusinessLogin"
import Notification from "../containers/notification"

class BusinessLoginView extends Component {

  render() {

    return (
      <div>
        <Header />
          <Notification />
        <div className="title-cover-landing">
          <div className = "text-center businessHeading">
            <h1>Please login and grow your Business!</h1>
          </div>

  <div className="title-cover-right">
      <div className="title-cover-right-child">

                    <BusinessLogin />

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

export default connect(null, { })(BusinessLoginView);
