import axios from 'axios';

export const types = {
    ALL_USERS: 'ALL_USERS',
    ALL_ERRORS: 'ALL_ERRORS'
}

export function findUsers() {
    return (dispatch) => {
        axios.get('https://bb-error-tracker.herokuapp.com/api/users')
        .then(res => {
            dispatch({
                type: types.ALL_USERS,
                payload: res.data
            })      
        })
        .catch(err => console.log('Error, users not found'))     
    };
}

export function findErrors() {
    return (dispatch) => {
        axios.get('https://bb-error-tracker.herokuapp.com/api/errors')
        .then(res => {
            dispatch({
                type: types.ALL_ERRORS,
                payload: res.data
            })
        })
        .catch(err => console.log('Error, errors not found'))
    };
}