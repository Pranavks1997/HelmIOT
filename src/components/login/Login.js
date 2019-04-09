import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Textinput, Button } from '../helpers/helper';
import './Login.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class Login extends Component {
	render() {
		return (
				<div className="main-container">
					<div className="login-container">
							<i class="fa fa-helmet-battle"></i>
							<h3 class="login-head">LOG IN</h3>
							<Textinput icon_value="fa fa-user" placeholder_value='Username'/>
							<Textinput icon_value="fa fa-lock" placeholder_value='Password'/>
							<Link to="/dashboard"><Button value="Login" /></Link>
					</div>
				</div>
		);
	}
}


export default Login;
