import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import About from './pages/about/index';
import Catalog from './pages/catalog/index';
import Contacts from './pages/contacts/index';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/catalog' component={Catalog} />
          <Route exact path='/contacts' component={Contacts} />
        </Switch>
      </div>
    );
  }
}

export default App;
