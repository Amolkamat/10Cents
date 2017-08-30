import React, { Component } from "react";
import { connect } from "react-redux";
import BusinessListItem from "../components/business_list_item"
import { getMenuItems } from "../actions";
import { Link } from "react-router-dom";


class BusinessList extends Component {

  renderList() {

  return this.props.shop.map((shop) => {
    return (
        <li key={shop.id}

           className = "list-group-item">
           <Link to={'/posts/new'}>
            Hello
          </Link>
          {shop.name}
        </li>
    )
  })
}

  render() {

    if (this.props.shop.length <=0) {
      return <div> </div>;
    }
 else {

     return (
       <ul className = "list-group col-sm-4">
               {this.renderList()}
             </ul>
           )


 }
 }

}

function mapStateToProps({ shop}) {
  return { shop };
}

export default connect(mapStateToProps,{ getMenuItems })(BusinessList);
