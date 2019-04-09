import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login/Login';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Dashboard from './components/dashboard/Dashboard';

class AppRouting extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/header" component={Header} />
                <Route exact path="/nav" component={Nav} />
                <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        );
    }
}

export default AppRouting;
