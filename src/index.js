import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./App";
import "./scss/base.scss";

import { Provider } from "react-redux";
import { createStore } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./redux/reducers/index";

const store = createStore(reducers);

render (
    <MuiThemeProvider>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </MuiThemeProvider>,
    document.getElementById("root")
);
