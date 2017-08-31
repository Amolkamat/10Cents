import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenuItems } from "../actions";

class PlaceOrders extends Component {

  componentDidMount() {
    const { id } = this.props;
    this.props.getMenuItems(id);
  }
  renderMenu() {
    return this.props.menu.map((menuItem) => {
      return (
        <div className="card col-lg-3 col-sm-4 col-md-3" key={menuItem.id}>

            <div className="card-block">
              <h4 className="card-title"> {menuItem.name}</h4>
              <p className="card-text">    </p>

           <p>
             <Link to={`/placeOrder/`}>
              Add to Order
            </Link>
          </p>
            </div>
          </div>

      )
    })
  }

  render() {
    if(this.props.menu.length > 0)
    {
      console.log(this.props.menu)
      return(

          <div className="container menuList">
            <div className = "row">
            {this.renderMenu()}

        </div>
      </div>
      )
    }
     else {
       return (
         <div> Loading.. </div>
       )
     }




  }
}


function mapStateToProps({menu}) {
  return { menu };
}

export default connect(mapStateToProps, { getMenuItems })(PlaceOrders);
