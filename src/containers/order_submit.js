import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenuItems,sendMessage } from "../actions";

class OrderSubmit extends Component {

  handleSubmit() {
    console.log('Hello from Submit');
  }

  render() {
    if(this.props.order.menuList.length<=0) {
      return (
        <div>
        </div>
      )
    } else {
      return (
        <div>
          <a href="#" className="btn btn-squared-default btn-info" onClick={() => this.handleSubmit()}>
                  <i className="fa fa-hand-o-right fa-lg"></i>
                  <br />
                  Purchase

              </a>
        </div>
      )
    }

  }

}

function mapStateToProps({order}) {
  return { order };
}


export default connect(mapStateToProps, { getMenuItems ,sendMessage})(OrderSubmit);
