const initialState =  null;

export default function example (state = initialState, action) {
    switch (action.type) {
        case 'CLOSE_SESSION': return null;
        default: return state;
    }
}