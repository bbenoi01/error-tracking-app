import React, { Component } from 'react';
import Navbar from '../index/navbarIndex';


export default class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { errors, users } = this.props;

        return (
            <div>
                <Navbar />
                <div className="valign-wrapper" id='full-page'>
                    <div className="container">
                        <div className="row">
                            <div className="card col s5">
                                <div className="card-content">
                                    <span className="card-title center"><b>All Reps</b></span>
                                    <hr/>
                                    <div className="card-content" id='list'>
                                        {users.map(user =>
                                            <div className="col s12" key={user.id}>
                                                <div className="card">
                                                    <div style={{paddingBottom: '0'}} className="card-content">
                                                        <div>
                                                            <p><b>Employee Id:</b> {user.employeeId}</p>
                                                            <p><b>Name:</b> {user.firstName} {user.lastName}</p>                                                            
                                                        </div>
                                                        <div className="card-action center">
                                                            <button className="btn red">Filter</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="card col s6 offset-s1">
                                <div className="card-content">
                                    <span className="card-title center"><b>Errors</b></span>
                                    <hr/>
                                    <div className="card-content" id='list'>
                                        {errors.filter(error => error.errorType === 'Device Return').map(error =>
                                            <div className="col s12" key={error.id}>
                                                <div className="card">
                                                    <div style={{paddingBottom: '0'}} className="card-content">
                                                        <div>
                                                            <p><b>Error Type:</b> {error.errorType}</p>
                                                            <p><b>Transaction Date:</b> {error.transactionDate}</p>
                                                            <p><b>Order #:</b> {error.orderNumber}</p>
                                                            <p><b>Sku:</b> {error.sku}</p>
                                                            <p><b>Rep:</b> {error.employeeName}</p>
                                                            <p><b>Issue:</b> {error.issue}</p>
                                                            <p><b>MGR Sign Off:</b> {error.approvingManager}</p>
                                                            <p><b>Notes:</b> {error.notes}</p>
                                                        </div>
                                                        <div className="card-action center">
                                                            <button className="btn red">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {errors.filter(error => error.errorType === 'Accessory Return').map(error =>
                                            <div className="col s12" key={error.id}>
                                                <div className="card">
                                                    <div style={{paddingBottom: '0'}} className="card-content">
                                                        <div>
                                                            <p><b>Error Type:</b> {error.errorType}</p>
                                                            <p><b>Transaction Date:</b> {error.transactionDate}</p>
                                                            <p><b>Order #:</b> {error.orderNumber}</p>
                                                            <p><b>Sku:</b> {error.sku}</p>
                                                            <p><b>Rep:</b> {error.employeeName}</p>
                                                            <p><b>Issue:</b> {error.issue}</p>
                                                            <p><b>Notes:</b> {error.notes}</p>
                                                        </div>
                                                        <div className="card-action center">
                                                            <button className="btn red">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {errors.filter(error => error.errorType === 'Missing Signature').map(error =>
                                            <div className="col s12" key={error.id}>
                                                <div className="card">
                                                    <div style={{paddingBottom: '0'}} className="card-content">
                                                        <div>
                                                            <p><b>Error Type:</b> {error.errorType}</p>
                                                            <p><b>Transaction Date:</b> {error.transactionDate}</p>
                                                            <p><b>Order #:</b> {error.orderNumber}</p>
                                                            <p><b>Installment Agreement:</b> {error.installmentAgreement}</p>
                                                            <p><b>Rep:</b> {error.employeeName}</p>
                                                            <p><b>Issue:</b> {error.issue}</p>
                                                            <p><b>Notes:</b> {error.notes}</p>
                                                        </div>
                                                        <div className="card-action center">
                                                            <button className="btn red">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {errors.filter(error => error.errorType === 'Trade-In').map(error =>
                                            <div className="col s12" key={error.id}>
                                                <div className="card">
                                                    <div style={{paddingBottom: '0'}} className="card-content">
                                                        <div>
                                                            <p><b>Error Type:</b> {error.errorType}</p>
                                                            <p><b>Transaction Date:</b> {error.transactionDate}</p>
                                                            <p><b>Order #:</b> {error.orderNumber}</p>
                                                            <p><b>Sku:</b> {error.sku}</p>
                                                            <p><b>Rep:</b> {error.employeeName}</p>
                                                            <p><b>Issue:</b> {error.issue}</p>
                                                            <p><b>Notes:</b> {error.notes}</p>
                                                        </div>
                                                        <div className="card-action center">
                                                            <button className="btn red">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}