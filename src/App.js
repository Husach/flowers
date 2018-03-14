import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/index';
import Shop from './pages/shop';
import Details from './pages/details';

import About from './pages/about';
import Order from './pages/order';
import Delivery from './pages/delivery';
import Ourworks from './pages/ourworks';
import Contacts from './pages/contacts';
import Franchise from './pages/franchise';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop/:category' component={Shop} />
          <Route exact path='/shop/details/:id' component={Details} />
          <Route exact path='/franchise' component={Franchise} />
          <Route exact path='/delivery' component={Delivery} />
          <Route exact path='/ourworks' component={Ourworks} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/about' component={About} />
          <Route exact path='/order/:id' component={Order} />
        </Switch>
      </div>
    );
  }
}

export default App;
