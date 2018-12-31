import React,{Component} from 'react';
import Search from './ComponentshomePage/search';
import Menu from './ComponentshomePage/Menu';
import SimpleSlider from './ComponentshomePage/slideContener';
import SignOutButton from '../Admin/SignOut';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as routes from '../Products/constants/Login';
import ProductsContainer from '../Products/Containers/ProductsContainer';
import CartButton from '../headerComponents/CartButton';
import callApi from '../../ApiCaller/Api';
import _ from 'lodash';
	class Homepage extends Component {
		constructor(props){
			super(props);
			this.state=({
			  role:''
			})
		  }
	showKey=()=>{
		var {authUser} = this.props;
		var key =_.get(authUser, ['uid']);
		callApi(`users/${key}`,'GET',null).then(res=>{
			var data1 = res.data;
			this.setState({
				role:_.get(data1,['role'])
			})
		})
		}
		renderAdmin=()=>{
			var {role} = this.state;
			if(role == '1'){
				return <NavigationAuthAdmin/>
			}if (role == '2'){
				return <NavigationAuth/>
			}
			if(role =='3'){
				return <DisConnect/>
			}
			return <NavigationNonAuth/>
		}
	render() {  
		return (
	    	<div className="Container-center" >
				{/* <button type="button" className="btn btn-default" style={{position: 'absolute', top: 0,right:250}} ><a href ="/app1/PushProduct" >Trang Admin</a></button> */}
	    		<a className="glyphicon glyphicon-th-list" style={{left: '40px'}}> Danh Mục Sản Phẩm</a>
					<div>
						<Search/>
						<div className="collapse navbar-collapse" id="navbarResponsive" style={{position: 'absolute', top: 0,right:10}}>
							{this.showKey()}
							{this.renderAdmin()}
						</div>
						<div className="menu-group" style={{width:'100%',height : '400px',display:'-webkit-box'}}>
						<Menu />
						<SimpleSlider />
						</div>
						<br/>
						<ProductsContainer/>
					</div>
			</div>
		);
	}
}
const NavigationAuthAdmin =() =>
	<ul className="navbar-nav ml-auto" >
				
				<SignOutButton />
			<li className="nav-item"  style={{position: 'absolute',right:300}}>
				<Link to="/App1" className="nav-link" style={{position: 'absolute'}}>
					<button type="button" className="btn btn-danger">Admin</button>
				</Link>
			</li>
		</ul>
const NavigationAuth = () =>
	<ul className="navbar-nav ml-auto" >
			<SignOutButton />
		<li className="nav-item dropdown"  style={{position: 'absolute',right:250}}>
			<CartButton/>
		</li>
	</ul>
const DisConnect =() =>
	<div className="dis" style={{display:'flex'}}>
		<h4>Tài khoản của bạn bị khóa !!</h4>
		<SignOutButton />
	</div>
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

