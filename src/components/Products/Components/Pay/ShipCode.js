import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import callApi from '../../../../ApiCaller/Api';
import {firebaseConnect} from '../../../../FirebaseConnect';
class ShipCode extends Component {
    constructor(props){
        super(props);{
            this.state={
                user:'',
                name:'',
                diachi:'',
                diachi2:'',
                telephone:'',
                Tong:'',
                vanchuyen:'0',
                checkdata:true
            }
        }
    }
    changedData = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState(() => ({
          [name] : value
        }));
    }
    checkForm = ()=>{
        var {name,diachi,diachi2,telephone} = this.state;
            if(name =='' && diachi =='' && diachi2=='')
            {
                alert('Chưa Nhập Đầy Đủ Thông Tin');
            } else {
                
            }
    }
    ShipCode=()=>{
        var {name,diachi,diachi2,telephone,Tong,vanchuyen} = this.state;
        var {cart} = this.props;
        const item ={};
          item.diachi = diachi;
          item.diachi2 = diachi2;
          item.telephone = telephone;
          item.name = name;
          item.Tong=Tong;
          item.cart = cart;
          item.vanchuyen=vanchuyen;
          firebaseConnect.database().ref('Database/Hoadon').push(item).then(
            alert('Thành Công')
        )
        setTimeout(() => {
            this.setState({
                checkdata:false
            })
        }, 1000);
    }
    componentDidMount (){
        var {cart} = this.props;
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        this.setState({
            Tong:total
        })
    }
    cleanLocalStore =()=>{
        var {checkdata} = this.state;
        if(!checkdata){
            localStorage.clear();
            window.location.reload();
        }
    }
    render() {
        var {cart} = this.props;
        var {name,diachi,diachi2,telephone,Tong} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{marginLeft:'300px'}}>
                <div className="form-group" >
                    <label htmlFor="name">Họ và Tên</label>
                    <input type="text" name="name" value={name} onChange={ (e) => this.changedData(e) } placeholder="Nhập Họ và Tên"  />
                </div>
                <div className="form-group">
                    <label htmlFor="Số điện thoại">Số Điện Thoại</label>
                    <input type="Number" name="telephone" value={telephone}  className="form-control" placeholder="Nhập Số Điện Thoại" onChange={ (e) => this.changedData(e) }/>
                </div>
                <div className="form-group">
                    <label htmlFor="diachi">Địa Chỉ</label>
                    <input type="text" name="diachi" value={diachi}  className="form-control" placeholder="Nhập Địa Chỉ" onChange={ (e) => this.changedData(e) }/>
                </div>
                <div className="form-group">
                    <label htmlFor="diachi2">Địa Chỉ Giao Hàng</label>
                    <input type="text" name="diachi2" value={diachi2} className="form-control" placeholder="Mô Tả" onChange={ (e) => this.changedData(e) }/>
                </div>
                <button type="button" className="btn btn-info" onClick={()=>{this.ShipCode()}}>Thanh Toán</button>
                {this.cleanLocalStore()}
            </div>
        );
    }
}

export default ShipCode;