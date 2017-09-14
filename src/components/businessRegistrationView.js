import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from './header_view.js'
import BusinessRegistration from '../containers/businessRegistration'
import Notification from "../containers/notification"
import { getUserFromStorage,displayNotification } from "../actions";


class BusinessRegistrationView extends Component {

  componentWillMount()
  {
    this.props.getUserFromStorage();
  }

  render() {
    if(this.props.userAuthentication && this.props.userAuthentication.payload) {
      if(this.props.userAuthentication.payload.authenticationFailure && this.props.userAuthentication.payload.displayMessage) {
        this.props.displayNotification(true,'Error during Authentication - Please register again!','delete-item-notification');
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
}

function mapStateToProps({userAuthentication}) {
  return { userAuthentication};
}

export default connect(mapStateToProps, {getUserFromStorage,displayNotification})(BusinessRegistrationView);
