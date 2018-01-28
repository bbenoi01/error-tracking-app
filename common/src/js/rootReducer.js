import { combineReducers } from 'redux';
import AddErrorReducer from './reducers/addErrorReducer';

const rootReducer = combineReducers({
    addError: AddErrorReducer
});

export default rootReducer;