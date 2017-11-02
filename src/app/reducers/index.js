import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import example from './includes/example';

export default combineReducers({
    routing: routerReducer,
    example
});