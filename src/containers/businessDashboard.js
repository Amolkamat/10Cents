import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBusiness } from "../actions";
import BusinessDashboardOrder from "./BusinessDashboardOrder"
import BusinessDashboardUpload from "./BusinessDashboardUpload"

class BusinessDashboard extends Component {

  constructor(props) {
    super(props);

  }

render() {

    return (
      <div>
        <div className = "col-md-4" >
          <div className="businessDashboard-cover-left">
            <BusinessDashboardOrder/>
          </div>
        </div>

        <div className = "col-md-4" >
    <div className="businessDashboard-cover-middle">
      <BusinessDashboardUpload />
    </div>
    </div>

        <div className = "col-md-4" >
      <div className="businessDashboard-cover-right"></div>
    </div>



        </div>
    );
  }
}

function mapStateToProps({business}) {
  return {business};
}


export default connect(mapStateToProps, { getBusiness})(BusinessDashboard);
