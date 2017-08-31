import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";
import SearchBar from "../containers/search_bar";
import BusinessList from "../containers/business_list";
import ShopList from "../containers/shop_list";


class BusinessFinderSearch extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div>
        <SearchBar />
        <BusinessList />
        <ShopList />
      </div>
    );
  }
}

export default BusinessFinderSearch
