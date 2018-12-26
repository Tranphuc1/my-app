import React, { Component } from 'react';
import _ from 'lodash';
class ShowCart extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity:''
        }
    }
    componentDidMount(){
        var{cart} = this.props;
        var quantity = _.get(cart,['quantity']);
        this.setState({
            quantity:quantity
        })
    }
    render() {
        var {quantity}=this.state; 
        return (
            <td>{quantity}</td>
        );
    }
}

export default ShowCart;