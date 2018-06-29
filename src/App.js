import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/index.jsx";
import Shop from "./pages/shop.jsx";
import About from "./pages/about.jsx";
import Order from "./pages/order.jsx";
import Error from "./pages/error.jsx";
import Details from "./pages/details.jsx";
import Delivery from "./pages/delivery.jsx";
import OurWorks from "./pages/ourworks.jsx";
import Contacts from "./pages/contacts.jsx";
import Franchise from "./pages/franchise.jsx";

class App extends Component {

  render() {    
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop/:category" component={Shop} />
          <Route exact path="/shop/details/:id" component={Details} />
          <Route exact path="/franchise" component={Franchise} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/ourworks" component={OurWorks} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/order/:id" component={Order} />
          <Route exact path="/error" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
