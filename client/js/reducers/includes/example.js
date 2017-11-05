const initialState = [];

export default function example (state = initialState, action) {
    if (action.type === 'GET_EXAMPLE') {
        return action.payload;
    }
    return state;
}