import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './includes/users';
import auth from './includes/auth';

export default combineReducers({
    routing: routerReducer,
    auth,
    users
});