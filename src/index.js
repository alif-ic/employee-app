import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./components/Home"
import Contacts from "./components/Contacts";
import App from "./components/App";

const route = (<Router>
    <Switch>
        <Route exact component={Home} path="/"></Route>
        <Route exact component={Home} path="/home"></Route>
        <Route component={Contacts} path="/contacts"></Route>
        <Route component={App} path="/employee"></Route>
    </Switch>
</Router>);

ReactDOM.render(<App />, document.getElementById("app"))
