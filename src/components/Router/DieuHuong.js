import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

//components
// import Product from './../Product/Product';
import homePage from './../pages/homePage';
import Header from '../headerComponents/header';
import Footer from '../footerComponents/footer';
import AllFile from '../Products/Components/AllFile';
import App1 from '../Admin/Manage/App/App1';
import Routers from './Routers';
import PushForm from '../Admin/Manage/ProductsForm/PushForm';
import { SignUpForm } from '../Admin/Signup/Signup';
import { SignInForm } from '../Admin/Login/Login';
import { PasswordForgetForm } from '../Admin/PasswordForget';
//

class DieuHuong extends Component {
  render() {
    return (
    	<div>	
			<Route path="/" component={Header} />
			<Route path="/password-forget" component={PasswordForgetForm} />
			<Route path="/SignIn" component={SignInForm} />
			<Route path="/Signup" component={SignUpForm} />
			<Route path="/" exact component={homePage} />
			<Route path="/product" component={AllFile} />
			<Route path="/App1" component={App1} />
			<Switch>
				{this.showMenus(Routers)}
				<Route path="/App1/PushProduct/PushForm" exact component={PushForm} />
			</Switch>
			<Route path="/"  component={Footer} />
		</div>
     );
  }
  showMenus = (Routers) =>{
	  var result =null;
		if(Routers.length > 0){
			result = Routers.map((router,index)=>{
				return (
					<Route key ={index} path={router.path} exact={router.exact} component={router.main} />
				);
			});
		}
	  return result;
  }
}

export default DieuHuong;
