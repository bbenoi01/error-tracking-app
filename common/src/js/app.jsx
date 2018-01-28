import React, { Component } from 'react';
import Navbar from './index/navbarIndex';
import AddError from './index/addErrorIndex';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container valign-wrapper" id='full-page'>
                    <AddError />
                </div>
            </div>
        );
    }
}