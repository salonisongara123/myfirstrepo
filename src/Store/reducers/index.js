import userReducer from './UserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
