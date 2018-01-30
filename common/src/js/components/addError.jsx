import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../index/navbarIndex';
import {
    errorToggle,
    issueToggle,
    repToggle,
    managerToggle,
    updateDate,
    updateOrderNumber,
    updateSku,
    updateInstallment,
    updateNotes,
    addError
} from '../actions/addErrorActions';

export default class AddError extends Component {
    constructor(props) {
        super(props);

        this.handleErrorToggle = this.handleErrorToggle.bind(this);
        this.handleRepToggle = this.handleRepToggle.bind(this);
        this.handleManagerToggle = this.handleManagerToggle.bind(this);
        this.handleDateInput = this.handleDateInput.bind(this);
        this.handleOrderNumberInput = this.handleOrderNumberInput.bind(this);
        this.handleSkuInput = this.handleSkuInput.bind(this);
        this.handleInstallmentInput = this.handleInstallmentInput.bind(this);
        this.handleNotesInput = this.handleNotesInput.bind(this);
        this.handleIssueToggle = this.handleIssueToggle.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleErrorToggle(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(errorToggle(value));
    }

    handleRepToggle(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(repToggle(value));
    }

    handleManagerToggle(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(managerToggle(value));
    }

    handleIssueToggle(e) {
        const { dispatch } = this.props;
        const { value } =e.target;
        dispatch(issueToggle(value));
    }

    handleDateInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDate(value));
    }

    handleOrderNumberInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateOrderNumber(value));
    }

    handleSkuInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSku(value));
    }

    handleInstallmentInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateInstallment(value));
    }

    handleNotesInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateNotes(value));
    }

    handleClick(e) {
        e.preventDefault();
        const { dispatch, errorType, issue, employeeName, approvingManager, transactionDate, orderNumber, sku, installmentAgreement, notes } = this.props;
        dispatch(addError(errorType, issue, employeeName, approvingManager, transactionDate, orderNumber, sku, installmentAgreement, notes));
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
                                        <span className="card-title center"><b>Device Return</b></span>
                                        <hr/>
                                        <br/>
                                        <form key="device" onSubmit={this.handleClick}>
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleIssueToggle} required>
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
                                                    <br/>
                                                </div>
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleRepToggle} required>
                                                        <option value="" disabled selected>Rep</option>
                                                        <option value="Tom Jones">Tom Jones</option>
                                                        <option value="Marcus Thomas">Marcus Thomas</option>
                                                        <option value="Jeff Sinclair">Jeff Sinclair</option>
                                                        <option value="R. Kelley">R. Kelley</option>
                                                    </select>
                                                    <br/>
                                                </div>
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleManagerToggle} >
                                                        <option value="" disabled selected>Approving Manager</option>
                                                        <option value="Tom Jones">Tom Jones</option>
                                                        <option value="Marcus Thomas">Marcus Thomas</option>
                                                        <option value="Jeff Sinclair">Jeff Sinclair</option>
                                                        <option value="R. Kelley">R. Kelley</option>                                                        
                                                    </select>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div>
                                                <input className='validate' type="date" name='transactionDate' id='transactionDate' onChange={this.handleDateInput} required/>
                                                <label htmlFor="transactionDate" className='center-align'>Transaction Date</label>
                                            </div>
                                            <div>
                                                <input className='validate' type="text" name='orderNumber' id='orderNumber' onChange={this.handleOrderNumberInput} required/>
                                                <label htmlFor="orderNumber">Order Number</label>
                                            </div>
                                            <div>
                                                <input type="text" name='sku' id='sku' onChange={this.handleSkuInput} />
                                                <label htmlFor="sku">SKU</label>
                                            </div>
                                            <div>
                                                <textarea className="materialize-textarea" id='notes' onChange={this.handleNotesInput} ></textarea>
                                                <label htmlFor="notes">Notes</label>
                                                <br/>
                                            </div>
                                            <div className="card-action center">
                                                <a href="#/"><button className="btn red ">Submit</button></a>
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
                                        <span className="card-title center"><b>Accessory Return</b></span>
                                        <hr/>
                                        <br/>
                                        <form key="accessory" onSubmit={this.handleClick}>
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleIssueToggle} required>
                                                        <option value="" disabled selected>Choose issue</option>
                                                        <option value="Missing">Missing</option>
                                                        <option value="Damaged">Damaged</option>
                                                        <option value="Incorrect Item">Incorrect Item</option>
                                                        <option value="Missing Return Receipt">Missing Return Receipt</option>
                                                        <option value="Missing Status">Missing Status</option>
                                                    </select>
                                                    <br/>
                                                </div>
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleRepToggle} required>
                                                        <option value="" disabled selected>Rep</option>
                                                        <option value="Tom Jones">Tom Jones</option>
                                                        <option value="Marcus Thomas">Marcus Thomas</option>
                                                        <option value="Jeff Sinclair">Jeff Sinclair</option>
                                                        <option value="R. Kelley">R. Kelley</option>
                                                    </select>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div>
                                                <input className='validate' type="date" name='transactionDate' id='transactionDate' onChange={this.handleDateInput} required/>
                                                <label htmlFor="transactionDate" className='center-align'>Transaction Date</label>
                                            </div>
                                            <div>
                                                <input className='validate' type="text" name='orderNumber' id='orderNumber' onChange={this.handleOrderNumberInput} required/>
                                                <label htmlFor="orderNumber">Order Number</label>
                                            </div>
                                            <div>
                                                <input type="text" name='sku' id='sku' onChange={this.handleSkuInput} />
                                                <label htmlFor="sku">SKU</label>
                                            </div>
                                            <div>
                                                <textarea className="materialize-textarea" id='notes' onChange={this.handleNotesInput} ></textarea>
                                                <label htmlFor="notes">Notes</label>
                                                <br/>
                                            </div>
                                            <div className="card-action center">
                                                <a href="#/"><button className="btn red ">Submit</button></a>
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
                                        <form key="signature" onSubmit={this.handleClick}>
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleIssueToggle} required>
                                                        <option value="" disabled selected>Choose issue</option>
                                                        <option value="DP">DP</option>
                                                        <option value="Activation">Activation</option>
                                                        <option value="Upgrade">Upgrade</option>
                                                    </select>
                                                    <br/>
                                                </div>
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleRepToggle} required>
                                                        <option value="" disabled selected>Rep</option>
                                                        <option value="Tom Jones">Tom Jones</option>
                                                        <option value="Marcus Thomas">Marcus Thomas</option>
                                                        <option value="Jeff Sinclair">Jeff Sinclair</option>
                                                        <option value="R. Kelley">R. Kelley</option>
                                                    </select>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div>
                                                <input className='validate' type="date" name='transactionDate' id='transactionDate' onChange={this.handleDateInput} required/>
                                                <label htmlFor="transactionDate" className='center-align'>Transaction Date</label>
                                            </div>
                                            <div>
                                                <input className='validate' type="text" name='orderNumber' id='orderNumber' onChange={this.handleOrderNumberInput} required/>
                                                <label htmlFor="orderNumber">Order Number</label>
                                            </div>
                                            <div>
                                                <input type="text" name='sku' id='installment' onChange={this.handleInstallmentInput} />
                                                <label htmlFor="installment">Installment Agreement</label>
                                            </div>
                                            <div>
                                                <textarea className="materialize-textarea" id='notes' onChange={this.handleNotesInput} ></textarea>
                                                <label htmlFor="notes">Notes</label>
                                                <br/>
                                            </div>
                                            <div className="card-action center">
                                                <a href="#/"><button className="btn red ">Submit</button></a>
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
                                        <span className="card-title center"><b>Trade-In</b></span>
                                        <hr/>
                                        <br/>
                                        <form key="trade" onSubmit={this.handleClick}>
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleIssueToggle} required>
                                                        <option value="" disabled selected>Choose issue</option>
                                                        <option value="Missing">Missing</option>
                                                        <option value="Device Not Reset">Device Not Reset</option>
                                                        <option value="Incorrect Device">Incorrect Device</option>
                                                        <option value="Missing Trade Receipt">Missing Trade Receipt</option>
                                                    </select>
                                                    <br/>
                                                </div>
                                                <div className="col s12">
                                                    <select className="browser-default" onChange={this.handleRepToggle} required>
                                                        <option value="" disabled selected>Rep</option>
                                                        <option value="Tom Jones">Tom Jones</option>
                                                        <option value="Marcus Thomas">Marcus Thomas</option>
                                                        <option value="Jeff Sinclair">Jeff Sinclair</option>
                                                        <option value="R. Kelley">R. Kelley</option>
                                                    </select>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div>
                                                <input className='validate' type="date" name='transactionDate' id='transactionDate' onChange={this.handleDateInput} required/>
                                                <label htmlFor="transactionDate" className='center-align'>Transaction Date</label>
                                            </div>
                                            <div>
                                                <input className='validate' type="text" name='orderNumber' id='orderNumber' onChange={this.handleOrderNumberInput} required/>
                                                <label htmlFor="orderNumber">Order Number</label>
                                            </div>
                                            <div>
                                                <input type="text" name='sku' id='sku' onChange={this.handleSkuInput} />
                                                <label htmlFor="sku">SKU</label>
                                            </div>
                                            <div>
                                                <textarea className="materialize-textarea" id='notes' onChange={this.handleNotesInput} ></textarea>
                                                <label htmlFor="notes">Notes</label>
                                                <br/>
                                            </div>
                                            <div className="card-action center">
                                                <a href="#/"><button className="btn red ">Submit</button></a>
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
                                        <form key="add">
                                            <div className="container">
                                                <div className="col s12">
                                                    <select className='browser-default' onChange={this.handleErrorToggle}>
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