import { types } from '../actions/adminActions';

const INITIAL_STATE = {
    employeeType: '',
    employeeId: '',
    firstName: '',
    lastName: ''
};

export default function AdminReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.ADD_EMPLOYEE_TOGGLE): {
            return {
                ...state,
                employeeType: payload
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

        case (types.ADD_MANAGER): {
            return {
                ...state,
                employeeType: payload.employeeType,
                employeeId: payload.employeeId,
                firstName: payload.firstName,
                lastName: payload.lastName
            };
            break;
        }

        case (types.ADD_REP): {
            return {
                ...state,
                employeeType: payload.employeeType,
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