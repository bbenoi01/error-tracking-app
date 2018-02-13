import { types } from '../actions/appAction';

const INITIAL_STATE = {
    errors: [],
    users: []
};

export default function AppReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.ALL_ERRORS: {
            return {
                ...state,
                errors: payload
            };
            break;
        }

        case types.ALL_USERS: {
            return {
                ...state,
                users: payload
            };
            break;
        }
        
        default: return state;
    }
};