import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import reducers from "./reducers";

import PlaceOrders from "./components/order_view";

import BusinessLogin from "./components/business_login_view";
import BusinessRegistrationView from "./components/businessRegistrationView";
import BusinessFinderSearch from "./components/business_finder_search"
import BusinessSetupView from "./components/businessSetupView";
import PurchaseView from "./components/purchaseView";
import PurchaseSuccess from "./components/purchaseSuccess";
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(thunk,ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/businessLogin" component={BusinessLogin} />
          <Route path="/businessRegistration" component={BusinessRegistrationView} />
          <Route path="/placeOrder/:id" component={PlaceOrders} />
          <Route path="/businessSetup/:id" component={BusinessSetupView} />
          <Route path="/purchase/:id" component={PurchaseView} />
          <Route path="/purchaseSuccess/:id" component={PurchaseSuccess} />
          <Route path="/" component={BusinessFinderSearch} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
