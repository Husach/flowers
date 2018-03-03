import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/index';
import Shop from './pages/shop/index';
import Sweets from './pages/category/sweets';
import Bouquet from './pages/category/bouquet';

import Details from './pages/details/index';
import About from './pages/about';
import Catalog from './pages/catalog/index';
import Contacts from './pages/contacts/index';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:category' component={Shop} />

          <Route exact path='/details/:id' component={Details} />
          
          <Route exact path='/about' component={About} />
          <Route exact path='/catalog' component={Catalog} />
          <Route exact path='/contacts' component={Contacts} />
        </Switch>
      </div>
    );
  }
}

export default App;
