import React, { Component } from 'react';
import Navbar from '../index/navbarIndex';


export default class Details extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(findReps('find'));
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="valign-wrapper" id='full-page'>
                    <div className="container">
                        <div className="row">
                            <div className="card col s4">
                                <div className="card-content">
                                    <span className="card-title center">All Reps</span>
                                    <hr/>
                                </div>
                            </div>
                            <div className="card col s7 offset-s1">
                                <div className="card-content">
                                    <span className="card-title center">Errors</span>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}