import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js'
import { getBusiness } from "../actions";
import BusinessDashboard from '../containers/businessDashboard'
import Notification from "../containers/notification"


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
        <div>
          <h1 class="text-center"> Welcome {this.props.business.data.name}!</h1>
            <h3> {this.props.business.data.address}</h3>
            <BusinessDashboard placeId = {this.props.business.data.placeId}/>
        </div>

          )
    }

  }

  render() {

    return (
      <div>
        <Header />
        <Notification />
          <div className = "text-center">

             {this.displayBusinessAddress()}
          </div>

        </div>
    );
  }
}

function mapStateToProps({business}) {
  return {business};
}


export default connect(mapStateToProps, { getBusiness})(BusinessHomePageView);
