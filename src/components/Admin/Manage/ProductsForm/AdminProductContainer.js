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
var nodeData = firebaseConnect.database().ref('/Sanpham');



class PushProduct extends React.Component {


  componentDidMount(){
    callApi('Sanpham','GET',null).then(res =>{
        this.props.fetchAllProducts(_.toArray(res.data));
    })
    }
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
      var { products,key } = this.props;
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
            result = products.map((product, index) => {
                return (
                    <AdminProduct
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
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
      },

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PushProduct);
