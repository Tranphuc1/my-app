import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as routes from './../../Products/constants/Login';
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
			 		<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			            Xin chào {authUser2}
			 		</a>
			 		<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
						<Link to={routes.ACCOUNT} className="dropdown-item">Đổi mật khẩu</Link>
			 			<a className="dropdown-item" onClick={auth1.doSignOut}>Đăng xuất</a>
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
