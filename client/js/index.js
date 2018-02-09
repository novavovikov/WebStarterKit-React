import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';
import routes from './routes';
import '../styles/main.styl';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <BrowserRouter>
                 {renderRoutes(routes)}
            </BrowserRouter>
        </Provider>
    </AppContainer>,
    document.getElementById('app')
);