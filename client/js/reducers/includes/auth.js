const initialState = {
    username: '',
    password: ''
};

export default function example (state = initialState, action) {
    switch (action.type) {
        case 'SET_USERNAME': return {
            username: action.payload,
            password: state.password
        };
        case 'SET_PASSWORD': return {
            username: state.username,
            password: action.payload
        };
        case 'RESET_AUTH': return initialState;
        default: return state;
    }
}