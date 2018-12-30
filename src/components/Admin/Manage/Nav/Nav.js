import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Nav extends Component { 
    render() {
        return ( 
            <div>
            <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
                <div className="collapse navbar-collapse" id="containerNavbar">
                    <div>
                        <ul className="nav nav-pills" id="navId">
                            <li className="nav-item">
                                <button type="button" className="btn btn-defalt" >
                                <Link to ="/App1/User">Thành viên</Link></button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-defalt" >
                                <Link to ="/App1/PushProduct">Sản Phẩm</Link></button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-defalt">
                                <Link to ="/App1/PushBill">Hóa đơn</Link></button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-defalt">
                                <Link to ="/App1/FormCheck">Đánh Giá Và Bình Chọn</Link></button>
                            </li>
                        </ul>
                        </div>

                    {/* <form className="form-inline my-2 my-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Nhập từ khóa" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                    </form> */}
                </div>
            </nav>
        </div>
        );
    }
}
export default Nav;