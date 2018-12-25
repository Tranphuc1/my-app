import React, { Component } from 'react';
import callApi from '../../../ApiCaller/Api';
import _ from 'lodash';
import ProductList from '../../Products/Components/ProductList';

class SearchChildren extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentWillMount(){
        callApi('Database/Sanpham','GET',null).then(res=>{
            this.setState({
                products:_.toArray(res.data)
            })
        })
    }
    showAuthor=()=>{
    var {products} = this.state;
    var {match} = this.props;
    var keyword = match.params.keyword;
    var result=[];
    products.forEach((item) => {
      if(item.name.indexOf(keyword) !== -1){
        result.push(item);
      }
    });
    if(result.length > 0){
        return <ProductList
        product={result}
        />
    }
    if(result.length == 0){
        return `Không Tìm thấy Sản Phẩm "${keyword}"`
    }
  }
    render() {
        return (
            <div className="SearchChildern">
                {this.showAuthor()}
            </div>
        );
    }
}
export default SearchChildren;