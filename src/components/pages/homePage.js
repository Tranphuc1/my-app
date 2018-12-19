import React from 'react';
import Search from './ComponentshomePage/search';
import Menu from './ComponentshomePage/Menu';
import SimpleSlider from './ComponentshomePage/slideContener';
import SignOutButton from '../Admin/SignOut';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as routes from '../Products/constants/Login';
import ProductsContainer from '../Products/Containers/ProductsContainer';
	const Homepage = ({authUser}) =>
	    	<div className="Container-center" >
			<div className="Account" style={{position: 'absolute', top: 0,right: 50}}>
				{authUser
					? <NavigationAuth/>
					: <NavigationNonAuth/>
				}
			</div>
				<button type="button" className="btn btn-default" style={{position: 'absolute', top: 0,right:250}} ><a href ="/SignIn" >Trang Admin</a></button>
	    		<a className="glyphicon glyphicon-th-list" style={{left: '40px'}}> Danh Mục Sản Phẩm</a>
	    		<a className="glyphicon glyphicon-earphone" style={{left: '70%'}}> HotLine:0988888888</a>
					<div>
						<Search/>
						<div className="menu-group" style={{width:'100%',height : '400px',display:'-webkit-box'}}>
						<Menu />
						<SimpleSlider />
						</div>
						<ProductsContainer/>
					</div>

	    	</div>
const NavigationAuth = () =>
<ul className="navbar-nav ml-auto" >
	<SignOutButton />
</ul>
const NavigationNonAuth = () =>
	<ul className="navbar-nav ml-auto">
		<li className="nav-item">
			<Link className="nav-link" to={routes.SIGN_IN}>Đăng nhập</Link>
		</li>
	</ul>


const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Homepage);

