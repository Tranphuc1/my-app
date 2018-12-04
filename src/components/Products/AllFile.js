import React, { Component } from 'react';
import Message from './Message';
import ProductsContainer from './Containers/ProductsContainer';
import CartContainer from './Containers/CartContainer';

class AllFile extends Component {
    render() {
        return (
            <div>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer/>
                        <Message />
                        <CartContainer/>
                    </div>
                </main >
            </div >
        );
    }
}

export default AllFile;
