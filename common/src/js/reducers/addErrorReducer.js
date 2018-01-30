import { types } from '../actions/addErrorActions';

const INITIAL_STATE = {
    errorType: '',
    approvingManager: '',
    transactionDate: '',
    orderNumber: '',
    employeeName: '',
    issue: '',
    sku: '',
    installmentAgreement: '',
    notes: ''

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

        case (types.ISSUE_TOGGLE): {
            return {
                ...state,
                issue: payload
            }
            break;
        }

        case (types.REP_TOGGLE): {
            return {
                ...state,
                employeeName: payload
            }
            break;
        }

        case (types.MANAGER_TOGGLE): {
            return {
                ...state,
                approvingManager: payload
            }
            break;
        }

        case (types.UPDATE_DATE): {
            return {
                ...state,
                transactionDate: payload
            };
            break;
        }

        case (types.UPDATE_ORDER_NUMBER): {
            return {
                ...state,
                orderNumber: payload
            }
            break;
        }

        case (types.UPDATE_SKU): {
            return {
                ...state,
                sku: payload
            }
            break;
        }

        case (types.UPDATE_INSTALLMENT): {
            return {
                ...state,
                installmentAgreement: payload
            }
            break;
        }

        case (types.UPDATE_NOTES): {
            return {
                ...state,
                notes: payload
            }
            break;
        }

        case (types.DEVICE_ERROR): {
            return {
                ...state,
                errorType: payload.errorType,
                issue: payload.issue,
                employeeName: payload.employeeName,
                approvingManager: payload.approvingManager,
                transactionDate: payload.transactionDate,
                orderNumber: payload.orderNumber,
                sku: payload.sku,
                notes: payload.notes
            }
            break;
        }

        case (types.ACCESSORY_ERROR): {
            return {
                ...state,
                errorType: payload.errorType,
                issue: payload.issue,
                employeeName: payload.employeeName,
                transactionDate: payload.transactionDate,
                orderNumber: payload.orderNumber,
                sku: payload.sku,
                notes: payload.notes
            }
            break;
        }

        case (types.MISSING_SIGNATURE): {
            return {
                ...state,
                errorType:payload.errorType,
                issue: payload.issue,
                employeeName: payload.employeeName,
                transactionDate: payload.transactionDate,
                orderNumber: payload.orderNumber,
                installmentAgreement: payload.installmentAgreement,
                notes: payload.notes
            }
            break;
        }

        case (types.TRADE_IN): {
            return {
                ...state,
                errorType: payload.errorType,
                issue: payload.issue,
                employeeName: payload.employeeName,
                transactionDate: payload.transactionDate,
                orderNumber: payload.orderNumber,
                sku: payload.sku,
                notes: payload.notes
            }
            break;
        }
        
        default: {
            return state;
        }
    }
};