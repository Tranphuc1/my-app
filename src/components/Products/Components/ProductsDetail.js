import React, { Component } from 'react';
import callApi from '../../../ApiCaller/Api';
import NumberFormat from 'react-number-format';
import ProductList from './ProductList';
import _ from 'lodash';
class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state ={
          key:'',
          name:'',
          author: '',
          kind:'',
          rating:null,
          description:'',
          price:null,
          url:''
        }
    }
    componentWillMount(){
        var {match} = this.props;
        if(match){
            var key = match.params.key;
            callApi(`Database/Sanpham/${key}`,'GET',null).then(res=>{
                var data = res.data;
                this.setState({
                    key: data.key,
                    name: data.name,
                    author : data.author,
                    kind : data.kind,
                    rating: data.rating,
                    description : data.description,
                    url: data.url,
                    price: data.price
                });
            })
        }
    }
    showAuthor(){
        var {author} = this.state;
        console.log(author);
    }
    render() {
        var {name,author,description,url,price} = this.state;
        // console.log(this.state.author);
        return (
            <div className="Container-center" >
                <div className="menuBaner" style={{background:'#e4e4e4'}}>
                    <a className="glyphicon glyphicon-th-list" style={{left:'40px'}}>&nbsp;Danh Mục Sản Phẩm</a>
                    <a className="glyphicon glyphicon-earphone" style={{left: '70%'}}> HotLine:0988888888</a>
                </div>
						<div className="menu-group" style={{width:'100%', height : '400px',display:'-webkit-box'}}>
                            <div className="imageinfo-group" style ={{ width:'25%', height:'300px',marginLeft:'70px',marginTop:'20px'}}>
                                    <img alt="ImageProduct" src={url} style={{width:'250px',height:'300px'}}/>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'70%'}}> 
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <label htmlFor="name"><h2>{name}</h2></label>
                            </div>
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <label htmlFor="name"><h5>Tác Giả:</h5></label>
                                <label>{author}</label>
                            </div>
                            {this.showAuthor()}
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <span className="final-price">Giá Khuyến Mại:<NumberFormat value={price*0.75} displayType={'text'} thousandSeparator={true} suffix={' đ'} /></span>
                                <br/>
                                <span className="price-regular">Giá Bìa:
                                <NumberFormat value={price} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
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
                                
                                <button type="button" className="btn btn-danger">Mua Hàng</button>
                                
                            </div>
                            </div>
						</div>
                    <div className="menu-group" style={{width:'100%', height : '400px',display:'-webkit-box'}}>
                            <form className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'90%'}}> 
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <label htmlFor="name"><h2>Giới thiệu Sách</h2></label>
                            </div>
                            <div className="form-group" style={{height:'50px'}}  >
                                <label htmlFor="name"><h4>{name}</h4></label>
                            </div>
                            <div className="form-group" style={{height:'240px'}}  >
                                <label htmlFor="name"><h4>Giới Thiệu</h4></label>
                                <br/>
                                <a>{description}</a>
                            </div>
                            </form>
						</div>
                    <div className="menu-group" style={{width:'100%',border:'solid', height : '200px',display:'-webkit-box'}}>
                            <form className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'90%'}}> 
                                <h3>Sách Cùng Tác Giả</h3>
                                <ProductList/>
                            </form>
						</div>
	    	</div>
        );
    }
}
export default ProductDetail;