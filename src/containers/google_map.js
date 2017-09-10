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
    return <div className ="map" ref="map" />;
  }
}

export default GoogleMap;
