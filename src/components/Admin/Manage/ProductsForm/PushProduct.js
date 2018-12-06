import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { firebaseConnect } from '../../../../FirebaseConnect';
import {Link } from 'react-router-dom';
import _ from 'lodash';


var products = [];
function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ',
      author: 'traphuc',
      kind:'',
      rating:'5',
      description:'tranphuc',
      img:'',
      url:'',
      price:i
    });
  }
}
addProducts(50);

export default class PushProduct extends React.Component {
    render() {
      const options = {
        page: 2,  // which page you want to show as default
        sizePerPageList: [ {
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: 'All', value: products.length
        } ], // you can change the dropdown list for size per page
        sizePerPage: 10,  // which size per page you want to locate as default
        pageStartIndex: 0, // where to start counting the pages
        paginationSize: 3,  // the pagination bar size.
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
        firstPage: 'First', // First page button text
        lastPage: 'Last', // Last page button text
        prePageTitle: 'Go to previous', // Previous page button title
        nextPageTitle: 'Go to next', // Next page button title
        firstPageTitle: 'Go to first', // First page button title
        lastPageTitle: 'Go to Last', // Last page button title
        paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
        paginationPosition: 'top'  // default is bottom, top and both is all available.
      };
  
      return (
        <div className="PushProduct" >

            <button className="btn btn-info"><Link to="/App1/PushProduct/PushForm">Thêm Sản Phẩm</Link></button>

            <div className="col-xs-8 col-sm-8 col-md-20 col-lg-8">
              <BootstrapTable data={ products } pagination={ true } options={ options }>
                    <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'> Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='author'> author</TableHeaderColumn>
                    <TableHeaderColumn dataField='rating'> rating</TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>description</TableHeaderColumn>
                    <TableHeaderColumn dataField='img'> img</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'> Price</TableHeaderColumn>
              </BootstrapTable >
            </div>
        </div>
      );
    }
  }
