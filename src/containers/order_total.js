import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenuItems,sendMessage,removeMenuItemFromOrder } from "../actions";

class OrderTotal extends Component {


  displayCloseButton(index) {
    if (this.props.displayCloseButton) {
      return(
        <td>
          <button type="button" onClick={()=>this.props.removeMenuItemFromOrder(index)} className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
        </td>
      )
    } else {
      return (<td></td>)
    }
  }


  findTotal() {
    console.log("total being found");
    var total=0.10;
    var display="";
     this.props.order.menuList.map((orderItem,index) => {
      total= orderItem.price * orderItem.quantity+total;
      display=total.toFixed(2);
      if((display.substring(display.indexOf('.'))).length<3){
        display+='0';
      }
      else if(!display.indexOf('.')){
        display+='.00';
      }

    })
    return(
      <h3 className="text-center orderTotalHeading"> Total: ${display} </h3>

      )

  }


  populateMenu() {
    return( this.props.order.menuList.map((orderItem,index) => {
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
    <td>
      {(parseFloat(orderItem.price) * parseInt(orderItem.quantity)).toFixed(2)}

  </td>
    {this.displayCloseButton(index)}
    </tr>
      )

    }
  ) )
  }
  render() {

    if(this.props.order.menuList.length<=0){
      return(
        <div>
        <section id="order-total">


        </section>
    </div> )

      }
      else {
      return (
        <div className = "orderTable orderTotal-cover-landing">
              <h3 className="text-center orderTotalHeading"> Your Order </h3>
            <table className="table table-outer-bordered table-hover">

              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>
              </thead>

                <tbody>
                    {this.populateMenu()}
                    <tr>
                      <td>Convenience Fee</td>
                      <td> - </td>
                      <td>0.10</td>
                      <td></td>
                    </tr>
                </tbody>
            </table>
            {this.findTotal()}

        </div>
      )
    }



  }

}

function mapStateToProps({order}) {
  return { order };
}


export default connect(mapStateToProps, { getMenuItems ,sendMessage,removeMenuItemFromOrder})(OrderTotal);
