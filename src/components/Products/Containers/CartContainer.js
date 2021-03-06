import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from '../constants/Message';
import CartResult from '../Components/CartResult';
import Cart from '../Components/Cart';
import CartItem from '../Components/CartItem';
import { actDeleteProductInCart, actChangeMessage,actUpdateProductInCart} from '../actions/actions';
import SelectPay from '../Components/Pay/SelectPay';


class CartContainer extends Component {
    render() {
		const { cart } = this.props;
		return (
			<Cart>
				{this.showCartItem(cart)}
                {this.showTotalMount(cart)}
                {this.showPay(cart)}
			</Cart>
		);
	}

    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangeMessage,onUpdateProductInCart } = this.props;
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }
    showTotalMount = (cart) => {
        let result = [];
		if (cart.length > 0) {
            
			result = <CartResult cart={cart} />
		}
		return result;
    };
    showPay =(cart) =>{
        let result = [];
		if (cart.length > 0) {
            
			result = <SelectPay cart={cart} />
		}
		return result;
    } 

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            key : PropTypes.string.isRequired,
            name : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            author : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
            url : PropTypes.string.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
