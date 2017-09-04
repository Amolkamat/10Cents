import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";
import SearchBar from "../containers/search_bar";
import BusinessList from "../containers/business_list";
import ShopList from "../containers/shop_list";
import Header from './header_view.js'



class BusinessFinderSearch extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div>
        <Header />
        <SearchBar />

          <BusinessList />
        <div className = "row googleShops">
            <ShopList />
        </div>

      </div>
    );
  }
}






export default BusinessFinderSearch;
