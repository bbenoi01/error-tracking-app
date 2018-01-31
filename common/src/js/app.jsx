import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AddError from './index/addErrorIndex';
import Admin from './index/adminIndex';
import Details from './index/detailIndex';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={AddError}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/details' component={Details}/>
                </div>
            </Router>
        );
    }
}