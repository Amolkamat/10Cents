import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Field, reduxForm } from "redux-form";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import GooglePlaces from "../containers/googlePlaces"



export default class BusinessRegistration extends Component {

  constructor(props) {
   super(props)
   this.state = { address: 'San Francisco, CA' }
   this.onChange = (address) => this.setState({ address })
 }

 handleFormSubmit = (event) => {
   event.preventDefault()

   geocodeByAddress(this.state.address)
     .then(results => getLatLng(results[0]))
     .then(latLng => console.log('Success', latLng))
     .catch(error => console.error('Error', error))
 }


  render() {

    return(
      <div>
        <form className="form-horizontal" role="form">
  <h2 className="text-center">Registration Form</h2>

  <div className="form-group">
                    <label for="firstName" className="col-sm-3 control-label">Full Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="firstName" placeholder="Full Name" className="form-control" autofocus/>

                    </div>
                </div>
  <div className="form-group">
      <label for="email" className="col-sm-3 control-label">Email</label>
      <div className="col-sm-9">
          <input type="email" id="email" placeholder="Email" className="form-control" />
      </div>
  </div>
  <div className="form-group">
      <label for="password" className="col-sm-3 control-label">Password</label>
      <div className="col-sm-9">
          <input type="password" id="password" placeholder="Password" className="form-control" />
      </div>
  </div>
  <div className="form-group">
    <GooglePlaces />
  </div>
  <div className="form-group">
      <div className="col-sm-9 col-sm-offset-3">
          <button type="submit" className="btn btn-primary btn-block">Register</button>
      </div>
  </div>
</form>




      </div>

    )
  }
}
