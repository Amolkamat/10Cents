import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrderChartData} from "../actions";

class BusinessDashboardOrderItem extends Component {
  constructor (props) {
    super(props);
  }
  populateMenuItem() {

    return( this.props.menuItem.map((orderItem,index) => {
      console.log('Order Rendering!');
      console.log(orderItem);
      return(

      <tr key={index}>

      <td>
        {orderItem.name}

    </td>
    <td>

          {orderItem.quantity}

  </td>

    </tr>
      )

    }
  ) )



  }

  render() {
    if(!this.props.menuItem) {
      return (
        <div>

        </div>
      )
    } else {
      return (

        <table className="table table-outer-bordered table-hover">

          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              
            </tr>
          </thead>

            <tbody>
                {this.populateMenuItem()}

            </tbody>
        </table>


      )
    }

  }

}

function mapStateToProps({business}) {
  return { business };
}


export default withRouter(connect(mapStateToProps, { getOrderChartData})(BusinessDashboardOrderItem));
