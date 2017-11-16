import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GetUsers } from '../actions/users';

const About = ({
    users,
    GetUsers
}) => {
	const handleButton = function() {
		let path = '/api/users';
		fetch(path)
			.then(function(response) {
				response.json().then(function (data) {
					console.log(data);
					GetUsers(data)
				})
			})
	};

    return(
        <div className="main">
            About
            <button
               onClick={handleButton}
            >Handler</button>

            {users.map((item, ndx) => (
                <div key={item._id}>
                    {item.username}
                </div>
            ))}
        </div>
    )
};

//
function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchtoProps(dispatch) {
	return bindActionCreators({
        GetUsers: GetUsers
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchtoProps)(About);