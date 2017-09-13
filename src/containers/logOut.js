import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAndRedirect } from "../actions";

class LogOut extends Component {

  constructor(props)
  {
    super(props);

  }

  componentWillMount () {
        this.props.logoutAndRedirect();
        this.props.history.push('/home');
    }




  render() {

      return (
        <div>
          <h1> LogOut Successful! </h1>
        </div>
      )


  }

}

function mapStateToProps({order}) {
  return { order };
}


export default withRouter(connect(mapStateToProps, { logoutAndRedirect})(LogOut));
