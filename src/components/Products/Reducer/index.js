import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './Message';
import User from './User';
// import key from './key';
const appReducers = combineReducers({
    products,
    cart,
    message,
    User
});

export default appReducers;
