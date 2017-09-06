import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {displayNotification } from "../actions";

class Notification extends Component {

  render() {
    var notificationType = '';
      var notificationText = '';

      if (this.props.notification && this.props.notification.show) {
          notificationType = 'item-notification item-notification-show ';
          notificationType = notificationType + this.props.notification.type;
          notificationText = this.props.notification.text
                                      setTimeout(() => {
  this.props.displayNotification(false)
}, 3000)
      }
      else {
          console.log('Insidefalse')
          notificationType = 'item-notification item-notification-hide';
      }

      return (
          <div className={notificationType}>
              <a className="item-notification-text">{notificationText}</a>
          </div>
      )
  }
}


function mapStateToProps({notification}) {
  return { notification };
}


export default connect(mapStateToProps,{displayNotification})(Notification);
