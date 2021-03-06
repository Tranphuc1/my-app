import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import * as Message from '../constants/Message';
class CartItem extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity : 1 
        }
    }
    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.url}
                        style={{width:150}}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>  {item.product.name} </strong>
                    </h5>
                </td>
                <td>
                    <h5>
                    <NumberFormat 
                        value={item.product.price} 
                        displayType={'text'}
                        thousandSeparator={true} 
                        suffix={' đ'} />
                    </h5>
                </td>
                <td className="center-on-small-only"  >
                    <span className="qty">
                            {quantity}&nbsp;
                     </span>
                     <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                          
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td> {this.showSubTotal(item.product.price, item.quantity)} </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0 && quantity <= product.quantity ) {
            var { onUpdateProductInCart, onChangeMessage } = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }
    onDelete = (product) => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showSubTotal = (price, quantity) => {
        return <NumberFormat value={price * quantity} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
    }

}

export default CartItem;