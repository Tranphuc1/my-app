import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Components/Products';
import Product from '../Components/Product';
import PropTypes from 'prop-types';
import { actAddToCart,actChangeMessage } from '../Reducer/index';
import { actFetchProducts } from '../actions/actions';
import callApi from '../../../ApiCaller/Api';
class ProductsContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
            data : []
        };
            
        
    }
    componentDidMount(){
        callApi('Sanpham','GET',null).then(res =>{
            console.log('reder');
            this.setState({
                data : res.data
            });
        });
    }
    // componentWillMount(){
    //     nodeData.on('value',(notes) => {
    //         var arrayData =[];
    //         notes.forEach(Element =>{
    //             const key = Element.key;
    //             const name = Element.val().name;
    //             const author = Element.val().author;
    //             const kind = Element.val().kind;
    //             const rating = Element.val().rating;
    //             const description = Element.val().description;
    //             const price = Element.val().price;
    //             const url = Element.val().url;
    //             arrayData.push({
    //                 key:key,
    //                 name:name,
    //                 author:author,
    //                 kind:kind,
    //                 rating:rating,
    //                 description:description,
    //                 price:price,
    //                 url:url
    //             })
    //         });
    //         this.setState({
    //             data:arrayData
    //         });
    //     })
    // }
    // getData = () => {
    //     if(this.state.data)
    //     {
    //         return this.state.data.map((value,key) => {
    //             return (
    //                 <Products 
    //                     key={key}>
    //                 </Products>
    //             )
    //         })
    //     }
    // }
    render() {
        console.log(this.state.data);
        var { products } = this.props;
        return (
            <Products>
                { this.showProducts(products)}
            </Products>
        );
}
    showProducts = products => {
    const { onAddToCart, onChangeMessage } = this.props;
    let result = null;
    if (products.length > 0) {
        result = products.map((p, i) => {
            return <Product key={i} product={p} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />;
        });
    }
    return result;
};

}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            key : PropTypes.number.isRequired,
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
