import React, { Component } from 'react';

class AdminProduct extends Component {
    render() {
        return (
            <tr className="tbody">
                <td >{this.props.children}</td>
                <td >{this.props.kind}</td>
                <td>{this.props.author}</td>
                <td>{this.props.description}</td>
                <td><img src={this.props.url} height="100" width="100"/></td>
                <td>{this.props.price}</td>
                <td>{this.props.rating}</td>
                <td className="text-center" width="50px"><a className="btn btn-warning btn-sm" href="sua" role="button"><i className="fa fa-pencil-square-o" aria-hidden="true" /> Sửa</a></td>
                <td className="text-center" width="50px"><a className="btn btn-danger btn-sm" href="xoa" role="button"><i className="fa fa-trash-o" aria-hidden="true" /> Xóa</a></td>
            </tr>
        );
    }
}

export default AdminProduct;