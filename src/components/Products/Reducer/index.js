import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './Message';
import User from './User';
import sessionReducer from './Session';


const appReducers = combineReducers({
    products,
    cart,
    message,
    User,
    sessionState : sessionReducer
});

export default appReducers;