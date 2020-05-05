import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "../App";
import ProblemDetails from "../page/programming/ProblemList";
import About from "../page/About";
import history from './history';
import Portfolio from "../page/Portfolio";
import Projects from "../page/Projects"
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/ProblemList" component={ProblemDetails} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/Projects" component={Projects} />

                </Switch>
            </Router>
        )
    }
}