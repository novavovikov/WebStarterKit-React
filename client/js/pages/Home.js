import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { example } from '../actions/example';

const Home = ({
    exampleHandler
}) => {
    const handleButton = function() {
        let path = '/api/artists';
        fetch(path)
            .then(function(response) {
					console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    exampleHandler(data)
                })
            })
    };

    return(
        <div className="main">
            <button
                onClick={handleButton}
            >Handler</button>
        </div>
    )
};

//
function mapStateToProps(state, ownProps) {
    return {
        ownProps,
        exampleArr: state.example
    }
}

function matchDispatchtoProps(dispatch) {
    return bindActionCreators({
        exampleHandler: example
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(Home);