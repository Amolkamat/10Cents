import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenuItems } from "../actions";

class PlaceOrders extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMenuItems(id);
  }


  render() {
    const { menu } = this.props;
    console.log(menu)
    return(
      <div> Hola </div>
    )

  }
}



function mapStateToProps({menu}) {
  return { menu };
}

export default connect(mapStateToProps, { getMenuItems })(PlaceOrders);
