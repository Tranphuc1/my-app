import React, { Component } from 'react';
import { firebaseConnect } from '../../../../FirebaseConnect';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
class AdminProduct extends Component {
    constructor(props){
        super(props);
        this.state ={
            key : [],
            refData:{}
        }
    }
    onDelete = (refData) =>{
        var {key} = this.state;
        var nodeData = firebaseConnect.database().ref('Database').child('Sanpham');
        // if(confirm('Bạn có chắc xóa sản phẩm này ?')){ //eslint-disable-line
        // nodeData.on('child_added',(snapshot)=>{
            
        //        var key = snapshot.key;
        //        console.log(key);
        //        this.setState({
        //             refData:snapshot.val(),
        //            key
        //         });
        //     });
            // nodeData.child(refData.key).remove();
            // var newkey = nodeData.push().key; 
            // nodeData.child(newkey).set(null);
        // }
    }
    componentWillMount(){
        callApi('Database/Sanpham','GET',null).then(res =>{
            // this.props.fetchAllProducts(_.toArray(res.data));
                this.setState({
                    key : Object.keys(res.data)
                })
                
            // console.log(Object.keys(res.data));
        })
        }
        componentDidMount(){
            setTimeout(callApi('Database/Sanpham','GET',null).then(res =>{
                var arr = Object.keys(res.data);
                var data =_.last(arr);
                var nodeData = firebaseConnect.database().ref('/Database').child('/Sanpham');
                nodeData.child(`/${data}`).update({
                    key : data
                })
                console.log(data);
              }),5000)
          }
   

    //     // callApi(`Sanpham/${key}`,'DELETE',null).then(res=>{
    //     //     console.log(res);
    //     // })
    //     // var nodeData = firebaseConnect.database().ref('/Sanpham').on('value',(snapshot)=>{
    //     //     console.log(snapshot.val());
    //         // var arr = snapshot.val();
    //         // var arr2 = Object.keys(arr);
    //         // var key = arr2[0];
    //         // console.log(key) // -KiBBDaj4fBDRmSS3j0r
    //     // })
        
    // }
    // }
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
        var {refData,key} = this.state;
        var {product,index}= this.props;
        // console.log(key);
        
        // const key = Object.keys(product).map((key) =>{});
        // console.log(key);
        return (
           
            <tr className="tbody">
                <td>{index +1}</td>
                <td>{product.key}</td>
                <td >{product.name}</td>
                <td >{product.kind}</td>
                <td>{product.author}</td>
                <td>{product.description}</td>
                <td><img src={product.url} height="100" width="100"/></td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td className="text-center" width="50px"><a className="btn btn-warning btn-sm" href="sua" role="button"><i className="fa fa-pencil-square-o" aria-hidden="true" /> Sửa</a></td>
                <td className="text-center" width="50px"><a className="btn btn-danger btn-sm" role="button"><i className="fa fa-trash-o" aria-hidden="true" 
                onClick={this.onDelete(refData)}
                /> Xóa</a></td>
            </tr>
        );
    }
}

export default AdminProduct;