import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Components/Products';
import Product from '../Components/Product';
import PropTypes from 'prop-types';
import { actAddToCart,actChangeMessage,actFetchProducts } from '../actions/actions';
import callApi from '../../../ApiCaller/Api';
var _ = require('lodash');

class ProductsContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
            products : []
        };
    }
    componentDidMount(){
        callApi('Sanpham','GET',null).then(res =>{
            this.props.fetchAllProducts(_.toArray(res.data));
        
    })
}

    render() {
        var { products } = this.props;
        return (
            
            <Products>
                { this.showProducts(products)}
            </Products>
        );
}
    showProducts = (products) => {
    const { onAddToCart, onChangeMessage } = this.props;
    let result = null;
    if (products.length > 0) {
        result = products.map((p, key) => {
            return <Product 
                key={key} product={p} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} 
            />;
        });
    }
    return result;
};

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
