import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="Container-center">
                    <div className="menu-group" style={{width:'100%', height : '400px'}}>
                            <div className="banner" style={{ width:'100%',height:'40px',display:'-webkit-box',marginTop:'10px',background:'#e4e4e4'}}> 
                                <div className="MenuBaner" style={{width:'100px'}}>
                                    <h4><a className="title" style={{color:'#00cc66'}}>Sách Mới</a></h4>
                                </div>
                                <div className="MenuBaner" style={{width:'100px',marginLeft:'900px'}}>
                                    <h4><a className="title" >Xem Tất Cả</a></h4>
                                </div>
                            </div>
                                <div className="row" style={{display:'contents'}}>
                                    
                                </div>
					</div>
            </div>
        );
    }
}
export default ProductList;