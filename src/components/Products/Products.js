import React, { Component } from 'react';
class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row"> 
                    {this.props.children}
                </div>
            </section>
        );
    }
    // showProduct(products){
    //     var result = null;
    //         if(products.length > 0){
    //             result = products.map((product,index) => {
    //             return <Product key={index} product={product} />;
    //             });
    //         }
    //     return result;
    // }
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
export default Products;
