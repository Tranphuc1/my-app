import * as Types from '../constants/ActionType';

var initialState= [];

const User = (state = initialState, action) => {
    switch(action.type){
       case Types.SHOW_ALL_USER:
         state = action.User;
         return [...state];
        default : return [...state];
    }
}
export default User;