import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import reducers from "./redux/reducers/index";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import App from "./App";
import "./scss/base.scss";

const store = createStore(reducers, applyMiddleware(
    thunk,
    promise()
));

render (
    <MuiThemeProvider>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("root")
);
