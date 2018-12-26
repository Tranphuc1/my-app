import React, { Component } from 'react';
import _ from 'lodash';
class ShowProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            nameProduct:''
        }
    }
    componentDidMount(){
        var{cart} = this.props;
        var name =_.get(cart,['product','name'])
        this.setState({
            nameProduct:name
        })
    }
    render() {
        var {nameProduct}=this.state; 
        return (
            <td>{nameProduct}</td>
        );
    }
}

export default ShowProduct;