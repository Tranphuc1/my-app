import React, { Component } from 'react';
import Pagination from '../../Pagination/Pagination';
import Product from './Product';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state ={
          allProducts:[],
          currentProducts:[],
          currentPage:null,
          totalPages:null
        }
    }
    componentDidMount(){
    const {allProducts = [] } = this.props.product;
        this.setState({
        allProducts
        });
    }
    onPageChanged = data => {
        var { product } = this.props;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentProducts = product.slice(offset, offset + pageLimit);
        this.setState({ currentPage, currentProducts, totalPages });
    }
    render() {
        var { onAddToCart, onChangeMessage } = this.props;
        var {product} = this.props;
        const { currentProducts, currentPage, totalPages } = this.state;
        const totalProducts = product.length;
        if (totalProducts === 0) return null;
        const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();
        return (
                <div className="menu-group" style={{width:'100%', height : '600px'}}>
                    <div className="container mb-5">
                        <div className="row ">
                            <div className="w-100 d-flex flex-row flex-wrap align-items-center justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                <h4 className={headerClass}>
                                    <strong className="text-secondary">{totalProducts}</strong>{" "}
                                    Product
                                </h4>
                                {currentPage && (
                                    <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                                    Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                                    <span className="font-weight-bold">{totalPages}</span>
                                    </span>
                                )}
                                </div>
                                <div className="form-group">
                                    <Pagination totalRecords={totalProducts} pageLimit={4} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                                </div>
                            </div>
                                {currentProducts.map((product,index) =>{return <Product key={index} product={product} onAddToCart = {onAddToCart} 
                                onChangeMessage = {onChangeMessage}/>})}
                        </div>
                    </div>
            </div>
        );
    }
}
export default ProductList;