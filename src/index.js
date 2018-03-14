import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import './scss/base.scss';

//import reducers from './reducers';

//import { createStore } from 'redux';

const store = '';//createStore();

// import thunk from 'redux-thunk';
// import { Router } from 'react-router';
// import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router';
// import { createStore, applyMiddleware } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
//
// const store = createStore(reducers, composeWithDevTools(
//   applyMiddleware(thunk)
// ));
//
// const history = syncHistoryWithStore(browserHistory, store);

render(
  <MuiThemeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// <Provider store={store}>
//   <Router history={history}>
//   </Router>
// </Provider>
