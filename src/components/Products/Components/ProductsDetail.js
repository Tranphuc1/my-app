import React, { Component } from 'react';
import callApi from '../../../ApiCaller/Api';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { actAddToCart,actChangeMessage } from '../actions/actions';
import _ from 'lodash';
import ProductList from './ProductList';
import * as Message from '../constants/Message';
import {Link } from 'react-router-dom';


class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state ={
          data1:[],
          product:[]
        }
    }
    componentWillMount(){
        var {match} = this.props;
        if(match){
            var key = match.params.key;
            callApi(`Database/Sanpham/${key}`,'GET',null).then(res=>{
                var data = res.data;
                this.setState({
                    data1 : data
                });
            });
        }
    }
    componentDidMount(){
        callApi('Database/Sanpham','GET',null).then(res=>{
            var data = _.toArray(res.data);
            this.setState({
                product : data
            })
        });
    }
    showAuthor(){
        var {product} = this.state;
        var result=null;
        var author = this.state.data1.author;
        var { onAddToCart, onChangeMessage } = this.props;
        var A = product.filter(product => product.author === author);
        if(A.length>0){
            return <ProductList 
            product={A} 
            onAddToCart ={onAddToCart}
            onChangeMessage={onChangeMessage}
            />
        }
        return result;
    }
    onAddToCart = (data1) => {
        var { onAddToCart, onChangeMessage } = this.props;
		onAddToCart(data1);
		onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
	};
    render() {
        let linkToDetail = '/cart';
        var {product} = this.state;
        var {data1} = this.state;
        return (
            <div className="Container-center" >
                <div className="menuBaner" style={{background:'#e4e4e4'}}>
                    <a className="glyphicon glyphicon-th-list" style={{left:'40px'}}>&nbsp;Danh Mục Sản Phẩm</a>
                    <a className="glyphicon glyphicon-earphone" style={{left: '70%'}}> HotLine:0988888888</a>
                </div>
						<div className="menu-group" style={{width:'100%', height : '400px',display:'-webkit-box'}}>
                            <div className="imageinfo-group" style ={{ width:'25%', height:'300px',marginLeft:'70px',marginTop:'20px'}}>
                                    <img alt="ImageProduct" src={data1.url} style={{width:'250px',height:'300px'}}/>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'70%'}}> 
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <label htmlFor="name"><h2>{data1.name}</h2></label>
                            </div>
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <label htmlFor="name"><h5>Tác Giả:</h5></label>
                                <label>{data1.author}</label>
                            </div>
                            
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <span className="final-price">Giá Khuyến Mại:<NumberFormat value={data1.price*0.75} displayType={'text'} thousandSeparator={true} suffix={' đ'} /></span>
                                <br/>
                                <span className="price-regular">Giá Bìa:
                                <NumberFormat value={data1.price} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
                                </span>
                            </div>
                            <div className="form-group" style={{height:'180px'}}  >
                                <p>
                                    <i className="fa fa-check">
                                        <span>Bọc Plastic miễn phí</span>
                                    </i>
                                </p>
                                <p>
                                    <i className="fa fa-check">
                                        <span>Giao hàng miễn phí trong nội thành TP. HN với đơn hàng &nbsp;</span>
                                            <span style={{color:"#00cc66"}}>
                                                <strong>>150.000 vnđ</strong>
                                            </span>
                                    </i>
                                </p>
                                <p>
                                    <i className="fa fa-check">
                                        <span>Giao hàng miễn phí toàn quốc với đơn hàng&nbsp; </span>
                                        <span style={{color:"#00cc66"}}>
                                                <strong>>250.000 vnđ</strong>
                                            </span>
                                    </i>
                                </p>
                                
                                {/* <button type="button" className="btn btn-danger">Mua Hàng</button> */}
                                
                                <Link to={linkToDetail}
									className="btn-floating blue-gradient"
									data-toggle="tooltip"
									data-placement="top"
									data-original-title="Add to Cart"
									onClick={() => this.onAddToCart(data1)}
								>
									<i className="fa fa-shopping-cart" />
                                </Link>
                            </div>
                            </div>
						</div>
                    <div className="menu-group" style={{width:'100%', height : '400px',display:'-webkit-box'}}>
                            <form className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'90%'}}> 
                                <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                    <label htmlFor="name"><h2>Giới thiệu Sách</h2></label>
                                </div>
                                <div className="form-group" style={{height:'50px'}}  >
                                    <label htmlFor="name"><h4>{data1.name}</h4></label>
                                </div>
                                <div className="form-group" style={{height:'240px'}}  >
                                    <label htmlFor="name"><h4>Giới Thiệu</h4></label>
                                    <br/>
                                    <a>{data1.description}</a>
                                </div>
                            </form>
						</div>
                        <h3>Gợi Ý Sản Phẩm</h3>
                    <div className="menu-group" style={{width:'100%', height : '600px',display:'-webkit-box'}}>
                            {this.showAuthor()}
					</div>
	    	</div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductDetail);