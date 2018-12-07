import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {actFetchProducts} from '../../../Products/actions/actions';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import showProduct from './showProduct';
import Product from './Product';

class PushProduct extends React.Component {

  componentDidMount(){
    callApi('Sanpham','GET',null).then(res =>{
        this.props.fetchAllProducts(_.toArray(res.data));
    })
}
    render() {
      var { products } = this.props;
      console.log(products);
      return (
        <div>
          <button className="btn btn-Secondary "><Link to="/App1/PushProduct/PushForm">Thêm Sản Phẩm</Link></button>
          <showProduct>
              {this.showProductsAdmin(products)}
          </showProduct>
        </div>
      );
    }
  showProductsAdmin = (products) => {
    let result = null;
    if (products.length > 0) {
        result = products.map((p, key) => {
            return <Product 
                key={key} product={p} 
            />;
        });
    }
    return result;
};
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
export default connect(mapStateToProps, mapDispatchToProps)(PushProduct);