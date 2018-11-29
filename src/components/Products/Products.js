import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';
class Products extends Component {
    render() {
        var {products} = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row"> 
                    { this.showProduct(products) }
                </div>
            </section>
        );
    }
    showProduct(products){
        var result = null;
            if(products.length > 0){
                result = products.map((product,index) => {
                    console.log("3333")
                    return <Product/>;
                });
            }
        return result;
    }
    // showProduct(products){
    //     var result = null;
    //     if(products.length > 0 ){
    //         console.log("333");
    //         result = products.map((Product,index) => {
    //             return <Product key={index}/>
    //         });
    //     }
    //     return result;
    // }

}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
//this.props.products1
export default connect(mapStateToProps,null)(Products);
