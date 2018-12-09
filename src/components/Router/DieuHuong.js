import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

//components
// import Product from './../Product/Product';
import homePage from './../pages/homePage';
import Header from '../headerComponents/header';
import Footer from '../footerComponents/footer';
import AllFile from '../Products/Components/AllFile';
import Signup from '../Admin/Login/Signup';
import App1 from '../Admin/Manage/App/App1';
import PushProduct from '../Admin/Manage/ProductsForm/AdminProductContainer';
import PushBill from '../Admin/Manage/Bill/PushBill';
import UserResult from '../Admin/Manage/Form/UserResult';
import PushForm from '../Admin/Manage/ProductsForm/PushForm';
import Listen from '../Admin/Manage/ProductsForm/Listen';


//

class DieuHuong extends Component {
  render() {
    return (
    	<div>	
							<Route path="/"  component={Header} />
							<Route path="/Signup" component={Signup} />
							<Route path="/" exact component={homePage} />
							<Route path="/product" component={AllFile} />
							<Route path="/App1" component={App1} />
							<Switch>
								<Route path="/App1/User" component={UserResult} />
								<Route path="/App1/PushBill" exact  component={PushBill} />
								<Route path="/App1/PushProduct" exact component={PushProduct} />
								<Route path="/App1/PushProduct/PushForm" exact component={PushForm} />
								<Route path="/App1/PushProduct/Listen" exact component={Listen} />
							</Switch>
							<Route path="/"  component={Footer} />
		</div>
     );
  }
}

export default DieuHuong;
