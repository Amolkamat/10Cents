import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBusiness } from "../actions";


class BusinessDashboard extends Component {

  constructor(props) {
    super(props);

  }

render() {

    return (
      <div>
        Business Dashboard!


        </div>
    );
  }
}

function mapStateToProps({business}) {
  return {business};
}


export default connect(mapStateToProps, { getBusiness})(BusinessDashboard);
