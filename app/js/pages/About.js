import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const About = ({
    exampleArr
}) => {
    return(
        <div className="main">
            About

            {exampleArr.map((item, ndx) => (
                <div key={item._id}>
                    {item.name}
                </div>
            ))}
        </div>
    )
};

//
function mapStateToProps(state) {
    return {
        exampleArr: state.example
    }
}

function matchDispatchtoProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(About);