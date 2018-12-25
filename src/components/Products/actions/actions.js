import * as Types from '../constants/ActionType';
import callApi from '../../../ApiCaller/Api';

// user
export const actShowAllUser = (User) =>{
    return {
        type:Types.SHOW_ALL_USER,
        User
    }
}
//product
export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}
export const actDeleteProductsRequest = (key) =>{
    return dispatch =>{
        return callApi(`Database/Sanpham/${key}`,'DELETE',null).then(res =>{
            dispatch(actDeleteProducts(key));
        })
    }
}
export const actDeleteProducts = (key) =>{
    return {
        type: Types.DELETE_PRODUCT,
        key
    }
}

// cart
export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product:product,
        quantity:quantity
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
//message
export const actChangeMessage = (message) =>{
    return {
        type:Types.CHANGE_MESSAGE,
        message
    }
}
//getkeyproductdetail
export const actGetKey = (keypd) =>{
    return {
        type:Types.GET_KEY,
        keypd
    }
}
//GETKEYWORD
export const actKeyWord = (keyword) =>{
    return {
        type:Types.KEYWORD,
        keyword
    }
}