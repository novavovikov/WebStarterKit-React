import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './header';

const AppRoot = (props) => {
    return (
        <div className="page">
            <Header />
            {renderRoutes(props.route.routes)}
        </div>
    )
};

export default AppRoot;