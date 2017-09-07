import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js';
import Footer from "./footer_view"
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
                  <h2> Purchase Success Order # {this.props.postedMenu.data._id} </h2>
                    </div>
        </div>
        <div className = "row" >
          <h6 className = "text-center"> Receipt</h6>
          <OrderTotal />
        </div>
        <Footer />
      </div>

      );
    }

  }
}

function mapStateToProps({postedMenu}) {
  return {postedMenu};
}

export default connect(mapStateToProps, null)(PurchaseSuccess);
