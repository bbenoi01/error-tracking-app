import axios from 'axios';

export const types = {
    ERROR_TOGGLE: 'ERROR_TOGGLE',
    ISSUE_TOGGLE: 'ISSUE_TOGGLE',
    REP_TOGGLE: 'REP_TOGGLE',
    MANAGER_TOGGLE: 'MANAGER_TOGGLE',
    UPDATE_DATE: 'UPDATE_DATE',
    UPDATE_ORDER_NUMBER: 'UPDATE_ORDER_NUMBER',
    UPDATE_SKU: 'UPDATE_SKU',
    UPDATE_INSTALLMENT: 'UPDATE_INSTALLMENT',
    UPDATE_NOTES: 'UPDATE_NOTES',
    DEVICE_ERROR: 'DEVICE_ERROR',
    ACCESSORY_ERROR: 'ACCESSORY_ERROR',
    MISSING_SIGNATURE: 'MISSING_SIGNATURE',
    TRADE_IN: 'TRADE_IN'

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

export function addError(errorType, issue, employeeName, approvingManager, transactionDate, orderNumber, sku, installmentAgreement, notes) {
    console.log({errorType, issue, employeeName, approvingManager, transactionDate, orderNumber, sku, installmentAgreement, notes});
    return (dispatch) => {
        if (errorType == 'Device Return') {
            dispatch({
                type: types.DEVICE_ERROR,
                payload: axios.post('http://localhost:3000/api/errors', { errorType, issue, employeeName, approvingManager, transactionDate, orderNumber, sku, notes })
                .then(results => { return results.data; alert('Add Successful') })
                .catch(err => console.log(err))
            })
        } else if (errorType == 'Accessory Return') {
            dispatch({
                type: types.ACCESSORY_ERROR,
                payload: axios.post('http://localhost:3000/api/errors', { errorType, issue, employeeName, transactionDate, orderNumber, sku, notes })
                .then(results => { return results.data; alert('Add Successful') })
                .catch(err => console.log(err))
            })
        } else if (errorType == 'Missing Signature') {
            dispatch({
                type: types.MISSING_SIGNATURE,
                payload: axios.post('http://localhost:3000/api/errors', { errorType, issue, employeeName, transactionDate, orderNumber, installmentAgreement, notes })
                .then(results => { return results.data; alert('Add Successful') })
                .catch(err => console.log(err))
            })
        } else if (errorType == 'Trade-In') {
            dispatch({
                type: types.TRADE_IN,
                payload: axios.post('http://localhost:3000/api/errors', { errorType, issue, employeeName, transactionDate, orderNumber, sku, notes })
                .then(results => { return results.data; alert('Add Successful') })
                .catch(err => console.log(err))
            })
        }
    }
}