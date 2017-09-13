import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './header_view.js';
import Footer from "./footer_view"
import OrderTotal from '../containers/order_total';
import {getLocation,getBusiness,sendMessage} from  "../actions";
import GoogleMap from "../containers/google_map";

class PurchaseSuccess extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: false
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage()
  {
    console.log('Message State')
    console.log(this.state)

    if(!this.state.message) {
      console.log('Inside State Message');
      var phone = this.props.business.data.phone;
      var message = {
        orderId: this.props.postedMenu.data._id,
        phone: phone
      }
      this.props.sendMessage(message);
        this.setState({message:true});
    }
  }

  getBusiness() {
    if(!this.props.business) {
        this.props.getBusiness(this.props.postedMenu.data.placeId)

    } else {
      if(this.props.business.data.phone) {

      this.sendMessage();

      }


      if(!this.props.googleLocation) {
        this.props.getLocation(this.props.business.data.address);

      } else {
        console.log('Inside Maps');
        return(
              <div>


                <GoogleMap lat={this.props.googleLocation.lat} lon={this.props.googleLocation.long} />
                <div className="row text-center">
                    <h6> <em> {this.props.business.data.address}</em> </h6>
                </div>


                </div>
        )

        }
    }

  }
  render() {
    if(this.props.postedMenu && this.props.postedMenu.data) {

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
          <div className = "col-md-6">
            {this.getBusiness()}
          </div>
        </div>
        <Footer />
      </div>

      );



    } else


    {
      return (
        <div> </div>
      )
    }

  }
}

function mapStateToProps({postedMenu,business,googleLocation}) {
  return {postedMenu,business,googleLocation};
}

export default connect(mapStateToProps, {getLocation,getBusiness,sendMessage})(PurchaseSuccess);
