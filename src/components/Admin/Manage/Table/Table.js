import React, { Component } from 'react';
import TableRow from './Table-row';

class Table extends Component {


    showButton = () => {
        if (!this.props.changedButton) {
            return <a className="btn btn-success btn-sm" href="them" role="button" onClick={ (e) => this.props.FromToogle(e) }><i className="fa fa-plus" aria-hidden="true" /> Thêm</a>
        } else {
            return <a className="btn btn-danger btn-sm" href="dong" role="button" onClick={(e) => this.props.FromToogle(e) }><i className="fa fa-close" aria-hidden="true" /> Đóng</a>
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
            return <TableRow key={key} index ={key} password={value.password}>{value.username}</TableRow>
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
                            <th>Tài Khoản</th>
                            <th>Mật Khẩu</th>
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