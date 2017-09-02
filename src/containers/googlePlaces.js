import React from 'react'
import PlacesAutocomplete , { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from "react-redux";
import { createBusiness } from "../actions";
import { Link,withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

class GooglePlaces extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address,placeId) => this.setState({ address,placeId })
  }

  handleFormSubmit = (event) => {

    console.log(this.state);

    this.props.createBusiness(this.state, () => {
      this.props.history.push("/");
    });
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
