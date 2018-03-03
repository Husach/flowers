import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/index';
import Shop from './pages/shop/index';
import Details from './pages/details/index';

import Ourworks from './pages/ourworks';
import Contacts from './pages/contacts';
import About from './pages/about';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop/:category' component={Shop} />
          <Route exact path='/details/:id' component={Details} />
          <Route exact path='/about' component={About} />
          <Route exact path='/catalog' component={Ourworks} />
          <Route exact path='/contacts' component={Contacts} />
        </Switch>
      </div>
    );
  }
}

export default App;
