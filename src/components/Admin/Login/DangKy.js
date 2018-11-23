import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//components


class DangKy extends Component {
  render() {
    return (
      <form action="register.php" method="post">
  <table>
    <tbody><tr>
        <td colSpan={2}>Form đăng ký</td>
      </tr> 
      <tr>
        <td>Username :</td>
        <td><input type="text" id="username" name="username" /></td>
      </tr>
      <tr>
        <td>Password :</td>
        <td><input type="password" id="pass" name="pass" /></td>
      </tr>
      <tr>
        <td>Full Name :</td>
        <td><input type="text" id="name" name="fullname" /></td>
      </tr>
      <tr>
        <td>
          Giới tính :
        </td>
        <td>
          <select name="gioitinh">
            <option value />
            <option value="Nam">Nam</option>
            <option value="Nu">Nữ</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colSpan={2} align="center"><input type="submit" name="btn_submit" defaultValue="Dang ky" /></td>
      </tr>
    </tbody></table>
</form>

     );
  }
}

export default DangKy;
