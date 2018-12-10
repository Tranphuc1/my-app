import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {actFetchProducts, actDeleteProductsRequest, actGetKey} from '../../../Products/actions/actions';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import ShowProduct from './showProduct';
import AdminProduct from'./AdminProduct';
import { firebaseConnect } from '../../../../FirebaseConnect';
import PushForm from './PushForm';
var nodeData = firebaseConnect.database();



class PushProduct extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            data :[]
        }
    }
    //     this.state ={
    //         key:'',
    //       name:'',
    //       author: '',
    //       kind:'',
    //       rating:'',
    //       description:'',
    //       price:null,
    //       url:''
    //     }
    // }


  componentDidMount(){
    // callApi('Database/Sanpham','GET',null).then(res =>{
        var ref = nodeData.ref('Database').child('Sanpham');
        ref.on('value',(snapshot)=>{
            this.props.fetchAllProducts(_.toArray(snapshot.val()));
        });
        // this.props.fetchAllProducts(_.toArray(res.data));
        //     this.setState({
        //         key : Object.keys(res.data)
        //     })
            
        // console.log(Object.keys(res.data));
    // })
    }
    // writeNewPost(key,name,author,kind,rating,description,price,url) {
    //     // A post entry.
    //     var postData = {
    //         key: key,
    //         name: name,
    //         author: author,
    //         kind: kind,
    //         rating: rating,
    //         description: description,
    //         price :price,
    //         url :url
    //     };
      
    //     // Get a key for a new Post.
    //     var newPostKey = firebase.database().ref('Database').child('Sanpham').push().key;
      
    //     // Write the new post's data simultaneously in the posts list and the user's post list.
    //     var updates = {};
    //     updates['/Database/Sanpham' + newPostKey] = postData;
      
    //     return firebase.database.ref('Database').child('Sanpham').update(updates);
    //   }
    // componentWillMount(){
    //     // nodeData.on('value',(snapshot)=>{
    //     //     var key =Object.keys(snapshot.val());
    //     //     // this.props.getKeyProducts(key);
    //     //     console.log(key);
    //     })
        // callApi('Sanpham','GET',null).then(res =>{
        //     var key = (res.data)
        //     console.log(key);
        //     console.log(_.findKey(res.data));
            // this.props.getKeyProducts(_.chunk([key],1));
            // console.log(key);
            // this.setState({
            //   key : _.last(arr)
            // });
    //   }
    onDelete = (key) => {
        this.props.onDeleteProduct(key);
    }
    render() {
        // console.log(this.state.key);
      var { products } = this.props;
    //   console.log(key);
      return (
        <div className="form-group">
          <button className="btn btn-Secondary "><Link to="/App1/PushProduct/PushForm">Thêm Sản Phẩm</Link></button>
          <ShowProduct  >{this.showProducts(products)}</ShowProduct>
        </div>
      );
    }
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product,index) => {
                return (
                    <AdminProduct
                        key={index}
                        product={product}
                        index={index}
                        // onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
  }
PushProduct.propTypes = {
products : PropTypes.arrayOf(
    PropTypes.shape({
        key : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        description : PropTypes.string.isRequired,
        author : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        inventory : PropTypes.number.isRequired,
        rating : PropTypes.number.isRequired,
        url : PropTypes.string.isRequired
    })
).isRequired,
    actFetchProducts:PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        products : state.products,
        key : state.key
    }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      fetchAllProducts : (products) => {
          dispatch(actFetchProducts(products));
      },
      onDeleteProduct : (key)=>{
          dispatch(actDeleteProductsRequest(key));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PushProduct);
