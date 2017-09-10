import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js';
import Footer from "./footer_view"
import OrderTotal from '../containers/order_total';
import {getLocation,getBusiness} from  "../actions";
import GoogleMap from "../containers/google_map";

class PurchaseSuccess extends Component {
  getBusiness() {
    if(!this.props.business) {
        this.props.getBusiness(this.props.postedMenu.data.placeId)

    } else {
      if(!this.props.googleLocation) {
        this.props.getLocation(this.props.business.data.address);

      } else {
        console.log('Inside Maps');
        return(
                <GoogleMap lat={this.props.googleLocation.lat} lon={this.props.googleLocation.long} />
        )

        }
    }

  }
  render() {
    if(!this.props.postedMenu) {
      return (
        <div> </div>
      )
    } else


    {
      return (
        <div>
          <Header />

            <div className="row">
              <div className = "text-center">

                        <h1>You're all set! Order # {this.props.postedMenu.data._id}!</h1>
                        <div className="confirmation-success">
                            <i className="fa fa-check-circle fa-5x" aria-hidden="true"></i>
                        </div>


                    </div>
        </div>
        <div className = "row" >
          <div className = "col-md-6">

            <OrderTotal />
          </div>
          <div className = "col-md-4 col-md-offset-2">
            {this.getBusiness()}
          </div>
        </div>
        <Footer />
      </div>

      );
    }

  }
}

function mapStateToProps({postedMenu,business,googleLocation}) {
  return {postedMenu,business,googleLocation};
}

export default connect(mapStateToProps, {getLocation,getBusiness})(PurchaseSuccess);
