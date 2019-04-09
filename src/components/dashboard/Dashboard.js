import React, { Component } from 'react';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import './Dashboard.css';

class Dashboard extends Component {
    render(){
        return(
            <div>
            <Header />
            <Nav />
            </div>
        );
    }
}
export default Dashboard;

