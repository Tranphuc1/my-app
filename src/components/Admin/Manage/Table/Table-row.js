import React, { Component } from 'react';
import { firebaseConnect } from '../../../../FirebaseConnect';

class TableRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            role:'',
            activeButton:false
        }
        
    }
    changeInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value,
            activeButton:true
        });
    }
    onChange=()=>{
        var {uid,children,diachi,sodienthoai} = this.props;
        var {role} = this.state;
        firebaseConnect.database().ref(`users/${uid}`).set({
            role:role,
            email:children,
            diachi:diachi,
            sodienthoai:sodienthoai
        }).then(
            alert('Thành Công')
        )
        .then(
            this.setState({
                activeButton:false
            })
        )
    }
    showButton=()=>{
        var {activeButton,role}= this.state;
        if(activeButton){
            if(role==''){
                return 
            }else{
                return (<a className="btn btn-warning btn-sm" role="button" onClick={()=>{this.onChange()}}><i className="fa fa-pencil-square-o" aria-hidden="true" />Chọn</a>)
            }
        }
    }
    showOption = ()=>{
        var {role} = this.props;
        if(role == '1'){
        return 'Admin'
        } if (role =='2'){
        return 'Thành Viên'  
        }
        if(role=='3'){
            return 'Disconnected'
        }
    }
    XoaUser=()=>{
        var {uid,children,diachi,sodienthoai} = this.props;
        firebaseConnect.database().ref(`users/${uid}`).set({
            role:'3',
            email:children,
            diachi:diachi,
            sodienthoai:sodienthoai
        }).then(
            alert('Disconnected')
        )
    }
    render() {
        // {this.onChange()}
        return (
            <tr>
                <td>{this.props.index +1}</td>
                <td>
                    <select onChange={(event)=>{this.changeInput(event)}} name="role" style={{width:'90px',height:"35px"}}>
                        <option >---Chọn---</option>
                        <option value="1" >Admin</option>
                        <option value="2" >Thành Viên</option>
                    </select>
                    &nbsp;{this.showButton()}
                </td>
                <td>{this.props.uid}</td>
                <td>{this.props.children}</td>
                <td>{this.props.diachi}</td>
                <td>{this.props.sodienthoai}</td>
                <td>{this.showOption()}</td>
                <td className="text-center" width="50px">
                    <a className="btn btn-danger btn-sm" role="button">
                    <i className="fa fa-trash-o" aria-hidden="true" onClick={()=>{this.XoaUser()}}/> Xóa</a>
                </td>
            </tr>
        );
    }
}

export default TableRow;