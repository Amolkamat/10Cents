import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js';
import Footer from './footer_view.js';
import { CardForm } from 'react-payment';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OrderTotal from '../containers/order_total';
import { purchaseOrder } from "../actions";
import PurchaseSuccess from './purchaseSuccess';

class PurchaseView extends Component {

  constructor(props)
  {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit() {
    console.log(this.props.match.params.id);
    console.log('Final Order List');
    console.log(this.props.order.menuList);
    this.props.purchaseOrder(this.props.match.params.id,this.props.order.menuList);
    this.props.history.push('/purchaseSuccess');

  }

  render() {

    console.log(this.props)

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

        <Footer />

</div>
    );
  }
}

function mapStateToProps({order,postedMenu}) {
  return { order , postedMenu};
}

export default connect(mapStateToProps, { purchaseOrder})(PurchaseView);
