import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

//components
import homePage from './../pages/homePage';
import Header from '../headerComponents/header';
import Footer from '../footerComponents/footer';
import AllFile from '../Products/Components/AllFile';
import App1 from '../Admin/Manage/App/App1';
import {Routers,Routers2} from './Routers';
import PushForm from '../Admin/Manage/ProductsForm/PushForm';
import { SignInForm } from '../Admin/Login/Login';
import AccountPage from '../Admin/Account';
import { SignUpForm } from '../Admin/Signup/Signup';

class DieuHuong extends Component {
  render() {
    return (
    	<div>	
			<Route path="/" component={Header} />
			<Switch>
				{this.showLoginForm(Routers2)}
				<Route path="/Signup" exact component={SignUpForm} />
				<Route path="/Signin" exact component={SignInForm} />
				<Route path ="/Account" exact component={AccountPage}/>
			</Switch>
			
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
  showLoginForm =(Routers2)=>{
	  var result = null;
	  	if(Routers.length>0){
			  result= Routers2.map((router,index) =>{
				return ( 
						<Route key ={index} path={router.path} exact={router.exact} component={router.main} />
					);
				});
		  }
	  return result;
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
