import React, { Component } from 'react';
import ProductsContainer from '../Containers/ProductsContainer';
import MessageContainer from '../Containers/MessageContainer';
import CartContainer from '../Containers/CartContainer';
class AllFile extends Component {
    render() {
        return (
            <div>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer/>
                        <MessageContainer />
                        <CartContainer/>
                    </div>
                </main >
            </div >
        );
    }
}

export default AllFile;
