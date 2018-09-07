import axios from 'axios';

export const types = {
    ERROR_TOGGLE: 'ERROR_TOGGLE',
    ISSUE_TOGGLE: 'ISSUE_TOGGLE',
    REP_TOGGLE: 'REP_TOGGLE',
    SET_ID: 'SET_ID',
    MANAGER_TOGGLE: 'MANAGER_TOGGLE',
    UPDATE_DATE: 'UPDATE_DATE',
    UPDATE_ORDER_NUMBER: 'UPDATE_ORDER_NUMBER',
    UPDATE_SKU: 'UPDATE_SKU',
    UPDATE_INSTALLMENT: 'UPDATE_INSTALLMENT',
    UPDATE_NOTES: 'UPDATE_NOTES',
    DEVICE_ERROR: 'DEVICE_ERROR',
    ACCESSORY_ERROR: 'ACCESSORY_ERROR',
    MISSING_SIGNATURE: 'MISSING_SIGNATURE',
    TRADE_IN: 'TRADE_IN',
    ALL_ERRORS: 'ALL_ERRORS',
    ASSIGN_ID: 'ASSIGN_ID'

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
    };
}

export function errorToggle(value) {
    return {
        type: types.ERROR_TOGGLE,
        payload: value
    };
}

export function issueToggle(value) {
    return {
        type: types.ISSUE_TOGGLE,
        payload: value
    };
}

export function repToggle(value) {
    return {
        type: types.REP_TOGGLE,
        payload: value
    };
}

export function managerToggle(value) {
    return {
        type: types.MANAGER_TOGGLE,
        payload: value
    };
}

export function updateDate(value) {
    return {
        type: types.UPDATE_DATE,
        payload: value
    };
}

export function updateOrderNumber(value) {
    return {
    type: types.UPDATE_ORDER_NUMBER,
    payload: value
    };
}

export function updateSku(value) {
    return {
        type: types.UPDATE_SKU,
        payload: value
    };
}

export function updateInstallment(value) {
    return {
        type: types.UPDATE_INSTALLMENT,
        payload: value
    };
}

export function updateNotes(value) {
    return {
    type: types.UPDATE_NOTES,
    payload: value
    };
}

export function addError(errorType, issue, employeeId, approvingManager, transactionDate, orderNumber, sku, installmentAgreement, notes) {
    return (dispatch) => {
        if (errorType == 'Device Return') {
            axios.post('https://bb-error-tracker.herokuapp.com/api/errors', { errorType, issue, employeeId, approvingManager, transactionDate, orderNumber, sku, notes })
            .then(res => {
                dispatch(findErrors())
            })
            .catch(err => console.log('Error not logged'))
        } else if (errorType == 'Accessory Return') {
            axios.post('https://bb-error-tracker.herokuapp.com/api/errors', { errorType, issue, employeeId, transactionDate, orderNumber, sku, notes })
            .then(res => {
                dispatch(findErrors())
            })
            .catch(err => console.log('Error not logged'))
        } else if (errorType == 'Missing Signature') {
            axios.post('https://bb-error-tracker.herokuapp.com/api/errors', { errorType, issue, employeeId, transactionDate, orderNumber, installmentAgreement, notes })
            .then(res => {
                dispatch(findErrors())
            })
            .catch(err => console.log('Error not logged'))
        } else if (errorType == 'Trade-In') {
            axios.post('https://bb-error-tracker.herokuapp.com/api/errors', { errorType, issue, employeeId, transactionDate, orderNumber, sku, notes })
            .then(res => {
                dispatch(findErrors())
            })
            .catch(err => console.log('Error not logged'))
        }
    }
}