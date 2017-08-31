import React, { Component } from "react";
import { connect } from "react-redux";
import { getMenuItems } from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";

class ShopList extends Component {

  renderList() {

  return this.props.googleShop.results.map((shop) => {
    console.log('Rendering Google Shop')
    return (
        <li

           className = "list-group-item">
           <Link to={'/posts/new'}>
            {shop.name}
          </Link>

        </li>
    )
  })
}

  render() {

    if (!this.props.googleShop.results) {
      return <div> </div>;
    }
 else {
   console.log('Shopping List')
   console.log(this.props.googleShop.results)
     return (
       <ul className = "list-group col-sm-4">
              {this.renderList()}
             </ul>
           )


 }
 }

}

function mapStateToProps({ googleShop}) {
  return { googleShop };
}

export default connect(mapStateToProps,{ getMenuItems })(ShopList);
