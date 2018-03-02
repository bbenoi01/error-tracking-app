import React, { Component } from 'react';
import Navbar from '../index/navbarIndex';
import {Input} from 'react-materialize';
import {
    employeeRoleToggle,
    updateEmployeeId,
    updateFirstName,
    updateLastName,
    addEmployee,
    removeEmployee
} from '../actions/adminActions';

export default class Admin extends Component {
    constructor(props) {
        super(props);

        this.handleEmployeeRoleToggle = this.handleEmployeeRoleToggle.bind(this);
        this.handleEmployeeIdInput = this.handleEmployeeIdInput.bind(this);
        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleEmployeeRoleToggle(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(employeeRoleToggle(value));
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

    handleRemoveClick(e) {
        const { dispatch } = this.props;
        const { id } = e.target;
        dispatch(removeEmployee(id));

    }

    handleClick(e) {
        e.preventDefault();
        const { dispatch, role, employeeId, firstName, lastName } = this.props;
        dispatch(addEmployee(role, employeeId, firstName, lastName));
        document.getElementById('admin-form').reset();
    }

    render() {
        const { role, employeeId, firstName, lastName, users } = this.props;
        return (
            <div>
                <Navbar />
                <div className="valign-wrapper" id='full-page'>
                    <div className="container">
                        <div className="row center-align">
                            <div className="col l5 s12 card">
                                <div className="card-content">
                                    <span className="card-title center"><b>Reps</b></span>
                                    <hr/>
                                    <div className="card-content" id='list'>
                                        {users.map(user =>
                                            <div className="col s12" key={user.id}>
                                                <div className="card">
                                                    <div style={{paddingBottom: '0'}} className="card-content">
                                                        <div>
                                                            <div className='left'>
                                                                <p><b>Role:</b> {user.role}</p>
                                                            </div>
                                                            <br/>
                                                            <div className='left'>
                                                                <p><b>Employee Id:</b> {user.employeeId}</p>
                                                            </div>
                                                            <br/>
                                                            <div className='left'>
                                                                <p><b>Name:</b> {user.firstName} {user.lastName}</p>
                                                            </div>
                                                            <br/>                                                          
                                                        </div>
                                                        <div className="card-action center">
                                                            <button onClick={this.handleRemoveClick} className="btn red" id={user.id}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col l6 offset-l1 s12 card">
                                <div className="card-content" style={{paddingBottom: '0'}}>
                                    <span className="card-title center"><b>Add Employee</b></span>
                                    <hr/>
                                    <form onSubmit={this.handleClick} id="admin-form">
                                        <div className="container">
                                            <div className="input-field">
                                                <Input s={12} type='select' name="employee-type" id="employee-type" onChange={this.handleEmployeeRoleToggle}>
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
                                        <br/>
                                        <div className="card-action center">
                                            <button className="btn red" type='submit'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}