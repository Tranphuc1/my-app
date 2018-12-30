import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { firebaseConnect } from '../../../../FirebaseConnect';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import NumberFormat from 'react-number-format';
class AdminProduct extends Component {
    onDelete = (key) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(key);
        }
    }
    componentWillMount(){
        callApi('Database/Sanpham','GET',null).then(res =>{
                this.setState({
                    key : Object.keys(res.data)
                })
        })
        }
        updatekey=()=>{
           callApi('Database/Sanpham','GET',null).then(res =>{
                var arr = Object.keys(res.data);
                var data =_.last(arr);
                var nodeData = firebaseConnect.database().ref('/Database').child('/Sanpham');
                nodeData.child(`/${data}`).update({
                    key : data
                });
            });
          }
        showQuantity=()=>{
            var {product}= this.props;
            var quantity =_.get(product,['quantity']);
            if(quantity == 0 ){
                return <h4>Hết Hàng</h4>
            }else {
                return <a>Còn Hàng</a>
            }

        }
    render() {
        var {product,index}= this.props;
        return (
            <tr className="tbody">
            {this.updatekey()}
                <td>{index +1}</td>
                <td >{product.name}</td>
                <td >{product.kind}</td>
                <td>{product.author}</td>
                <td>{product.description}</td>
                <td>{this.showQuantity()}</td>
                <td><img src={product.url} height="100" width="100"/></td>
                <td><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' đ'} /></td>
                <td>{product.rating}</td>
                <td className="text-center" width="70px">
                    <Link to={`/App1/PushProduct/${product.key}/EditForm`}>
                        <button className="btn btn-warning btn-sm" type="button">
                        <i className="fas fa-edit"></i>
                        Sửa</button>
                    </Link>
                 </td>
                <td className="text-center" width="50px">
                <button className="btn btn-danger btn-sm" role="button"><i className="fas fa-trash-alt"
                onClick={() => this.onDelete(product.key)}
                /> Xóa</button></td>
            </tr>
        );
    }
}

export default AdminProduct;