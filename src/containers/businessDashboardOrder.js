import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrders} from "../actions";
import moment from 'moment';


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
              <h3 className = "dashboardHeader"> Order Dashboard </h3>
          </div>
          {this.renderOrderStats()}

          <div className= "text-center">
            <button className = "btn btn-primary"> View Orders  </button>
          </div>
        </div>
      )
    }

  }

}

function mapStateToProps({business,businessOrders}) {
  return { business,businessOrders };
}


export default withRouter(connect(mapStateToProps, { fetchOrders})(BusinessDashboardOrder));
