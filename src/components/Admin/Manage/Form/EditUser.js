import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
                <div className="card text-center">
                    <div className="card text-center">
                        <div className="card-header">
                                Sửa thông tin người dùng
                        </div>
                        <div className="card-body">
                            <form method="POST" >
                                <div className="form-group">
                                    <label htmlFor="txtUser">Tài Khoản</label>
                                    <input type="email" name="txtUser" className="form-control" placeholder="Nhập Thành Viên"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtPass">Quyền</label>
                                    <input type="password" name="txtPass" className="form-control" placeholder="Nhập Mật Khẩu" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card text-center">
                            <button type="submit" className="btn btn-success">Lưu</button>
                    </div>
                </div>
        );
    }
}

export default EditUser;