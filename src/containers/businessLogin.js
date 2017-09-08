import React from 'react'
import PlacesAutocomplete , { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from "react-redux";
import { manualLogin,displayNotification,validateShop } from "../actions";
import { Link,withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Notification from './notification';

class BusinessLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      email:'',
      password:''

   }
    this.onChange = (address,placeId) => this.setState({ address,placeId })
  }

  componentWillReceiveProps (nextProps) {
  
    if(nextProps.userAuthentication.error) {
        this.props.displayNotification(true,'Error occured during Authentication - Please try again','delete-item-notification');
    }
  }

  handleFormSubmit = (event) => {

    const user = {

      email: this.state.email,
      password: this.state.password

    }

    if(user.email == "") {
      this.props.displayNotification(true,'Please enter your Email Address','delete-item-notification');
      }
      else if (user.password == ""){
        this.props.displayNotification(true,'Please enter a Password','delete-item-notification');
      }
      else {
        // Passed in via react-redux. Returns a promise.
  this.props.manualLogin({ // this function is passed in via react-redux
    email,
    password
  }, '/businessDashboard') // holds the path to redirect to after login (if any)
  .then((loginMessage) => {
    console.log(loginMessage)
    if (!loginMessage) {
      this.props.displayNotification(true,'Invalid Login Credentials','delete-item-notification');
    }
  })

        }

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



</form>

<div className="col-sm-3 col-sm-offset-6">
    <button className="btn btn-primary btn-block registerButton" onClick={() => this.handleFormSubmit()}>Login</button>
</div>
</div>

    )
  }
}

function mapStateToProps({userAuthentication}) {
  return { userAuthentication};
}


export default withRouter(connect(mapStateToProps, { manualLogin, displayNotification,validateShop})(BusinessLogin));
