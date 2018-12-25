import * as Types from '../constants/ActionType';

var initialState= [];

const keyword = (state = initialState, action) => {
    switch(action.type){
        case Types.KEYWORD:
          state = action.keyword;
          return [...state];
         default : return [...state];
     }
}
export default keyword;