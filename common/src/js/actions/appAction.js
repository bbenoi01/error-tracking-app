import axios from 'axios';

export const types = {
    ALL_USERS: 'ALL_USERS',
    ALL_ERRORS: 'ALL_ERRORS'
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
        .catch(err => console.log('Error, users not found'))     
    };
}

export function findErrors() {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/errors')
        .then(res => {
            dispatch({
                type: types.ALL_ERRORS,
                payload: res.data
            })
        })
        .catch(err => console.log('Error, errors not found'))
    };
}