import * as Types from '../constants/ActionType';

var initialState= [];

const Comment = (state = initialState, action) => {
    switch(action.type){
       case Types.SHOWCOMMENT:
         state = action.Comment;
         return [...state];
        default : return [...state];
    }
}
export default Comment;