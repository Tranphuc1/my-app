import React, { Component } from 'react';

class showProduct extends Component {
    render() {
        var {products} = this.props;
        return (
            <div className="PushProduct" >
            <table className="table">
                <thead>
                    <tr>
                    <th>Tên Sản Phẩm</th>
                    <th>Thể Loại</th>
                    <th>author</th>
                    <th>description</th>
                    <th>img</th>
                    <th>price</th>
                    <th >rating</th>
                    <th >Thực Thi</th>
                    <td className="text-center" width="50px"><a className="btn btn-warning btn-sm" href="sua" role="button"><i className="fa fa-pencil-square-o" aria-hidden="true" /> Sửa</a></td>
                    <td className="text-center" width="50px"><a className="btn btn-danger btn-sm" href="xoa" role="button"><i className="fa fa-trash-o" aria-hidden="true" /> Xóa</a></td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </table>
            </div>
        )
    }
}

export default showProduct;