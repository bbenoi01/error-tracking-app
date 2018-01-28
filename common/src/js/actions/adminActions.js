import axios from 'axios';

export const types = {
    ADD_EMPLOYEE_TOGGLE: 'ADD_EMPLOYEE_TOGGLE',
    ADD_MANAGER: 'ADD_MANAGER',
    ADD_REP: 'ADD_REP',
    UPDATE_EMPLOYEE_ID: 'UPDATE_EMPLOYEE_ID',
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'UPDATE_LAST_NAME'
}

export function addEmployeeToggle(value) {
    return {
        type: types.ADD_EMPLOYEE_TOGGLE,
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

export function addEmployee(employeeType, employeeId, firstName, lastName) {
    console.log({employeeType, employeeId, firstName, lastName});
    return (dispatch) => {
        if (employeeType == 'Manager') {
            dispatch({
                type: types.ADD_MANAGER,
                payload: axios.post('http://localhost:3000/api/managers', { employeeId, firstName, lastName })
                .then(results => {return results.data})
                .catch(err => console.log(err))
            })
        } else if (employeeType == 'Rep') {
            dispatch({
                type: types.ADD_REP,
                payload: axios.post('http://localhost:3000/api/reps', { employeeId, firstName, lastName })
                .then(results => {return results.data})
                .catch(err => console.log(err))
            })
        }        
    }
}


