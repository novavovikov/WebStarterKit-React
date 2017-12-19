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

    function hex2a(hex) {
        let str = '';
        for (let i = 0; i < hex.length; i += 2) {
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
        }
        return str;
    }

    const handleButton = function (url, req) {
        authData.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMmFiMGJmNTU3Y2QxMTk5YzY0Nzc2MiIsInVzZXJuYW1lIjoidXNlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1MTMwMDc2MDQsImV4cCI6MTUxNTU5OTYwNH0.bdUNF236NdYPPpktF7k1TrWyGHY4wQAfkMtEGMmVsP4";

        Fetch({
            url: 'api/auth/' + url,
            method: req || 'POST',
            data: JSON.stringify(authData)
        }).then( data => {
            console.log(JSON.parse(data));
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