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
                            <a className=" btn btn-danger" href=""><span className="glyphicon glyphicon-shopping-cart"> Mua </span></a> 
                        </div> 
                        </div> 
                    </div>  
                </div> 
        );
    }
}

export default Item;