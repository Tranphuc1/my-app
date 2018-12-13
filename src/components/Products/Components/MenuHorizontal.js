import React, { Component } from 'react';

class MenuHorizontal extends Component {
    render() {
        const {products} = this.props;
        console.log(products);
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
                            <div>
                                {/* <div className="menu-group" style={{width:'100%', height : '400px',display:'-webkit-box'}}>
                                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ width:'90%'}}> 
                                            <div className="imageinfo-group" style ={{ width:'25%', height:'300px',marginLeft:'70px',marginTop:'20px'}}>
                                                    <img alt="ImageProduct" src="https://vtv1.mediacdn.vn/thumb_w/650/2018/8/28/anh7-15354261060502104868400.jpg" style={{width:'150px',height:'200px'}}/>
                                                    <ul>
                                                        <li>tên</li>
                                                        <li>Giá</li>
                                                        <li>Tên Tác Giả</li>
                                                    </ul>
                                            </div>
                                        </div>
                                </div> */}
                                <div className="row">
                                    {this.props.children}
                                </div>
                            </div>
					</div>
            </div>
        );
    }
}
export default MenuHorizontal;