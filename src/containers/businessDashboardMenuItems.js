import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrderChartData} from "../actions";

class BusinessDashboardProfile extends Component {

  populateMenu(menuObject) {

    if(menuObject && menuObject.length > 0)
    {
      return(menuObject.map((orderItem,index) => {

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
    else {
      return (
        <tr>
          <td></td>
          <td></td>
        </tr>
      )
    }



  }


  render() {
    if(!this.props.uploadedMenu) {
        if(!this.props.business) {
          return (
            <div>
              <div className = "text-center" >
                <h4 className="dashboardHeader"> No items </h4>
              </div>
            </div>
          )
        } else {
          return(
            <div>
              <div className = "text-center" >
              <h4 className="dashboardHeader"> Items Posted for Sale </h4>
              </div>
              <table className="table">

                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>
                </thead>

                  <tbody>
                      {this.populateMenu(this.props.business.data.menuList)}
                  </tbody>
              </table>

            </div>
          )

        }
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
                  {this.populateMenu(this.props.uploadedMenu.data.menuList)}
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
