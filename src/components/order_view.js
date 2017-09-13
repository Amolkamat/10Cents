import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js'
import Footer from './footer_view.js'
import PlaceOrders from '../containers/place_orders';
import OrderTotal from '../containers/order_total';
import OrderSubmit from '../containers/order_submit';
import Notification from "../containers/notification"

export default class OrderView extends Component {

  render() {


    return (
      <div>
        <Header />
        <Notification />
        <div className="row">
          <div className = "text-center">
          <h2 className = "placeOrderHeader">Place your Order!</h2>
          <div className="additional-info-container">
                    <div className="userProgress">
                        <div className="threeOfFive">
                        </div>
                    </div>
                  </div>
          </div>
        <div className = "menuItemList col-md-8 col-sm-12 col-xs-12">
          <div className="order-cover-landing">
            <PlaceOrders id={this.props.match.params.id} />
          </div>
        </div>

        <div className = "col-md-4  col-sm-12 col-xs-12">
          <div className = "row">
            <OrderTotal displayCloseButton={true}/>
          </div>
          <div className = "row">
            <div className = "col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 ">
                <OrderSubmit id={this.props.match.params.id}/>
            </div>

          </div>


      </div>
    </div>
    <Footer />
  </div>
    );
  }
}
