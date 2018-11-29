var redux =require('redux');

const ManageInitialState ={}
const allReducer = (state = ManageInitialState, action) => {
    switch (action.type) {
        case 'add_data':
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;