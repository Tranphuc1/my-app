import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as routers from '../Products/constants/Login';
//components
const CartButton = ({cart}) =>
    	<div>
    		<div className="subcontent">
			    	<div className="buttom" id="showcartlink">
							<Link to={routers.CART} className="cartlink" title="GIỎ HÀNG CỦA TÔI"><i className="fas fa-shopping-cart"/>&nbsp;Giỏ hàng ({countItemInCart(cart)}) <i className="fa fa-play" /></Link>
  					</div>
  		  </div>
    	</div>
const countItemInCart = (carts) => {
	var result = 0;
	if (carts.length) {
		carts.map((cart, index) => {
			return result += cart.quantity;
		})
	}
	return result;
}
			
const mapStateToProps = (state) => ({
	cart: state.cart
});

export default connect(mapStateToProps)(CartButton);
