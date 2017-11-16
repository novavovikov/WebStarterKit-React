const initialState = [];

export default function example (state = initialState, action) {
    switch (action.type) {
        case 'GET_USERS': return action.payload;
        default: return state;
    }
}