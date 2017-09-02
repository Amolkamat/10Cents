import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenuItems,sendMessage,addMenuToOrder } from "../actions";

class PlaceOrders extends Component {


  constructor(props)
  {
    super(props);
    this.state =
        {
          selectValue:1
        }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({selectValue:e.target.value});
  }

  componentDidMount() {
    const { id } = this.props;
    this.props.getMenuItems(id);
  }
  renderMenu() {
    return this.props.menu.map((menuItem) => {
      return (
        <div key={menuItem.id}>

                  <div className="col-md-6">
                 <div className="business-card">
                     <div className="media">
                       <div className = "media-body">
                         <h3 heading="media-heading"> {menuItem.name} </h3>

                         <div className = "col-md-6">
                           <select onChange={this.handleChange} >
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                             <option>6</option>
                             <option>7</option>
                             <option>8</option>
                             <option>9</option>
                             <option>10</option>
                            </select>
                         </div>
                         <div className = "col-md-6">
                          <button className="btn btn-primary addToOrderButton" type="button" onClick={()=>

                            this.props.addMenuToOrder(menuItem,this.state.selectValue)
                          } > Click </button>
                        </div>
                      </div>
                     </div>
                 </div>
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


export default connect(mapStateToProps, { getMenuItems,addMenuToOrder,sendMessage})(PlaceOrders);
