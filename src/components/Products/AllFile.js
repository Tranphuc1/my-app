import React, { Component } from 'react';
import Header from '../headerComponents/header';
import Footer from '../footerComponents/footer';
import Message from './Message';
import Cart from './Cart';
import ProductsContainer from './Containers/ProductsContainer';

class AllFile extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer/>
                        <Message />
                        <Cart/>
                    </div>
                </main >
                <Footer />
            </div >
        );
    }
}

export default AllFile;
