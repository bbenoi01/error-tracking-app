import axios from 'axios';

export const types = {
    ALL_USERS: 'ALL_USERS',
    EMPLOYEE_ROLE_TOGGLE: 'EMPLOYEE_ROLE_TOGGLE',
    NEW_EMPLOYEE: 'NEW_MANAGER',
    UPDATE_EMPLOYEE_ID: 'UPDATE_EMPLOYEE_ID',
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'UPDATE_LAST_NAME'
}

export function findUsers() {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/users')
        .then(res => {
            dispatch({
                type: types.ALL_USERS,
                payload: res.data
            })      
        })
        .catch(err => console.log(err))    
    };
}

export function employeeRoleToggle(value) {
    return {
        type: types.EMPLOYEE_ROLE_TOGGLE,
        payload: value
    };
}

export function updateEmployeeId(value) {
    return {
        type: types.UPDATE_EMPLOYEE_ID,
        payload: value
    };
}

export function updateFirstName(value) {
    return {
        type: types.UPDATE_FIRST_NAME,
        payload: value
    };
}

export function updateLastName(value) {
    return {
        type: types.UPDATE_LAST_NAME,
        payload: value
    }
}

export function addEmployee(role, employeeId, firstName, lastName) {
    console.log({role, employeeId, firstName, lastName});
    return (dispatch) => {
        axios.post('http://localhost:3000/api/users', { role, employeeId, firstName, lastName });
        axios.get('http://localhost:3000/api/users')
        .then(res => {
            dispatch({
                type: types.ALL_USERS,
                payload: res.data
            })      
        })
        .catch(err => console.log(err))     
    }
}

export function removeEmployee(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/api/users/${id}`);
        axios.get('http://localhost:3000/api/users')
        .then(res => {
            dispatch({
                type: types.ALL_USERS,
                payload: res.data
            })      
        })
        .catch(err => console.log(err))
    }
}