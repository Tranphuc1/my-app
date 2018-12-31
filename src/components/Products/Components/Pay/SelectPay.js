import React, { Component } from 'react';
import ShipCode from './COD';
import { connect } from 'react-redux';
import OnlinePay from './OnlinePay';
class SelectPay extends Component {
    constructor(props){
        super(props);
        this.state={
            Select:''
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
    showComponent=()=>{
        var result='';
        var {authUser} =this.props;
        var {Select} = this.state;
        var {cart} = this.props;
        if(Select == "COD"){
            if(cart.length >0){
                    return <ShipCode
                        authUser={authUser}
                        cart={cart}
                    />
            }
        }
        if(Select == "PayOnline"){
            return  <OnlinePay/>
        }
        return result;
    }
    render() {
        
        return (
            <tr className="PayComponent">
                <td className="SelectPay" colSpan={8} style={{textAlign:'center'}}>
                    <h4>Chọn Phương Thức Thanh Toán</h4>
                    <select style={{width:'250px',height:"25px"}} onChange={ (e) => this.changedData(e) } name="Select">
                        <option value>---Chọn---</option>
                        <option value="COD">COD</option>
                        <option value="PayOnline">Thanh Toán Trực Tuyến</option>
                    </select >
                    <br/>
                    {this.showComponent()}
                </td>
            </tr>
        );
    }
}
const mapStateToProps = state => {
    return {
        authUser: state.sessionState.authUser
    }
}
export default connect(mapStateToProps)(SelectPay);