import { combineReducers } from 'redux';
import products from './products';
import * as Types from './../constants/ActionType';
import cart from './cart';
import message from './Message';


export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product:product,
        quantity:quantity
    }
}
export const actChangeMessage = (message) =>{
    return {
        type:Types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteProductInCart =(product) =>{
    return {
        type:Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInCart =(product,quantity) =>{
    return {
        type:Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
const appReducers = combineReducers({
    products,
    cart,
    message
});

export default appReducers;
