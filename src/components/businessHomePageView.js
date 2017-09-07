import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js'
import { getBusiness } from "../actions";
import BusinessDashboard from '../containers/businessDashboard'

class BusinessHomePageView extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBusiness(id);
  }

  displayBusinessAddress() {
    console.log(this.props.business)
    if(!this.props.business) {
      return (
        <div> </div>
      )
    } else {
      return (
          <h3> {this.props.business.data.address}</h3>
          )
    }

  }

  render() {

    return (
      <div>
        <Header />
          <div className = "text-center">
            <h1 class="text-center"> Welcome John Snow!</h1>
             {this.displayBusinessAddress()}
          </div>
          <BusinessDashboard/>
        </div>
    );
  }
}

function mapStateToProps({business}) {
  return {business};
}


export default connect(mapStateToProps, { getBusiness})(BusinessHomePageView);
