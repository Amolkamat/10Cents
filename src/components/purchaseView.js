import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js';
import Footer from './footer_view.js';
import { CardForm } from 'react-payment';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OrderTotal from '../containers/order_total';

export default class PurchaseView extends Component {

  onSubmit() {
    console.log('Hello from Credit Card');

  }

  render() {


    return (
      <div>

        <Header />
        <div class="row">
          <div className = "col-md-4">
            <OrderTotal />
          </div>
        </div>
        <div className="row" >
          <div className = "col-md-4 col-md-offset-2">

          <MuiThemeProvider>
          <CardForm
    onSubmit={this.onSubmit}
    getName={true}
    getZip={true}

  />
  </MuiThemeProvider>
        </div>
        </div>
</div>
    );
  }
}
