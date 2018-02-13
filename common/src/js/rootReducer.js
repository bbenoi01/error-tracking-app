import { combineReducers } from 'redux';
import AppReducer from './reducers/appReducer';
import AddErrorReducer from './reducers/addErrorReducer';
import AdminReducer from './reducers/adminReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    addError: AddErrorReducer,
    admin: AdminReducer
});

export default rootReducer;