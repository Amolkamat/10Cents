import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js'
import Footer from './footer_view.js'
import PlaceOrders from '../containers/place_orders';
export default class OrderView extends Component {


  render() {


    return (
      <div>
        <Header />
      <PlaceOrders id={this.props.match.params.id} />
        <Footer />
      </div>
    );
  }
}
