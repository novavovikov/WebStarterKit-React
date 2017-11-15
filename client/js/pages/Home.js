import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Home = ({
     ownProps
}) => {
    const handleButton = function (url, req) {
        const xhr = new XMLHttpRequest();
        xhr.open(req || 'POST', 'api/users/' + url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.send(JSON.stringify({
            username: 'User2',
            password: '123'
        }));
    };

    return(
        <div className="main">
            <button
                onClick={() => handleButton('session', 'GET')}
            >Чекнуть сессию</button>

            <button
                onClick={() => handleButton('login')}
            >Войти</button>
            <button
                onClick={() => handleButton('logout')}
            >Выйти</button>
        </div>
    )
};

//
function mapStateToProps(state, ownProps) {
    return {
        ownProps
    }
}

function matchDispatchtoProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(Home);