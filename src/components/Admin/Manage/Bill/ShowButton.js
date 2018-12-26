import React, { Component } from 'react';
import _ from 'lodash';
import { firebaseConnect } from '../../../../FirebaseConnect';
class ShowButton extends Component {
    constructor(props){
        super(props);
        this.state={
            key:'',
            quantity:'',
            a:null
        }
    }
    componentDidMount(){
        var{cart} = this.props;
        var quantity = _.get(cart,['quantity']);
        var key = _.get(cart,['product','key']);
        var quantityP=_.get(cart,['product','quantity']);
        var a =parseInt(quantityP)-parseInt(quantity)
        this.setState({
            quantity:quantity,
            key:key,
            a:a
        })
    }
    onChangeQuantity=()=>{
        var {key,a} = this.state;
        firebaseConnect.database().ref(`Database/Sanpham/${key}/quantity`).set(a);
    }
    render() {
        alert('hello')
        return (
            <a></a>
        );
    }
}

export default ShowButton;