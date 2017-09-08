import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrderChartData} from "../actions";

class BusinessDashboardProfile extends Component {



  render() {
    if(!this.props.business) {
      return (
        <div>

        </div>
      )
    } else {
      return (
        <div>
          <div className= "text-center">
              <h4 className = "dashboardHeader"> Profile </h4>
          </div>

          <div>
            <h4> Name : </h4>
            <h4> Email:  </h4>
            <h4> Phone:  </h4>
          </div>
          <div className= "text-center">
            <button className = "btn btn-primary"> Update Profile  </button>
          </div>
        </div>
      )
    }

  }

}

function mapStateToProps({business}) {
  return { business };
}


export default withRouter(connect(mapStateToProps, { getOrderChartData})(BusinessDashboardProfile));
