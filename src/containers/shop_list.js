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

        <div className="card col-lg-3 col-sm-4 col-md-3" key={shop.id}>

            <div className="card-block">
              <h4 className="card-title"> {shop.name}</h4>
              <p className="card-text">    </p>
                {shop.hasOwnProperty('opening_hours') ?
                            shop.opening_hours.open_now ?
                            <div className="open-now"><i className="fa fa-clock-o" aria-hidden="true"></i> Open now!</div>
                            : <div className="closed-now"><i className="fa fa-clock-o" aria-hidden="true"></i> Currently closed</div>
                        : ''}

           <p>
             <Link to={`/placeOrder/${shop.id}`}>

              Place Order
            </Link>
          </p>
            </div>
          </div>




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

         <div className="container shopList">
           <div className = "row">
        {this.renderList()}

        </div>
      </div>

           )


 }
 }

}

function mapStateToProps({ googleShop}) {
  return { googleShop };
}

export default connect(mapStateToProps,{ getMenuItems })(ShopList);
