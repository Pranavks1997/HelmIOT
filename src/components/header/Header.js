import React, { Component } from 'react';
import './Header.css';
import ProjectLogo from '../../assets/final-year-project-logo-3.png';
class Header extends Component {
    render() {
		return (
            <div className="main-header">
            <img class="project-logo" src={ProjectLogo} alt="Logo" />
            
            </div>
        );
    }
}
export default Header;