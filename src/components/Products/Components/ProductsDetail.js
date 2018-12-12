import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetail extends Component {
    
    render() {
        var {products} =this.props;
        console.log(products);
        return (
            <div className="Container-center" >
	    		<a className="glyphicon glyphicon-th-list" style={{left:'40px'}}>&nbsp;Danh Mục Sản Phẩm</a>
	    		<a className="glyphicon glyphicon-earphone" style={{left: '70%'}}> HotLine:0988888888</a>
					<form>
						<div className="menu-group" style={{width:'100%', height : '400px',display:'-webkit-box'}}>
                            <div className="imageinfo-group" style ={{ width:'25%', height:'300px',marginLeft:'70px',marginTop:'20px'}}>
                                    <img alt="ImageProduct" src="https://vtv1.mediacdn.vn/thumb_w/650/2018/8/28/anh7-15354261060502104868400.jpg" style={{width:'250px',height:'300px'}}/>
                            </div>
                            <form className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'70%'}}> 
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <label htmlFor="name"><h2>{products.name}</h2></label>
                            </div>
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <label htmlFor="name"><h5>Tác Giả:</h5></label>
                            </div>
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <a>Giá value</a>
                                <label htmlFor="name"><h5>Giá Bìa:</h5></label>
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
                            </form>
						</div>
					</form>
                    <form>
                    <div className="menu-group" style={{width:'100%', height : '400px',display:'-webkit-box'}}>
                            <form className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'90%'}}> 
                            <div className="form-group" style={{borderBottom:'#e4e4e4 solid 1px',height:'50px'}}  >
                                <label htmlFor="name"><h2>Giới thiệu Sách</h2></label>
                            </div>
                            <div className="form-group" style={{height:'50px'}}  >
                                <label htmlFor="name"><h4>Tên Sản Phẩm</h4></label>
                            </div>
                            <div className="form-group" style={{height:'240px'}}  >
                                <label htmlFor="name"><h4>Giới Thiệu</h4></label>
                            </div>
                            </form>
						</div>
                    </form>
                    <form>
                    <div className="menu-group" style={{width:'100%',border:'solid', height : '200px',display:'-webkit-box'}}>
                            <form className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'90%'}}> 
                                <h1>Comment</h1>
                            </form>
						</div>
                    </form>
	    	</div>
        );
    }
}
const mapStateToProps = state => {
    return {
        products : state.products
    }
}
export default connect(mapStateToProps, null)(ProductDetail);