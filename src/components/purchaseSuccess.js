import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js'
import Footer from './footer_view.js'
import PlaceOrders from '../containers/place_orders';
import OrderTotal from '../containers/order_total';
import OrderSubmit from '../containers/order_submit';


export default class PurchaseSuccess extends Component {

  render() {


    return (
      <div>
        <Header />
        <div className="row">


          <h3> Order Purchase Success</h3>

          <h4> Thank you for your Order! </h4>

      </div>
    </div>

    );
  }
}
