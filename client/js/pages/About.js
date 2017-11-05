import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { example } from '../actions/example';

const About = ({
    exampleArr,
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
            About
            <button
               onClick={handleButton}
            >Handler</button>

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
		exampleHandler: example
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(About);