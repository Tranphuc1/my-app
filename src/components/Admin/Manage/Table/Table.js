import React, { Component } from 'react';
import TableRow from './Table-row';

class Table extends Component {


    showButton = () => {
        if (!this.props.changedButton) {
            return <a className="btn btn-success btn-sm" role="button" onClick={ (e) => this.props.FromToogle(e) }><i className="fas fa-times"/>Thêm</a>
        } else {
            return <a className="btn btn-danger btn-sm" role="button" onClick={(e) => this.props.FromToogle(e) }><i className="fas fa-times"/> Đóng</a>
        }
    }
    classTable = () => {
        if (!this.props.changedButton) {
            return "col-xs-12 col-sm-12 col-md-12 col-lg-12";
        } else {
            return "col-xs-8 col-sm-8 col-md-8 col-lg-8";
        }
    }

    mappingData = () =>{
        const tableRow = this.props.userData.map((value,key) => {
            return <TableRow key={key}
             index ={key} 
             uid ={value.uid} 
             role={value.role}
            sodienthoai={value.sodienthoai}
                diachi={value.diachi}>{value.email}</TableRow>
        });
        return tableRow;
    }
    render() {
        return (
            <div className={this.classTable()}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Phân Quyền</th>
                            <th>UserID</th>
                            <th>Tài Khoản</th>
                            <th>Địa Chỉ</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th className="text-center" colSpan={2}>
                                { this.showButton() }
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;