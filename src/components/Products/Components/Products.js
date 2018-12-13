import React, { Component } from 'react';
class Products extends Component {
    render() {
        // const{allProducts,currentPage,currentProduct,totalPages} =this.state;
        return (
            <section className="section" >
                <h5 className="section-heading" >Danh Sách Sản Phẩm</h5>
                <div className="row"> 
                    {this.props.children}
                </div>
            </section>
        );
    }
}
export default Products;
