import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Home = ({
     ownProps
}) => {
    console.log(ownProps);
    return(
        <div className="main">
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