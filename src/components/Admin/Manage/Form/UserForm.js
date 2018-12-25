import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';
import {auth} from '../../../../FirebaseConnect';
// const uuidv4 = require('uuid/v4');
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            txtPassword : '',
            diachi :''
        };
    }
    changeInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }
    submitForm =(event) =>{
        event.preventDefault();
        event.target.reset();
        const {email,txtPassword,diachi} = this.state;
        const item ={};
        item.email = email;
        item.txtPassword = txtPassword;
        item.diachi = diachi;
        callApi('Database/User','POST',item).then(res =>{
            alert('Thêm người dùng thành công')
        });
        auth.createUserWithEmailAndPassword(email, txtPassword)
            .then((u)=>{
            })
			.catch(error => {
                console.log(error);
			});
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        Thêm
                        <button type="button" className="close" aria-label="Close" onClick={ (e) => this.props.FromToogle(e) }>
                        </button>
                    </div>
                    <div className="card-block">
                        <form method="POST" onSubmit={ (e) => this.submitForm(e) }>
                            <div className="form-group">
                                <label htmlFor="email">Thành Viên</label>
                                <input type="email" name="email" className="form-control" placeholder="Nhập Thành Viên" onChange={ (e) => this.changeInput(e) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDiachi">Địa Chỉ</label>
                                <input type="txt" name="diachi" className="form-control" placeholder="Nhập Địa Chỉ" onChange={ (e) => this.changeInput(e) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPassword">Mật Khẩu</label>
                                <input type="password" name="txtPassword" className="form-control" placeholder="Nhập Mật Khẩu" onChange={ (e) => this.changeInput(e) } />
                            </div>
                            <button type="submit" className="btn btn-primary">Thêm</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form;