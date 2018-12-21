import React, { Component } from 'react';

class FormCheck extends Component {
    constructor(props){
        super(props);
        this.state =({
            authUser:'',
        })
    }
    render() {
        return (
            <div className="CheckComment" >
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>gi
                        <th>Comment</th>
                        <th>ProductName</th>
                        <th>Ảnh</th>
                        <th className="text-center" colSpan={2}>Quyền</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="tbody">
                        <td>{}</td>
                        <td >{}</td>
                        <td >{}</td>
                        <td className="text-center" width="50px">
                        <button className="btn btn-danger btn-sm" role="button"><i className="fa fa-trash-o" aria-hidden="true" 
                        /> Xóa</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FormCheck;