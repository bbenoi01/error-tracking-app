import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar fixed-top'>
                <div className="nav-wrapper">
                    <a href="/" className='brand-logo'style={{paddingLeft: '15px'}}>Error Tracker</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#/details">Details</a></li>
                        <li><a href="#/admin">Admin</a></li>
                    </ul>
                    
                    <ul className="side-nav" id='nav-mobile'>
                        <li><a href="#/details">Details</a></li>
                        <li><a href="#/admin">Admin</a></li>
                    </ul>
                    <a href="#" className='button-collapse' data-activates='nav-mobile'><i className="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}