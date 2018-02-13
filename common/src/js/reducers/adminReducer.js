import { types } from '../actions/adminActions';

const INITIAL_STATE = {
    role: '',
    employeeId: '',
    firstName: '',
    lastName: ''
};

export default function AdminReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.EMPLOYEE_ROLE_TOGGLE): {
            return {
                ...state,
                role: payload
            };
            break;
        }

        case (types.UPDATE_EMPLOYEE_ID): {
            return {
                ...state,
                employeeId: payload
            };
            break;
        }

        case (types.UPDATE_FIRST_NAME): {
            return {
                ...state,
                firstName: payload
            };
            break;
        }

        case (types.UPDATE_LAST_NAME): {
            return {
                ...state,
                lastName: payload
            };
            break;
        }

        case (types.NEW_EMPLOYEE): {
            return {
                ...state,
                role: payload.role,
                employeeId: payload.employeeId,
                firstName: payload.firstName,
                lastName: payload.lastName
            };
            break;
        }
        
        default: {
            return state;
        }
    }
};