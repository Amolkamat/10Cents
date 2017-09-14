import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from './header_view.js'
import BusinessLogin from "../containers/BusinessLogin"
import Notification from "../containers/notification"
import { getUserFromStorage,displayNotification } from "../actions";

class BusinessLoginView extends Component {

  componentWillMount()
  {
    this.props.getUserFromStorage();
  }


  render() {
    if(this.props.userAuthentication && this.props.userAuthentication.payload) {

      console.log('Inside Push History');
      console.log(this.props.userAuthentication);
      if(this.props.userAuthentication.payload.authenticationFailure && this.props.userAuthentication.payload.displayMessage) {
        this.props.displayNotification(true,'Invalid Authentication - Please relogin!','delete-item-notification');
      }
      else {
        return(
          <div>
        {this.props.history.push(`/businessHomePageView/${this.props.userAuthentication.payload.placeId}`)}
          </div>
        )
      }

    }
      else {

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


  }


function mapStateToProps({userAuthentication}) {
  return { userAuthentication};
}

export default connect(mapStateToProps, {getUserFromStorage,displayNotification})(BusinessLoginView);
