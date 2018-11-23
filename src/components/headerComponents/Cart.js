import React, { Component } from 'react';

//components


class Cart extends Component {
  render() {
    return (
    	<div>
    		<div className="subcontent">
			    <h5>Giỏ hàng</h5>
			    	<div className="buttom" id="showcartlink">
			      		<a className="cartlink" href="#" title="GIỎ HÀNG CỦA TÔI">Xem giỏ hàng<i className="fa fa-play" /></a>
  			</div>
  		  </div>
    	</div>
     );
  }
}

export default Cart;
