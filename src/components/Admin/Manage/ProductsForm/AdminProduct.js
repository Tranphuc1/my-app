import React, { Component } from 'react';
import { firebaseConnect } from '../../../../FirebaseConnect';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
class AdminProduct extends Component {

    onDelete = (key) =>{
        // if(confirm('Bạn có chắc xóa sản phẩm này ?')){ //eslint-disable-line
        //     // this.props.onDelete(key);
            
        // }
        // firebaseConnect.database().ref('Sanpham').child(_.findKey)
    }
    // onDelete = (key) => {
    //     this.props.onDeleteProduct(key);
    // }
    // submit = () => {
    //     var {product}= this.props;
    //     confirmAlert({
    //         title: 'Confirm to submit',
    //         message: 'Are you sure to do this.',
    //         button: [
    //             {
    //                 label:'Yes',
    //                 onClick :  () => this.onDelete(product.key) 
    //             },
    //             {
    //                 label:'No',
    //                 onClick: () => alert('Click No')
    //             }
    //         ]
    //     })
    // }
    render() {
        var {product,index}= this.props;
        return (
            <tr className="tbody">
                <td>{index +1}</td>
                <td >{product.name}</td>
                <td >{product.kind}</td>
                <td>{product.author}</td>
                <td>{product.description}</td>
                <td><img src={product.url} height="100" width="100"/></td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td className="text-center" width="50px"><a className="btn btn-warning btn-sm" href="sua" role="button"><i className="fa fa-pencil-square-o" aria-hidden="true" /> Sửa</a></td>
                <td className="text-center" width="50px"><a className="btn btn-danger btn-sm" role="button"><i className="fa fa-trash-o" aria-hidden="true" 
                onClick={this.onDelete}
                /> Xóa</a></td>
            </tr>
        );
    }
}

export default AdminProduct;