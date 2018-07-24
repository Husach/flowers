import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import Home from "./container/index.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Delivery from "./pages/Delivery.jsx";
import OurWorks from "./pages/OurWorks.jsx";
import Contacts from "./pages/Contacts.jsx";
import Franchise from "./pages/Franchise.jsx";

import Order from "./container/Order.jsx";
import Details from "./container/Details.jsx";
import Content from "./components/Content.jsx";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop/:category" component={Content} />
                    <Route exact path="/shop/details/:id" component={Details} />
                    <Route exact path="/order/:id" component={Order} />
                    <Route exact path="/franchise" component={Franchise} />
                    <Route exact path="/delivery" component={Delivery} />
                    <Route exact path="/ourworks" component={OurWorks} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/error" component={Error} />
                    <Route path="*" component={Error} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(null, null)(App));
