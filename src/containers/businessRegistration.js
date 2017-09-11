import React from 'react'
import PlacesAutocomplete , { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from "react-redux";
import { createBusiness,displayNotification,validateShop } from "../actions";
import { Link,withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Notification from './notification';

class BusinessRegistration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      name: '',
      email:'',
      password:'',
      phone: ''

   }
    this.onChange = (address,placeId) => this.setState({ address,placeId })
  }

  handleFormSubmit = (event) => {

    console.log(this.state);
    //Validate Form Inputs

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      shopPlaceId: this.state.placeId,
      shopPlaceAddress: this.state.address,
      phone: this.state.phone
    }

    if(user.email == "") {
      this.props.displayNotification(true,'Please enter your Email Address','delete-item-notification');
      }
      else if (user.password == ""){
        this.props.displayNotification(true,'Please enter a Password','delete-item-notification');
      }
      else if (user.name == "") {
        this.props.displayNotification(true,'Please enter your Name','delete-item-notification');
      } else if(user.shopPlaceAddress == "" || user.shopPlaceId ==null ) {
        this.props.displayNotification(true,'Please enter a valid Business Location','delete-item-notification');
      } else {
    this.props.validateShop(user.shopPlaceId, (response) => {
        if (response.data.length > 0) {
            this.props.displayNotification(true, 'Shop already registered - Please login insted of Registration', 'delete-item-notification');
        } else {
            this.props.createBusiness(user, (response) => {
                if(response.data.success) {
                    this.props.history.push(`/businessHomePageView/${response.data.user.placeId}`);
                } else {
                  this.props.displayNotification(true, 'User already Registered', 'delete-item-notification');
                }

            })
        }

    })

}
}

  onNameChange(name) {
    this.setState({ name });
  }

  onEmailChange(email) {
    this.setState({ email });
  }
  onPasswordChange(password) {
    this.setState({ password });
  }

  onPhoneChange(phone) {
    this.setState({ phone });
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
              <form className="form-horizontal">

    <div className="form-group">
                      <label for="firstName" className="col-sm-3 control-label">Full Name</label>
                      <div className="col-sm-9">
                          <input type="text" value = {this.state.name} id="firstName" placeholder="Full Name" className="form-control" onChange={event => this.onNameChange(event.target.value)} autoFocus/>

                      </div>
                  </div>
    <div className="form-group">
        <label for="email" className="col-sm-3 control-label">Email</label>
        <div className="col-sm-9">
            <input type="email" value = {this.state.email} id="email" placeholder="Email" className="form-control" onChange={event => this.onEmailChange(event.target.value)} />
        </div>
    </div>
    <div className="form-group">
        <label for="password" className="col-sm-3 control-label">Password</label>
        <div className="col-sm-9">
            <input type="password" value = {this.state.password} id="password" placeholder="Password" className="form-control" onChange={event => this.onPasswordChange(event.target.value)} />
        </div>
    </div>
    <div className="form-group">
        <label for="phone" className="col-sm-3 control-label">Phone</label>
        <div className="col-sm-9">
            <input type="phone" value = {this.state.phone} id="phone" placeholder="Phone" className="form-control" onChange={event => this.onPhoneChange(event.target.value)} />
        </div>
    </div>
    <div className="form-group">
        <label for="places" className="col-sm-3 control-label">Find your Business</label>
        <div className="col-sm-9">
        <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses}/>
      </div>
    </div>


</form>

<div className="col-sm-3 col-sm-offset-6">
    <button className="btn btn-primary btn-block registerButton" onClick={() => this.handleFormSubmit()}>Register</button>
</div>
</div>

    )
  }
}

function mapStateToProps(state) {
  return { posts: state };
}


export default withRouter(connect(mapStateToProps, { createBusiness, displayNotification,validateShop})(BusinessRegistration));
