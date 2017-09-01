import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenuItems,sendMessage,addMenuToOrder } from "../actions";

class PlaceOrders extends Component {

  componentDidMount() {
    const { id } = this.props;
    this.props.getMenuItems(id);
  }
  renderMenu() {
    return this.props.menu.map((menuItem) => {
      return (
        <div key={menuItem.id}>

            <div className="card-block">
              <h4 className="card-title"> {menuItem.name}</h4>
              <p className="card-text">    </p>

                  <button className="btn btn-success" onClick = {() => this.props.addMenuToOrder(menuItem)} type="button" >Add to Order</button>
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
        <input type="button" value="Send Message" onClick={() => this.props.sendMessage()} />
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

export default connect(mapStateToProps, { getMenuItems,addMenuToOrder,sendMessage})(PlaceOrders);
