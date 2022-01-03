import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class NavbarComponent extends React.Component {

    public handleLogout(): void {
        window.sessionStorage.clear();
    }

    render() {
        return(
            <nav className="navbar">
                <div className="logo-block">
                    <span className="logo">SPS Consultoria</span>
                </div>
                <div className="logout-block">
                    <NavLink onClick={this.handleLogout} className="logout" to='/login' style={{ textDecoration: 'none' }}>
                        Sair
                    </NavLink>
                </div>
            </nav>
        );
    }
}

export default NavbarComponent;