import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SetUsername, SetPassword, ResetAuth } from '../actions/auth';

const Home = ({
    authData,
    SetUsername,
    SetPassword,
    ResetAuth
}) => {
    console.log(authData);

    const changeInput = function (value, type) {
        switch (type) {
            case 'username': SetUsername(value); break;
            case 'password': SetPassword(value); break;
        }
    };

    const handleButton = function (url, req) {
        const xhr = new XMLHttpRequest();
        xhr.open(req || 'POST', 'api/auth/' + url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            } else {
                console.log(xhr.status);
            }
        };

        xhr.send(JSON.stringify(authData));
        ResetAuth();
    };

    return(
        <div className="main">
            <input type="text"
                   value={authData.username}
                   placeholder="Username"
                   onChange={(e) => changeInput(e.target.value, 'username')}
            /> <br/>
            <input type="password"
                    value={authData.password}
                    onChange={(e) => changeInput(e.target.value, 'password')}
                    placeholder="Password"
            /> <br/>

            <button onClick={() => handleButton('login')}>Войти</button>
            <button onClick={() => handleButton('logout')}>Выйти</button>
            <br/>
            <button onClick={() => handleButton('session', 'GET')}>Чекнуть сессию</button>
        </div>
    )
};

//
function mapStateToProps(state, ownProps) {
    return {
        authData: state.auth
    }
}

function matchDispatchtoProps(dispatch) {
    return bindActionCreators({
        SetUsername: SetUsername,
        SetPassword: SetPassword,
        ResetAuth: ResetAuth
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(Home);