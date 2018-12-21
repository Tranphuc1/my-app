import * as Types from '../constants/ActionType';

var initialState= [];

const keypd = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_KEY:
          state = action.keypd;
          return [...state];
         default : return [...state];
     }
}
export default keypd;