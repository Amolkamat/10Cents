import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenuItems,sendMessage,addMenuToOrder,displayNotification } from "../actions";
import {Panel } from 'react-bootstrap';
import Dropdown from 'react-dropdown'


class PlaceOrders extends Component {


  constructor(props)
  {
    super(props);
    this.state =
        {
          selectValue:1
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(menuItem){
    this.props.addMenuToOrder(menuItem,this.state.selectValue);
    this.props.displayNotification(true,'Menu Item Added','add-item-notification');


  }

  handleChange(e){
    console.log('New Drop down select');
    console.log(e)
    this.setState({selectValue:e.value});
  }

  componentDidMount() {
    const { id } = this.props;
    this.props.getMenuItems(id);
  }
  renderMenu() {
    return this.props.menu.data.menuList.map((menuItem,index) => {
      var options = [
'1', '2', '3','4','5','6','7','8','9','10'
];
const defaultOption = options[0];
      return (

        <div key={index}>



                  <div className="col-md-6 col-sm-6 col-xs-6 menu-cover-landing">

                    <Panel header={menuItem.item + "   $" + menuItem.price} bsStyle="success">


                      <div className = "row">
                      <div className = "col-md-6 col-sm-6 col-xs-6">
                        <Dropdown options={options} onChange={this.handleChange} value={defaultOption} placeholder="Select an option" />
                      </div>
                      <div className = "col-md-6 col-sm-6 col-xs-6">
                       <button className="btn btn-sm addToOrderButton" type="button" onClick={()=>
                         this.handleSubmit(menuItem)

                       } > Add To Order </button>
                     </div>
                      </div>

        </Panel>


             </div>

          </div>

      )
    })
  }

  render() {
    if(this.props.menu.data)
    {
      console.log(this.props.menu)
      return(

          <div className="menuList">

            {this.renderMenu()}


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


export default connect(mapStateToProps, { getMenuItems,addMenuToOrder,sendMessage,displayNotification})(PlaceOrders);
