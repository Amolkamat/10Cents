import React from 'react'
import PlacesAutocomplete , { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from "react-redux";
import { createBusiness } from "../actions";
import { Link,withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

class GooglePlaces extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'San Francisco, CA',
      name: '',
      email:'',
      password:''

   }
    this.onChange = (address,placeId) => this.setState({ address,placeId })
  }

  handleFormSubmit = (event) => {

    console.log(this.state);
    const user = {
      email: this.state.email,
      password: this.state.password,
      shopPlaceId: this.state.placeId,
      shopPlaceAddress: this.state.address
    }
    this.props.createBusiness(user, () => {
      this.props.history.push("/");
    });
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
    <h2 className="text-center">Registration Form</h2>

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
        <label for="places" className="col-sm-3 control-label">Find your Business</label>
        <div className="col-sm-9">
        <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses}/>
      </div>
    </div>


</form>

<div className="col-sm-9 col-sm-offset-3">
    <button className="btn btn-primary btn-block registerButton" onClick={() => this.handleFormSubmit()}>Register</button>
</div>
</div>

    )
  }
}

function mapStateToProps(state) {
  return { posts: state };
}


export default withRouter(connect(mapStateToProps, { createBusiness})(GooglePlaces));
