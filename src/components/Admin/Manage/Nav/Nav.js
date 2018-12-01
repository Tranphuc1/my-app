import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
                <div className="collapse navbar-collapse" id="containerNavbar">
                    <div>
                        <ul className="nav nav-tabs|pills" id="navId">
                            <li className="nav-item">
                            <a href="#tab1Id" className="nav-link active">Trang Chủ</a>
                            </li>
                            <li className="nav-item">
                            <li>
                                <Link to="/Component">Sách Mới</Link>
                            </li>
                            </li>
                            <li className="nav-item">
                            <a href="#tab5Id" className="nav-link">Hóa Đơn</a>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab1Id" role="tabpanel" />
                            <div className="tab-pane fade" id="tab2Id" role="tabpanel" />
                            <div className="tab-pane fade" id="tab3Id" role="tabpanel" />
                            <div className="tab-pane fade" id="tab4Id" role="tabpanel" />
                            <div className="tab-pane fade" id="tab5Id" role="tabpanel" />
                        </div>
                        </div>

                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Nhập từ khóa" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                    </form>
                </div>
            </nav>
        </div>
        );
    }
}

export default Nav;