import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Fetch } from '../helpers/methods'

import { SetUsername, SetPassword, ResetAuth } from '../actions/auth.action';

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

    const regUser = function () {
        Fetch({
            url: 'api/users',
            method: 'POST',
            data: JSON.stringify(authData)
        }).then(function (e) {
            console.log(e);
        }, function (e) {
            console.log(e)
        });

        ResetAuth();
    };

    const handleButton = function (url, req) {
        Fetch({
            url: 'api/auth/' + url,
            method: req || 'POST',
            data: JSON.stringify(authData)
        }).then(function (e) {
            console.log(e);
        }, function (e) {
            console.log(e)
        });

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
            <button onClick={regUser}>Зарегестрироваться</button>
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