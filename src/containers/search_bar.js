import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBusiness, addPlace,fetchRestaurants } from "../actions/index";
import { bindActionCreators } from "redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };


    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.addPlace(position.coords.latitude, position.coords.longitude)
      })
    }
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchBusiness(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search by Shop Name"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
        {
          this.props.currentLocation ?
          <span className="input-group-btn">
            <button type="button" className="btn btn-secondary" onClick = {() => this.props.fetchRestaurants(this.props.currentLocation.lat,this.props.currentLocation.lon)}>Get Google Location</button>
          </span>
          :null
        }


      </form>
    );
  }
}

function mapStateToProps({ currentLocation}) {
  return { currentLocation };
}

export default connect(mapStateToProps, {fetchBusiness ,addPlace,fetchRestaurants})(SearchBar);
