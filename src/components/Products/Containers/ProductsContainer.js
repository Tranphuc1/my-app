import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actAddToCart,actChangeMessage,actFetchProducts } from '../actions/actions';
import callApi from '../../../ApiCaller/Api';
import MenuHorizontal from '../Components/MenuHorizontal';
var _ = require('lodash');

class ProductsContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
            kind : []
        };
    }
    componentWillMount(){
        callApi('Database/Sanpham','GET',null).then(res =>{
            this.props.fetchAllProducts(_.toArray(res.data));
        });
    }
    showProducts(){
        var result = null;
        var { products } = this.props;
        var kind =_.uniq(_.map(products,e => e.kind));
        var { onAddToCart, onChangeMessage } = this.props;
        if(kind.length > 0){
            result = kind.map((kind, index) => {
                return <MenuHorizontal  
                    key={index} 
                    kind = {kind}
                    products={products}
                    onAddToCart = {onAddToCart} 
                    onChangeMessage = {onChangeMessage}
                />
            });
        }
        return result;
    }
    render() {
        return (
            <div className="container">
                {this.showProducts()}
             </div>
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
            price : PropTypes.string.isRequired,
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
