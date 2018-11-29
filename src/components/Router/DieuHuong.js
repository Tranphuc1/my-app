import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//components
// import Product from './../Product/Product';
import homePage from './../pages/homePage';
import Header from '../headerComponents/header';
import Footer from '../footerComponents/footer';
import Signup from '../Admin/Login/Signup';
import Home from '../Admin/Manage/Home';
import App1 from '../Admin/Manage/App/App1';
import AllFile from '../Products/AllFile';


//

class DieuHuong extends Component {
  render() {
    return (
    	<Router>
    	<div>
				<Route path="/" exact component={Header} />
				<Switch>		
							<Route path="/App1" exact component={App1}/>
							<Route path="/Home" exact component={Home} />
							<Route path="/Signup" exact component={Signup}/>
							<Route path="/" exact component={homePage} />
							<Route path="/product" exact component={AllFile} />	
							
				</Switch>	
				<Route path="/" exact component={Footer} />
	    	
		</div>
	 	</Router>
     );
  }
}

export default DieuHuong;
