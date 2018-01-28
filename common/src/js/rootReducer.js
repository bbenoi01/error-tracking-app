import { combineReducers } from 'redux';
import AddErrorReducer from './reducers/addErrorReducer';
import AdminReducer from './reducers/adminReducer';

const rootReducer = combineReducers({
    addError: AddErrorReducer,
    admin: AdminReducer
});

export default rootReducer;