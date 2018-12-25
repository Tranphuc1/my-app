import * as Types from './../constants/ActionType';
import { connect } from 'react-redux';
import {firebaseConnect} from '../../../FirebaseConnect';
var Data = JSON.parse(localStorage.getItem('CART'));
var Data1 = firebaseConnect.database().ref('Database/Cart');
var initialState= Data ? Data : [];

// updateKeycart =() =>{
//     callApi('Database/Cart','GET',null).then(res =>{
//     var arr = Object.keys(res.data);
//     var data =_.last(arr);
//     if(data.length>0){
       
//     }
// }
firebaseConnect.database().ref('Cart').on('value',(snapshot)=>{
    var key = snapshot.key;
})
const products = (state = initialState, action) => {
    var {product,quantity } = action;
    var index = -1;
    switch(action.type){ 
        case Types.ADD_TO_CART:
            index = findProductInCart(state,product);
            if(index !== -1){
                state[index].quantity +=quantity;
            }else{
            state.push({
                product,
                quantity
            });
            }
            localStorage.setItem('CART',JSON.stringify(state));
            firebaseConnect.database().ref(`Database/Cart`).set(state);
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
                index = findProductInCart (state,product);
                if(index !== -1){
                    state.splice(index,1);
                }
                localStorage.setItem('CART',JSON.stringify(state));
                firebaseConnect.database().ref('Database/Cart').set(state);
                return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
                index = findProductInCart(state, product);
                if(index !== -1){
                    state[index].quantity = quantity;
                }
                localStorage.setItem('CART', JSON.stringify(state));
                firebaseConnect.database().ref('Database/Cart').set(state);
                return [...state];
        default : return [...state];
    }
}
  var findProductInCart = (cart,product) => {
    var index = -1;
    if(cart.length > 0 ){
        for(var i =0; i < cart.length ;i++){
            if(cart[i].product.key === product.key){
                index = i;
                break;
            }

        }
    }
    return index;
}
export default products;