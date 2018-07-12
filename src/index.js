import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import reducers from "./redux/reducers/index";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./App";
import "./scss/base.scss";

const store = createStore(reducers);
//const App = withRouter(App);

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
