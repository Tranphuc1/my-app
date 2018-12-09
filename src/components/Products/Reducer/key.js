import * as Types from './../constants/ActionType';

var initialState = [];


 const key = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_KEY:
            state = action.key;
            return [...state];
        default: return state;
    }
}
export default key;