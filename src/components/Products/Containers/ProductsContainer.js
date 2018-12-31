import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actAddToCart,actChangeMessage,actFetchProducts } from '../actions/actions';
import callApi from '../../../ApiCaller/Api';
import MenuHorizontal from '../Components/MenuHorizontal';
import ProductList from '../Components/ProductList';
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
    showProducts1(){
        var {products} = this.props;
        var result=null;
        var { onAddToCart, onChangeMessage } = this.props;
        var A = products.filter(product => product.rating >= 3 );
        if(A.length>0){
            return <ProductList 
            product={A}
            onAddToCart ={onAddToCart}
            onChangeMessage={onChangeMessage}
            />
        }
        return result;
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
                <h3 style={{borderBottom:'#e4e4e4 solid 1px',background:'#e4e4e4',height:'30px'}}>Nổi Bật</h3>
                            <div className="menu-group" style={{width:'100%', height : '600px',display:'-webkit-box'}}>
                                    {this.showProducts1()}
                            </div>
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
