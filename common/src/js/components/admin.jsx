import React, { Component } from 'react';
import Navbar from '../index/navbarIndex';
import {Input} from 'react-materialize';
import {
    addEmployeeToggle,
    updateEmployeeId,
    updateFirstName,
    updateLastName,
    addEmployee,
} from '../actions/adminActions';

export default class Admin extends Component {
    constructor(props) {
        super(props);

        this.handleAddEmployeeToggle = this.handleAddEmployeeToggle.bind(this);
        this.handleEmployeeIdInput = this.handleEmployeeIdInput.bind(this);
        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleAddEmployeeToggle(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(addEmployeeToggle(value));
    }

    handleEmployeeIdInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateEmployeeId(value));
    }

    handleFirstNameInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateFirstName(value));
    }

    handleLastNameInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateLastName(value));
    }

    handleClick(e) {
        e.preventDefault();
        const { dispatch, employeeType, employeeId, firstName, lastName } = this.props;
        dispatch(addEmployee(employeeType, employeeId, firstName, lastName));
        document.getElementById('admin-form').reset();
    }

    render() {
        const { employeeType, employeeId, firstName, lastName } = this.props;
        return (
            <div>
                <Navbar />
                <div className="container valign-wrapper" id='full-page'>
                    <div className="container">
                        <div className="row">
                            <div className="col s6 offset-s3 card">
                                <div className="card-content">
                                    <span className="card-title center"><b>Add Employee</b></span>
                                    <hr/>
                                    <form onSubmit={this.handleClick} id="admin-form">
                                        <div className="container">
                                            <div className="input-field">
                                                <Input s={12} type='select' name="employee-type" id="employee-type" onChange={this.handleAddEmployeeToggle}>
                                                    <option value="" selected disabled>Choose your option</option>
                                                    <option value="Manager">Manager</option>
                                                    <option value="Rep">Rep</option>
                                                </Input>
                                                <br/>
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                            <input type="text" name='employeeId' id='employeeId' onChange={this.handleEmployeeIdInput}  />
                                            <label htmlFor="employeeId">Employee Id</label>
                                        </div>
                                        <div>
                                            <input type="text" name='firstName' id='firstName' onChange={this.handleFirstNameInput} />
                                            <label htmlFor="firstName">First Name</label>
                                        </div>
                                        <div>
                                            <input type="text" name='lastName' id='lastName' onChange={this.handleLastNameInput} />
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                        <div className="card-action center">
                                            <button className="btn red" type='submit'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row center">
                            <div className="col s5 offset-s1 card">
                                <div className="card-content">
                                    <span className="card-title center"><b>Add Employee</b></span>
                                </div>
                            </div>
                            <div className="col s5 offset-s1 card">
                                <div className="card-content">
                                    <span className="card-title center"><b>Add Employee</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}