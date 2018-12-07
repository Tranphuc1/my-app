import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {actFetchProducts} from '../../../Products/actions/actions';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import ShowProduct from './showProduct';


class PushProduct extends React.Component {

  componentDidMount(){
    callApi('Sanpham','GET',null).then(res =>{
        this.props.fetchAllProducts(_.toArray(res.data));
    })
}
    render() {
      var { products } = this.props;
      return (
        <div className="form-group">
          <button className="btn btn-Secondary "><Link to="/App1/PushProduct/PushForm">Thêm Sản Phẩm</Link></button>
          <ShowProduct Data={products} ></ShowProduct>
        </div>
      );
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
        products : state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      fetchAllProducts : (products) => {
          dispatch(actFetchProducts(products));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PushProduct);