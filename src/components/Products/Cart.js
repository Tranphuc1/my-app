import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Cart extends Component {
    render() {
        // var { children } = this.props;
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Sản Phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số Lượng</th>
                            <th scope="col">Tổng Cộng</th>
                            <th scope="col"></th>
                                {/* <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem/>
                            <CartResult/>
                            {/* { children } */}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Cart;
