import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

export default class BusinessListItem extends Component {
constructor(props) {
  super(props);
}

render() {
  console.log('Hello from Buiness Item');
  return (
      <div> Business Item </div>
  )

}

}
