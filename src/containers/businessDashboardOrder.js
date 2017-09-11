import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrders,updateOrder,displayNotification } from "../actions";
import moment from 'moment';
import {Panel } from 'react-bootstrap';
import BusinessDashboardOrderItem from "./BusinessDashboardOrderItem";

class BusinessDashboardOrder extends Component {

  constructor(props)
  {
    super(props);

  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOrders(id);
  }

  convertTimeStamp(timeStamp){
    return moment(timeStamp).format("hh:mm:ss A")
  }


  renderOrders() {
      if(this.props.businessOrders){
        console.log(this.props.businessOrders);
            return this.props.businessOrders.data.map((menuItem,index) => {
            console.log(menuItem)

          return (
            <div key={index}>

                      <div className="col-md-4 menu-cover-landing">

                        <Panel header={"Order # " + menuItem._id} bsStyle="success">

                            <BusinessDashboardOrderItem menuItem = {menuItem.orderList}/>

                           <div className = "text-center">
                            <button className="btn btn-sm addToOrderButton" type="button" onClick = {()=>this.props.updateOrder(this.props.business.data.placeId,menuItem._id,"Delivered")}> Delivered </button>
                          </div>

                       </Panel>

                 </div>


              </div>

          )
        })
      } else {
        return (
          <div>

          </div>
        )
      }


  }

  renderOrderStats() {
    if(this.props.businessOrders.data.length <= 0) {
      return (

        <div>
          <h4> Orders Received Today : - </h4>
          <h4> Last Order Received @: - </h4>
        </div>
      )

    } else {
      console.log(this.props.businessOrders);
      return (
        <div>
          <h4> Orders Received Today : {this.props.businessOrders.data.length}</h4>
          <h4> Last Order Received:  {this.convertTimeStamp(this.props.businessOrders.data[0].createdAt)}</h4>
        </div>
      )

    }
  }

  render() {
    if(!this.props.business) {
      return (
        <div>
          No Orders to Display
        </div>
      )
    } else {
      return (
        <div>
          <div className= "text-center">
              <h4 className = "dashboardHeader"> Order Dashboard </h4>
          </div>
          {this.renderOrders()}

        </div>
      )
    }

  }

}

function mapStateToProps({business,businessOrders}) {
  return { business,businessOrders };
}


export default withRouter(connect(mapStateToProps, { updateOrder,fetchOrders,displayNotification })(BusinessDashboardOrder));
