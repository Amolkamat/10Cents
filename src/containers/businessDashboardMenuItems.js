import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrderChartData} from "../actions";

class BusinessDashboardProfile extends Component {

  populateMenu() {

    return(this.props.uploadedMenu.data.menuList.map((orderItem,index) => {

      return(

      <tr key={index}>

      <td>
        {orderItem.item}

    </td>
    <td>

          {orderItem.price}

  </td>

    </tr>
      )

    }
  ) )
  }


  render() {
    if(!this.props.uploadedMenu) {
      return (
        <div>
          <div className = "text-center" >
            <h4 className="dashboardHeader"> No items </h4>
          </div>
        </div>
      )
    }
    else {
        console.log('Menu Item Posted')
        return (
        <div>
          <div className = "text-center" >
          <h4 className="dashboardHeader"> Available Menu Items </h4>
          </div>
          <table className="table table-borderless">

            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>

              <tbody>
                  {this.populateMenu()}
              </tbody>
          </table>

        </div>
      )
    }

  }

}

function mapStateToProps({business,uploadedMenu}) {
  return { business,uploadedMenu };
}


export default withRouter(connect(mapStateToProps, null)(BusinessDashboardProfile));
