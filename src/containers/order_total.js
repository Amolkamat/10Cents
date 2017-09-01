import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenuItems,sendMessage } from "../actions";

class OrderTotal extends Component {

  populateMenu() {
    return( this.props.order.menuList.map((orderItem,index) => {
      console.log('Order Rendering!');
      console.log(orderItem);
      return(

      <tr key={index}>
        <td>

              {orderItem.id}



      </td>

      <td>
        {orderItem.name}

    </td>

    <td>
      $5.00

  </td>
    </tr>
      )

    }
  ) )
  }
  render() {
    {console.log(this.props.order)}
    if(this.props.order.menuList.length<=0){
      return(
        <div>
        <section id="order-total">
            <h2>Order Total</h2>

        </section>
    </div> )

      }
      else {
      return (
        <div className = "orderTable">
          <h2>Order Total</h2>
            <table className="table table-bordered table-hover">
              <th>Quantity</th>
              <th>Item</th>
              <th>Price</th>
                <tbody>
                    {this.populateMenu()}
                </tbody>
            </table>
        </div>
      )
    }



  }
}

function mapStateToProps({order}) {
  return { order };
}


export default connect(mapStateToProps, { getMenuItems ,sendMessage})(OrderTotal);
