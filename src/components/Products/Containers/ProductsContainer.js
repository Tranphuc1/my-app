import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Components/Products';
import Product from '../Components/Product';
import PropTypes from 'prop-types';
import { actAddToCart,actChangeMessage,actFetchProducts } from '../actions/actions';
import callApi from '../../../ApiCaller/Api';
import Pagination from '../../Pagination/Pagination';

var _ = require('lodash');

class ProductsContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
            allProducts:[],
            products : [],
            currentProducts:[],
            currentPage:null,
            totalPages:null
        };
    }
    componentDidMount(){
        callApi('Sanpham','GET',null).then(res =>{
            this.props.fetchAllProducts(_.toArray(res.data));
    });
    const {data: allProducts = [] } = this.props.products;
    this.setState({
        allProducts
    });
    }
    showProducts(products){
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                    key={index} 
                    product={product}
                    onAddToCart = {onAddToCart} 
                    onChangeMessage = {onChangeMessage}
                />
            });
        }
        return result;
    }
    onPageChanged = data => {
        var { products } = this.props;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentProducts = products.slice(offset, offset + pageLimit);
        this.setState({ currentPage, currentProducts, totalPages });
    }
    render() {
        var { products } = this.props;
        // const { currentProducts, currentPage, totalPages } = this.state;
        // const totalProducts = products.length;
        // if (totalProducts === 0) return null;
        // const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();
        return (
            // <div className="container mb-5">
            //     <div className="row d-flex flex-row py-5">
            //     <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                    
            //         <div className="d-flex flex-row align-items-center">
            //         <h2 className={headerClass}>
            //             <strong className="text-secondary">{totalProducts}</strong> Products
            //         </h2>
            //         { currentPage && (
            //             <span className="current-page d-inline-block h-100 pl-4 text-secondary">
            //             Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
            //             </span>
            //         ) }
            //         </div>
            //         <div className="form-group">
            //         <Pagination totalRecords={totalProducts} pageLimit={3} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            //         </div>
            //     </div>
            //         { currentProducts.map({this.showProducts(products)}) 
            //         }
            //     </div>
                <Products>
                    {this.showProducts(products)}
                </Products>
            // </div>
        );
}
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            key : PropTypes.string.isRequired,
            name : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            author : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
            url : PropTypes.string.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    fetchAllProducts :PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        },
        fetchAllProducts : (products) => {
            dispatch(actFetchProducts(products));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
