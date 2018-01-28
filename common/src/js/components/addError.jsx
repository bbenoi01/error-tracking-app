import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../index/navbarIndex';
import {
    errorToggle
} from '../actions/addErrorActions';

export default class AddError extends Component {
    constructor(props) {
        super(props);

        this.handleErrorToggle = this.handleErrorToggle.bind(this);
    }

    handleErrorToggle(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(errorToggle(value));
    }

    render() {
        const { errorType } = this.props;

         if (errorType == 'Device Return') {
            return (
                <div>
                    <Navbar />
                    <div className="container valign-wrapper" id='full-page'>    
                        <div className="container">
                            <div className="row">
                                <div className="card col s8 offset-s2">
                                    <div className="card-content">
                                        <span className="card-title center"><b>Device Return Error</b></span>
                                        <hr/>
                                        <br/>
                                        <form action="">
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className='browser-default' name="error-type" id="error-type" value={errorType} onChange={this.handleErrorToggle}>
                                                        <option value="" disabled>Choose your option</option>
                                                        <option value="Device Return" selected>Device Return</option>
                                                        <option value="Accessory Return">Accessory Return</option>
                                                        <option value="Missing Signature">Missing Signature</option>
                                                        <option value="Trade-In">Trade-In</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <input className='validate' type="date" name='transactionDate' id='transactionDate' required/>
                                                <label htmlFor="transactionDate" className='center-align'>Transaction Date</label>
                                            </div>
                                            <div>
                                                <input className='validate' type="text" name='orderNumber' id='orderNumber' required/>
                                                <label htmlFor="orderNumber">Order Number</label>
                                            </div>
                                            <div>
                                                <input type="text" name='sku' id='sku'/>
                                                <label htmlFor="sku">SKU</label>
                                            </div>
                                            <div>
                                                <input type="text" name='rep' id='rep'/>
                                                <label htmlFor="rep">Rep</label>
                                            </div>
                                            <div>
                                                <select className='browser-default' name="issue" id="issue" required>
                                                    <option value="" disabled selected>Choose issue</option>
                                                    <option value="Missing">Missing</option>
                                                    <option value="Damaged">Damaged</option>
                                                    <option value="Incorrect Item">Incorrect Item</option>
                                                    <option value="Missing Original Receipt">Missing Original Receipt</option>
                                                    <option value="Missing Return Receipt">Missing Return Receipt</option>
                                                    <option value="Missing REDD Form">Missing REDD Form</option>
                                                    <option value="Missing Status">Missing Status</option>
                                                    <option value="Device Not Reset">Device Not Reset</option>
                                                </select>
                                            </div>
                                            <div>
                                                <input type="text" name='approvingManager' id='approvingManager'/>
                                                <label htmlFor="approvingManager">Approving Manager</label>
                                            </div>
                                            <div>
                                                <textarea className="materialize-textarea" id='notes'></textarea>
                                                <label htmlFor="notes">Notes</label>
                                            </div>
                                            <div className="card-action center">
                                                <button className="btn red ">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            )
        } else if (errorType == 'Accessory Return') {
            return (
                <div>
                    <Navbar />
                    <div className="container valign-wrapper" id='full-page'>
                        <div className="container">
                            <div className="row">
                                <div className="card col s8 offset-s2">
                                    <div className="card-content">
                                        <span className="card-title center"><b>Accessory Return Error</b></span>
                                        <hr/>
                                        <br/>
                                        <form action="">
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className='browser-default' name="error-type" id="error-type" value={errorType} onChange={this.handleErrorToggle}>
                                                        <option value="" disabled>Choose your option</option>
                                                        <option value="Device Return">Device Return</option>
                                                        <option value="Accessory Return" selected>Accessory Return</option>
                                                        <option value="Missing Signature">Missing Signature</option>
                                                        <option value="Trade-In">Trade-In</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <input className='datepicker' type="text" name='transactionDate' id='transactionDate'/>
                                                <label htmlFor="transactionDate">Transaction Date</label>
                                            </div>
                                            <div>
                                                <input type="text" name='orderNumber' id='orderNumber'/>
                                                <label htmlFor="orderNumber">Order Number</label>
                                            </div>
                                            <div>
                                                <input type="text" name='sku' id='sku'/>
                                                <label htmlFor="sku">SKU</label>
                                            </div>
                                            <div>
                                                <input type="text" name='rep' id='rep'/>
                                                <label htmlFor="rep">Rep</label>
                                            </div>
                                            <div>
                                                <select className='browser-default' name="issue" id="issue">
                                                    <option value="" disabled selected>Choose issue</option>
                                                    <option value="Missing">Missing</option>
                                                    <option value="Damaged">Damaged</option>
                                                    <option value="Incorrect Item">Incorrect Item</option>
                                                    <option value="Missing Return Receipt">Missing Return Receipt</option>
                                                    <option value="Missing Status">Missing Status</option>
                                                </select>
                                            </div>
                                            <div>
                                                <textarea className="materialize-textarea" id='notes'></textarea>
                                                <label htmlFor="notes">Notes</label>
                                            </div>
                                            <div className="card-action center">
                                                <button className="btn red ">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            )
        } else if (errorType == 'Missing Signature') {
            return (
                <div>
                    <Navbar />
                    <div className="container valign-wrapper" id='full-page'>
                        <div className="container">
                            <div className="row">
                                <div className="card col s8 offset-s2">
                                    <div className="card-content">
                                        <span className="card-title center"><b>Missing Signature</b></span>
                                        <hr/>
                                        <br/>
                                        <form action="">
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className='browser-default' name="error-type" id="error-type" value={errorType} onChange={this.handleErrorToggle}>
                                                        <option value="" disabled>Choose your option</option>
                                                        <option value="Device Return">Device Return</option>
                                                        <option value="Accessory Return">Accessory Return</option>
                                                        <option value="Missing Signature" selected>Missing Signature</option>
                                                        <option value="Trade-In">Trade-In</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <input className='datepicker' type="text" name='transactionDate' id='transactionDate'/>
                                                <label htmlFor="transactionDate">Transaction Date</label>
                                            </div>
                                            <div>
                                                <input type="text" name='orderNumber' id='orderNumber'/>
                                                <label htmlFor="orderNumber">Order Number</label>
                                            </div>
                                            <div>
                                                <input type="text" name='installmentAgreement' id='installmentAgreement'/>
                                                <label htmlFor="installmentAgreement">Installment Agreement</label>
                                            </div>
                                            <div>
                                                <input type="text" name='rep' id='rep'/>
                                                <label htmlFor="rep">Rep</label>
                                            </div>
                                            <div>
                                                <select className='browser-default' name="issue" id="issue">
                                                    <option value="" disabled selected>Choose issue</option>
                                                    <option value="Installment Agreement">Installment Agreement</option>
                                                    <option value="Activation">Activation</option>
                                                    <option value="Upgrade">Upgrade</option>
                                                </select>
                                            </div>
                                            <div>
                                                <textarea className="materialize-textarea" id='notes'></textarea>
                                                <label htmlFor="notes">Notes</label>
                                            </div>
                                            <div className="card-action center">
                                                <button className="btn red">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>              
            )
        } else if (errorType == 'Trade-In') {
            return (
                <div>
                    <Navbar />
                    <div className="container valign-wrapper" id='full-page'>
                        <div className="container">
                            <div className="row">
                                <div className="card col s8 offset-s2">
                                    <div className="card-content">
                                        <span className="card-title center"><b>Trade-In Error</b></span>
                                        <hr/>
                                        <br/>
                                        <form action="">
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className='browser-default' name="error-type" id="error-type" value={errorType} onChange={this.handleErrorToggle}>
                                                        <option value="" disabled>Choose your option</option>
                                                        <option value="Device Return">Device Return</option>
                                                        <option value="Accessory Return">Accessory Return</option>
                                                        <option value="Missing Signature">Missing Signature</option>
                                                        <option value="Trade-In" selected>Trade-In</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <input className='datepicker' type="text" name='transactionDate' id='transactionDate'/>
                                                <label htmlFor="transactionDate">Transaction Date</label>
                                            </div>
                                            <div>
                                                <input type="text" name='orderNumber' id='orderNumber'/>
                                                <label htmlFor="orderNumber">Order Number</label>
                                            </div>
                                            <div>
                                                <input type="text" name='sku' id='sku'/>
                                                <label htmlFor="sku">SKU</label>
                                            </div>
                                            <div>
                                                <input type="text" name='rep' id='rep'/>
                                                <label htmlFor="rep">Rep</label>
                                            </div>
                                            <div>
                                                <select className='browser-default' name="issue" id="issue">
                                                    <option value="" disabled selected>Choose issue</option>
                                                    <option value="Missing">Missing</option>
                                                    <option value="Device Not Reset">Device Not Reset</option>
                                                    <option value="Incorrect Device">Incorrect Device</option>
                                                    <option value="Missing Trade Receipt">Missing Trade Receipt</option>
                                                </select>
                                            </div>
                                            <div>
                                                <textarea className="materialize-textarea" id='notes'></textarea>
                                                <label htmlFor="notes">Notes</label>
                                            </div>
                                            <div className="card-action center">
                                                <button className="btn red">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            )
        } else {
            return (
                <div>
                    <Navbar />
                    <div className="container valign-wrapper" id='full-page'>
                        <div className="container">
                            <div className="row">
                                <div className="card col s8 offset-s2" style={{paddingBottom: '40px'}}>
                                    <div className="card-content">
                                        <span className="card-title center"><b>Add Error</b></span>
                                        <hr/>
                                        <br/>
                                        <form action="">
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className='browser-default' name="error-type" id="error-type" value={errorType} onChange={this.handleErrorToggle}>
                                                        <option value="" selected disabled>Choose your option</option>
                                                        <option value="Device Return">Device Return</option>
                                                        <option value="Accessory Return">Accessory Return</option>
                                                        <option value="Missing Signature">Missing Signature</option>
                                                        <option value="Trade-In">Trade-In</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}