import React from 'react';
import Search from './ComponentshomePage/search';
import Menu from './ComponentshomePage/Menu';
import SimpleSlider from './ComponentshomePage/slideContener';
import SignOutButton from '../Admin/SignOut';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as routes from '../Products/constants/Login';
import ProductsContainer from '../Products/Containers/ProductsContainer';
import CartButton from '../headerComponents/CartButton';
	const Homepage = ({authUser}) =>
	    	<div className="Container-center" >
				{/* <button type="button" className="btn btn-default" style={{position: 'absolute', top: 0,right:250}} ><a href ="/app1/PushProduct" >Trang Admin</a></button> */}
	    		<a className="glyphicon glyphicon-th-list" style={{left: '40px'}}> Danh Mục Sản Phẩm</a>
					<div>
						<Search/>
						<div className="collapse navbar-collapse" id="navbarResponsive" style={{position: 'absolute', top: 0,right:10}}>
							{authUser ? <NavigationAuth/> : <NavigationNonAuth/>}
						</div>
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
		<li className="nav-item dropdown"  style={{position: 'absolute',right:250}}>
			<CartButton/>
		</li>
		
	</ul>
const NavigationNonAuth = () =>
	<ul className="navbar-nav ml-auto">
		<li className="nav-item dropdown" style={{position: 'absolute', top: 0,right:250}}>
			<CartButton/>
		</li>
		<li className="nav-item">
			<Link className="nav-link" to={routes.SIGN_IN}>
				<button type="button" className="btn btn-warning" >Đăng Nhập</button>
			</Link>
		</li>
	</ul>


const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Homepage);

