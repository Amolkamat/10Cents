import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js'
import BusinessSetup from '../containers/businessSetup'
import { getBusiness } from "../actions";

class BusinessSetupView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('Get the Business Id');

    this.props.getBusiness(id);
  }

  render() {

    return (
      <div>
        <Header />
        <BusinessSetup />

      </div>
    );
  }
}



function mapStateToProps(state) {
  return { posts: state };
}


export default connect(mapStateToProps, { getBusiness})(BusinessSetupView);
