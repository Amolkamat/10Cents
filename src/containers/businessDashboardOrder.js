import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrderChartData} from "../actions";

class BusinessDashboardOrder extends Component {

  constructor(props)
  {
    super(props);

  }

  render() {
    if(!this.props.business) {
      return (
        <div>
          No Orders to Display
        </div>
      )
    } else {
      return (
        <div>
          <div className= "text-center">
              <h3 className = "dashboardHeader"> Order Dashboard </h3>
          </div>

          <div>
            <h4> Orders Received Today : </h4>
            <h4> Last Order Received @:  </h4>

          </div>
          <div className= "text-center">
            <button className = "btn btn-primary"> View Orders </button>
          </div>
        </div>
      )
    }

  }

}

function mapStateToProps({business}) {
  return { business };
}


export default withRouter(connect(mapStateToProps, { getOrderChartData})(BusinessDashboardOrder));
