import * as Types from '../constants/ActionType';

var initialState= [];

var FindIndex = (products,key) => {
    var result = -1;
    products.forEach((product,index) => {
        if(product.key === key){
            result = index;
        }
    });
    return result;
}

const products = (state = initialState, action) => {
    var index = -1;
    var {key} = action;
    switch(action.type){
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]; 
        case Types.DELETE_PRODUCT:
            index = FindIndex(state,key);
            state.slice(index,1);
            return [...state];
        default : return [...state];
    }
}
export default products;
