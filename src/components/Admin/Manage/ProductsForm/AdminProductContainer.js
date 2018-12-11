import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {actFetchProducts, actDeleteProductsRequest} from '../../../Products/actions/actions';
import _ from 'lodash';
import ShowProduct from './showProduct';
import AdminProduct from'./AdminProduct';
import { firebaseConnect } from '../../../../FirebaseConnect';
var nodeData = firebaseConnect.database();



class PushProduct extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            data :[]
        }
    }


  componentDidMount(){
        var ref = nodeData.ref('Database').child('Sanpham');
        ref.on('value',(snapshot)=>{
            this.props.fetchAllProducts(_.toArray(snapshot.val()));
        });
    }
    onDelete = (key) => {
        this.props.onDeleteProduct(key);
    }
    render() {
      var { products } = this.props;
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
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PushProduct);
