import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import {
    findErrors,
    findUsers
} from './actions/appAction';
import AddError from './index/addErrorIndex';
import Admin from './index/adminIndex';
import Details from './index/detailIndex';

export default class App extends Component {


    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(findErrors());
        dispatch(findUsers());   
    }

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