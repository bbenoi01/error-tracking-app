import { types } from '../actions/addErrorActions';

const INITIAL_STATE = {
    errorType: ''

};

export default function AddErrorReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.ERROR_TOGGLE): {
            return {
                ...state,
                errorType: payload
            };
            break;
        }
        default: {
            return state;
        }
    }
};