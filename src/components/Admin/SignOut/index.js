import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth1 } from '../../../FirebaseConnect2';

class SignOutButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			authUser2:''
		}
	}
	componentDidMount(){
		var {authUser} = this.props;
		if(authUser == null){
			console.log('ok')
		}else{
			this.setState({authUser2:authUser.email})
		}
	}
	render() {
		var {authUser2} = this.state;
		return (
			<div>
				<li className="nav-item dropdown">
			 		<a className="nav-link dropdown-toggle" id="navbarDropdown" style={{background:'#00cc66',height:'55px'}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					 <br/>
					 <i className="fas fa-user-alt">&nbsp;&nbsp;&nbsp;{authUser2}</i>
			 		</a>
			 		<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
					 	<Link to="/MessegerStatusBill" className="dropdown-item"><i className="fas fa-comments">&nbsp;Bạn có ({'1'}) Tin Nhắn</i></Link>
						<Link to="/password-changed" className="dropdown-item"><i className="fas fa-exchange-alt">&nbsp;Đổi mật khẩu</i></Link>
			 			<a className="dropdown-item" onClick={auth1.doSignOut}><i className="fas fa-sign-in-alt">&nbsp;Đăng xuất</i></a>
			 		</div>
				</li>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});
export default connect(mapStateToProps)(SignOutButton);
