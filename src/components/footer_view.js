import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


export default class Footer extends Component {


  render() {


    return (
      <div className="company-logo-container">
                          <h4>As Used By</h4>
                          <img src="/images/logo1.jpeg" />
                          <img src="/images/logo4.jpg" />
                          <img src="/images/logo2.jpg" />
                          <img src="/images/logo3.jpg" />

                      </div>
    );
  }
}
