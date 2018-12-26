import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import ShowCart from './ShowCart';
import ShowProduct from './ShowProduct';
import NumberFormat from 'react-number-format';
import { firebaseConnect } from '../../../../FirebaseConnect';
class ShowBill extends Component {
    constructor(props){
        super(props);
        this.state={
            names:'',
            diachi:'',
            diachi2:'',
            telephone:'',
            Tong:'',
            cart:[]
        }
    }
    componentDidMount(){
        var {keys} = this.props;
        callApi(`Database/Hoadon/${keys}`,'GET',null).then(res=>{
            var cart =_.get(res.data,['cart']);
            var name =_.get(res.data, ['name']);
            var diachi =_.get(res.data, ['diachi']);
            var diachi2 =_.get(res.data, ['diachi2']);
            var telephone =_.get(res.data, ['telephone']);
            var Tong =_.get(res.data,['Tong']);
            this.setState({
                names:name,
                diachi:diachi,
                diachi2:diachi2,
                telephone:telephone,
                Tong:Tong,
                cart:cart
            })
        })
    }
    onChangeQuantity=()=>{
        var total=0;
        var {cart} = this.state;
        if (cart.length > 0){
           cart.map((cart,index)=>{   
                var quantityP = _.get(cart,['product','quantity']);
                var quantity = _.get(cart,['quantity']);
                var key = _.get(cart,['product','key']);
                total =parseInt(quantityP)-parseInt(quantity);
                firebaseConnect.database().ref(`Database/Sanpham/${key}/quantity`).set(total).then(
                    alert('Thành công')
                )
                if(total < 0){
                    return total == 0;
                }
            });
        }
    }   
    DeleteBill=()=>{
        var {keys} = this.props;
        firebaseConnect.database().ref(`Database/Hoadon/${keys}`).set(null).then(
            alert('Xóa hóa đơn thành công')
        )
        setTimeout(() => {
                window.location.reload();
        }, 1000);
        
    }
    
    showCart=()=>{
        var result='';
        var {cart} = this.state;
        if (cart.length > 0){
           result = cart.map((cart,index)=>{
                return (
                <ShowCart
                    key={index}
                    cart={cart}
                />
                );
            });
        }
        return result;
    }
    showProduct=()=>{
        var result2='';
        var {cart} = this.state;
        if (cart.length > 0){
           result2 = cart.map((cart,index)=>{
                return (
                <ShowProduct
                    key={index}
                    cart={cart}
                />
                );
            });
        }
        return result2;
    }
    render() {
        var {index} = this.props;
        var {names,diachi,diachi2,telephone,Tong} = this.state;
        return (
            <tr>
                <td>{index+1}</td>
                {/* <td>{keys}</td> */}
                <td className="showProduct" style={{display:'grid'}}>{this.showProduct()}</td>
                <td>{names}</td>
                <td>{diachi}</td>
                <td>{diachi2}</td>
                <td>{telephone}</td>
                <td className="Showquantity" style={{display:'grid'}}>{this.showCart()}</td>
                <td><NumberFormat value={Tong} displayType={'text'} thousandSeparator={true} suffix={' vnđ'} /></td>
                <td className="text-center" width="70px">
                <button className="btn btn-success btn-sm" role="button" onClick={()=>{this.onChangeQuantity()}}><i className="fa fa-trash-o" aria-hidden="true" 
                />Chấp Nhận</button>
                 </td>
                 {/* {this.showButton()} */}
                <td className="text-center" width="50px">
                <button className="btn btn-danger btn-sm" role="button" onClick={()=>{this.DeleteBill()}}><i className="fa fa-trash-o" aria-hidden="true" 
                /> Hủy Bỏ</button></td>
            </tr>
        );
    }
}

export default ShowBill;