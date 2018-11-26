import React, { Component } from 'react';
//components
import MenuList from './MenuProduct';

class Product extends Component {
  render() {

    return (
      <div >
        <h2 align="center">Danh Sách Sản Phẩm</h2>
        <h3>Sách Mới</h3>
        <MenuList />
        {/* <DetailProducts /> */}
      </div>
     );
  }
}

export default Product;
