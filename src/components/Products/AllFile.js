import React, { Component } from 'react';
import Message from './Message';
import Cart from './Cart';
import ProductsContainer from './Containers/ProductsContainer';

class AllFile extends Component {
    render() {
        return (
            <div>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer/>
                        <Message />
                        <Cart/>
                    </div>
                </main >
            </div >
        );
    }
}

export default AllFile;
