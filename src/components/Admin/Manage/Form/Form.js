import React, { Component } from 'react';
// const uuidv4 = require('uuid/v4');

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            txtUser : '',
            txtPass : ''
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
    // changeInput = (event) => {
    //     const target = event.target;
    //     const name = target.name;
    //     const value = target.value;

    //     this.setState({
    //         [name] : value
    //     });
    // }
    // }
    submitForm =(event) =>{
        event.preventDefault();
        event.target.reset();
        const {txtUser,txtPass} = this.state;
        let content = '';
        content += 'User :' + txtUser;
        content += 'Pass :' + txtPass;
        console.log(content);

        const item ={};
        item.id = "11";
        item.username = txtUser;
        item.password = txtPass;
        console.log(item);
        this.props.add(item);
    }


    render() {
        // noteData.once('value').then(function(snapshot){
        //     console.log(snapshot.val());
        //   })
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="alert alert-danger" role="alert">
                    <strong>Lỗi </strong> Vui lòng nhập
                </div>
                <div className="alert alert-success" role="alert">
                    <strong>Thông báo </strong> Thành công
                </div>
                <div className="card">
                    <div className="card-header">
                        Thêm
                        <button type="button" className="close" aria-label="Close" onClick={ (e) => this.props.FromToogle(e) }>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="card-block">
                        <form method="POST" onSubmit={ (e) => this.submitForm(e) }>
                            <div className="form-group">
                                <label htmlFor="txtUser">Thành Viên</label>
                                <input type="text" name="txtUser" className="form-control" placeholder="Nhập Thành Viên" onChange={ (e) => this.changeInput(e) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPass">Mật Khẩu</label>
                                <input type="password" name="txtPass" className="form-control" placeholder="Nhập Mật Khẩu" onChange={ (e) => this.changeInput(e) } />
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