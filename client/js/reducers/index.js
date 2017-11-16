import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session from './includes/session';
import auth from './includes/auth';
import users from './includes/users';

export default combineReducers({
    routing: routerReducer,
    session,
    auth,
    users
});