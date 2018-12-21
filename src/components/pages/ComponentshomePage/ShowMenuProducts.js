import React, { Component } from 'react';
import callApi from '../../../ApiCaller/Api';
import { connect } from 'react-redux';
import { actAddToCart,actChangeMessage } from '../../Products/actions/actions';
import _ from 'lodash';
import ProductList from '../../Products/Components/ProductList';
class ShowMenuProducts extends Component {
    constructor(props){
        super(props);
        this.state ={
            products:[]
        }
    }
    componentWillMount(){
        callApi('/Database/Sanpham','GET',null).then(res=>{
             var data1 = _.toArray(res.data);
            this.setState({
                products: data1
            })
        })

    }
    showProducts(){
        var result=null;
        var {match} =this.props;
        var kind = match.params.kind;
        var {products} =this.state;
        var Kind = products.filter(product => product.kind === kind);
        var { onAddToCart, onChangeMessage } = this.props;
        if(Kind.length > 0){
                return <ProductList  
                    product={Kind}
                    onAddToCart = {onAddToCart} 
                    onChangeMessage = {onChangeMessage}
                />
        }
        return result;
    }
    render() {
        var {match} =this.props;
        var kind = match.params.kind;
        return (
            <div className="Container-center">
                    <div className="menu-group" style={{width:'100%', height : '600px'}}>
                        {this.showProducts()}
					</div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(null, mapDispatchToProps)(ShowMenuProducts)