import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './Message';
import User from './User';
const appReducers = combineReducers({
    products,
    cart,
    message,
    User
});

export default appReducers;
