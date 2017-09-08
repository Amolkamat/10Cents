import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { displayNotification,validateShop} from "../actions";
import SearchBar from "../containers/search_bar";
import BusinessList from "../containers/business_list";
import ShopList from "../containers/shop_list";
import Header from './header_view.js';
import PlacesAutocomplete , { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Notification from "../containers/notification";

class BusinessFinderSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'Search where you want to Order! ',
      name: '',
      email:'',
      password:''

   }
    this.onChange = (address,placeId) => this.setState({ address,placeId })
  }
  handleFormSubmit =  (event) => {

    if(this.state.placeId ==null ) {
      this.props.displayNotification(true,'Please enter a valid Business Location','delete-item-notification');
    }
     else {
       this.props.validateShop(this.state.placeId, (response) => {
           if (response.data.length <= 0) {
               this.props.displayNotification(true, 'Shop has not been Registered!', 'delete-item-notification');
           } else {
            this.props.history.push(`/placeOrder/${this.state.placeId}`);
           }

       })

     }

  }

  render() {

    const cssClasses = {
    input: 'form-control'

  }

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }


    return (
      <div>



        <Header />

        <Notification />

        <div className="title-cover-landing">
  <div className="title-cover-left"></div>
  <div className="title-cover-right">
      <div className="title-cover-right-child">
          <h1 className="text-center">Local Business is just a click away! </h1>
          <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses}/>
          <div className = "text-center">

          <a href="#" className="btn btn-squared-default btn-info placeOrderButton" onClick={() => this.handleFormSubmit()}>
                  <i className="fa fa-bell fa-lg"></i>
                  <br />
                  Place Order!

              </a>
          </div>
      </div>
  </div>
</div>

<div className="company-logo-container">
                    <h4>As Used By</h4>
                    <img src="/images/logo1.jpeg" />
                    <img src="/images/logo4.jpg" />
                    <img src="/images/logo2.jpg" />
                    <img src="/images/logo3.jpg" />

                </div>



      </div>
    );
  }
}






export default connect(null, { displayNotification,validateShop})(BusinessFinderSearch);
