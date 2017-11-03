import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/noMatch';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route component={NoMatch}/>
        </Switch>
    )
};

export default Routes;