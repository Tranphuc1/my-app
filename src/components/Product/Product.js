import React, { Component } from 'react';
//components
import MenuList from './MenuList';

class Product extends Component {
  render() {

    return (
      <div >
        <h2 align="center">Danh Sách Sản Phẩm</h2>
        <h3>Sách Mới</h3>
        <MenuList />
      </div>
     );
  }
}

export default Product;
