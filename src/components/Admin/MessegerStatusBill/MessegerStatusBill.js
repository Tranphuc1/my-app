import React, { Component } from 'react';
import avatar from './avatar.png';
import tiki from './tiki.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
class MessegerStatusBill extends Component {
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }
    userform=()=>{
            var {authUser} = this.props;
            var uid =_.get(authUser,['email']);
        return uid;
    }
    render() {
        return (
            <div className="Container" style={{display:'flex',height:'100%'}}>
                <div className="UserInfo" style={{width:'20%',fontSize:15,background:'#ccc',display:'flex'}}>
                    <div className="imgAvatar"> <img src={avatar}/></div>
                    <div className="username">Tài Khoản của {this.userform()}</div>
                </div>
                
                <div className="notificationuser" style={{width:'75%'}}>
                        <div style={{background:'#ccc',fontSize:18}}>Thông báo của tôi</div>

                        <div className="infonull" style={{marginLeft:'30%'}}>
                            <img src={tiki}/>
                        <h4>Bạn chưa có thông báo</h4>
                        <Link to="/">Tiếp tục mua sắm nào</Link>
                        </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(MessegerStatusBill);
