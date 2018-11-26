import React, { Component } from 'react';

class DetailItems extends Component {
    render() {
        return (
            <div className="container thumbnail content">
                            <div className="row ">
                            <div className="col-md-4 col-xs-12 img-responsive " alt="boook" width={304} height={236}>
                                <div className="text-center"><img src="img/<?php echo $item['anh_sp'];?>" className="img-thumbnail" alt="Book" width="200px" height="170px" /></div>
                                <div className="clearfix" />
                                <div className="panel panel-info col-md-12">
                                <div className="panel-heading text-center" style={{fontWeight: 'bold'}}>TIN TỨC LIÊN QUAN</div>
                                <div className="panel-body">
                                    <div className="row">
                                    <ul>
                                        <div className="order_post_item ">
                                        <p className="title_feature_order"><a href="#">Lợi ích của đọc sách</a></p>
                                        </div>
                                        <div className="order_post_item ">
                                        <p className="title_feature_order"><a href="#">Sách giúp bạn mở rộng kiến thức</a></p>
                                        </div>
                                        <div className="order_post_item ">
                                        <p className="title_feature_order"><a href="#">Cách chọn một bộ sách hay</a></p>
                                        </div>
                                        <div className="order_post_item ">
                                        <p className="title_feature_order"><a href="#">Thiếu nhi đọc sách nào phù hợp?</a></p>
                                        </div>
                                        <div className="order_post_item ">
                                        <p className="title_feature_order"><a href="#">Tại sao đọc sách làm tăng trí thông minh</a></p>
                                        </div>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>  
                            <div className="col-md-8 col-xs-12">
                                <h3 style={{color: '#1ea815'}}></h3>
                                <h4>Giá sản phẩm: <span style={{color: '#C9302C'}}> VNĐ</span></h4>
                                <table className="table table-bordered">
                                <tbody><tr>
                                    <td><span>Khuyến mại:</span></td>
                                    <td> </td>
                                    </tr>
                                    <tr>
                                    <td><span>Tình trạng:</span></td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td><span>Còn hàng:</span></td>
                                    <td>•</td>
                                    </tr>
                                </tbody></table>
                                <p className="add-cart"><a href="">
                                    <span className="btn btn-danger" style={{fontSize: 15}}>Đặt mua</span></a></p>
                                <div className="prd-details">
                                <p>Chi tiết sản phẩm</p>
                                </div>  
                                	
                            </div>	
                            </div>
                        </div>
        );
    }
}

export default DetailItems;