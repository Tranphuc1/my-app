import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products';
import Product from '../Product';
import PropTypes from 'prop-types';
import { firebaseConnect } from '../../../FirebaseConnect';
import { actAddToCart } from '../Reducer/index';
var list = [];
 firebaseConnect.database().ref("/Sanpham").on('value',function(note){
     note.forEach(Element=>{
        const key=Element.key;
        const name = Element.val().name;
        const author = Element.val().author;
        const kind = Element.val().kind;
        const rating = Element.val().rating;
        const description = Element.val().description;
        const price = Element.val().price;
        const url = Element.val().url;
            list.push({
                key:key,
                name:name,
                author:author,
                kind:kind,
                rating:rating,
                description:description,
                price:price,
                url:url
            })
    })
    });
class ProductsContainer extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         data :[]
    //     }
    // }
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
    //                 <Product 
    //                 key={key}
    //                 />
    //             )
    //         })
    //     }
    // }
    render() {
        console.log(list);
        var { products } = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }

    showProducts(products){
        var result = null;
        var { onAddToCart} = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                    key={index} 
                    product={product}
                    onAddToCart = {onAddToCart} 
                    // onChangeMessage = {onChangeMessage}
                />
            });
        }
        return result;
    }
}
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            key : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            url : PropTypes.string.isRequired,
            kind : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired
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
        }
        // onChangeMessage : (message) => {
        //     dispatch(actChangeMessage(message));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
