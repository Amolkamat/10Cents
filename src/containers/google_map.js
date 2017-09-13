import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {

    var map = new google.maps.Map(this.refs.map, {
      zoom: 14,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    var marker = new google.maps.Marker({
    position: {
      lat: this.props.lat,
      lng: this.props.lon
    },
    map: map,
    title: 'Your Order!',

	animation: google.maps.Animation.BOUNCE,
	draggable: true
    })
  }

  render() {
    return (
      <div>
          <div className = "text-center">
              <h3> Map to your Location!</h3>
          </div>

          <div className ="map" ref="map" />;
      </div>
    )
  }
}

export default GoogleMap;
