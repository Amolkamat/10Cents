import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import reducers from "./reducers";
import PostsIndex from "./components/posts_index";
import PlaceOrders from "./components/order_view";
import PostsShow from "./components/posts_show";

import BusinessFinderSearch from "./components/business_finder_search"

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/placeOrder/:id" component={PlaceOrders} />
          <Route path="/" component={BusinessFinderSearch} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
