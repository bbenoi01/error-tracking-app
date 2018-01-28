import axios from 'axios';

export const types = {
    ERROR_TOGGLE: 'ERROR_TOGGLE'
}

export function errorToggle(value) {
    return {
        type: types.ERROR_TOGGLE,
        payload: value
    };
}