import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';
import '../styles/main.styl';

import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="page">
                <NavLink to="/" exact>Home </NavLink>
                <NavLink to="/about" exact>About</NavLink>
                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);