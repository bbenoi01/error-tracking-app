import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar fixed-top'>
                <div className="nav-wrapper">
                    <a href="/" className='brand-logo'style={{paddingLeft: '15px'}}>Error Tracker</a>
                    <ul className="right hide-onmed-and-down" id='nav-mobile'>
                        <li><a href="#">Details</a></li>
                        <li><a href="#">Admin</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}