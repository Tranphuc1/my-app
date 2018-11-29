import React, { Component } from 'react';
import Header from '../headerComponents/header';
import Footer from '../footerComponents/footer';
import Products from './Products';
import Message from './Message';
import Cart from './Cart';

class AllFile extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <Products />
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
