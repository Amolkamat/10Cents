import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";
import SearchBar from "../containers/search_bar";
import BusinessList from "../containers/business_list";
import ShopList from "../containers/shop_list";
import Header from './header_view.js'
import PlacesAutocomplete , { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


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

    console.log(this.state);

    this.props.history.push(`/placeOrder/${this.state.placeId}`);

  /*  this.props.createBusiness(user, (response) => {
      console.log(user)
      this.props.history.push(`/businessSetup/${response.data.placeId}`);
    }); */
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



              <div className="col-lg-5 col-lg-offset-4 col-md-6">
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
    );
  }
}






export default BusinessFinderSearch;
