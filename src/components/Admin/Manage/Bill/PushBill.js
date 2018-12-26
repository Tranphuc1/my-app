import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import ShowBill from './ShowBill';
class PushBill extends Component {
    constructor(props){
        super(props);
        this.state={
            key:[]
        }
    }
    componentDidMount(){
        callApi('Database/Hoadon','GET',null).then(res=>{
            var key = Object.keys(res.data);
            this.setState({
                key:key
            })
        })
    }
    showBill=()=>{
        var result='';
        var {key} = this.state;
        if (key.length > 0){
           result = key.map((key,index)=>{
                return (
                <ShowBill
                    key={index}
                    keys={key}
                    index={index}
                />
                );
            });
        }
        return result;
    }
    
    render() {
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            {/* <th>Mã Hóa đơn</th> */}
                            <th>Tên Sản phẩm</th>
                            <th>Tên</th>
                            <th>Địa Chỉ</th>
                            <th>Địa chỉ giao</th>
                            <th>Telephone</th>
                            <th>Số Lượng</th>
                            <th>Tổng Tiền</th>
                            <th className="text-center" colSpan={2}>
                                Tác Vụ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showBill()}
                    </tbody>
                </table>
            </div>
        );
    }
}

  export default PushBill;