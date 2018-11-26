import React, { Component } from 'react';
class Item extends Component {
    showhot = (showhot) => {
        if(showhot === true){
            return <span className="tag2HOT">HOT</span>
        }
    } 
    render() {
        return (
                <div className="col-sm-6 col-md-3"> 
                    <div className="product"> 
                        <p style={{textAlign: 'center', marginTop: 20,}}> 
                        {this.showhot(this.props.hot)}
                        <img style={{width: '40%'}} src={this.props.img} className="img-responsive" alt="Sản phẩm 2" /></p> 
                        <div className="caption"> 
                        <div className="blur" /> 
                        <div className="caption-text"> 
                            <h3 className="Names" style={{ borderBottom: '2px solid white'}}>{this.props.children}</h3> 
                            <div className="author">tran phúc</div>
                            <div className="prices"> {this.props.price}</div> 
                            <a><span className="glyphicon glyphicon-shopping-cart" style={{fontSize: 15}}> Mua </span></a> 
                        </div> 
                        </div> 
                    </div> 
                    <div id="main" style={{margin: 20}}>

                        <div className="container thumbnail content">
                            <div className="row">
                            <h2><span className="label " style={{color: '#1ea815'}}>SÁCH LIÊN QUAN </span></h2>
                            </div>
                            <div className="row margin1 text-center">   
                            <div className="row margin1 text-center">

                                <div className="col-md-3 col-sm-12 col-xs-12 thumbnail">
                                <a  className="preview">
                                    <img src="img/<?php echo $item['anh_sp'];?>" className="img-thumbnail text-center" alt="Book" style={{maxHeight: 270, maxWidth: 220}} />
                                </a>
                                <h4 className="text-center"><a ></a></h4>
                                <p>Tình trạng: </p>
                                <p> Khuyến Mãi:</p>
                                <p className="text-center price"><span> VNĐ</span></p>
                                <p className="add-cart">
                                    <a >
                                    <span className="glyphicon glyphicon-shopping-cart" style={{fontSize: 15}}> Mua </span></a>
                                </p>
                                </div>	
                            </div>	
                            </div>
                        </div>
                        </div>
 
                </div> 
        );
    }
}

export default Item;