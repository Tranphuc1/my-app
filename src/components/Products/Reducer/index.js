import { combineReducers } from 'redux';
import products from './products';
import * as Types from './../constants/ActionType';
import cart from './cart';
export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product:product,
        quantity:quantity
    }
}

const appReducers = combineReducers({
    products,
    cart
});

export default appReducers;
