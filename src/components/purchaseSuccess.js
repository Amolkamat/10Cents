import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js';
import OrderTotal from '../containers/order_total';

class PurchaseSuccess extends Component {

  render() {
    if(!this.props.postedMenu) {
      return (
        <div> </div>
      )
    } else {
      return (
        <div>
          <Header />

            <div className="row">
              <div className = "text-center">
                  <h3> Order Purchase Success - </h3>
                  <h4> Your Order Number is - {this.props.postedMenu.data._id} </h4>
          </div>
        </div>
        <div className = "row" >
          <h6 className = "text-center"> Your Order Receipt</h6>
          <OrderTotal />
        </div>
      </div>

      );
    }

  }
}

function mapStateToProps({postedMenu}) {
  return {postedMenu};
}

export default connect(mapStateToProps, null)(PurchaseSuccess);
