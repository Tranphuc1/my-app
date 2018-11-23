import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//components
import Product from './../Product/Product';
import homePage from './../pages/homePage';
import Header from '../headerComponents/header';
import Footer from '../footerComponents/footer';

//

class DieuHuong extends Component {
  render() {
    return (
    	<Router>
    	<div>
		<Route path="/" exact component={Header} />
				<Switch>	
							
							<Route path="/" exact component={homePage} />
							<Route path="/product" exact component={Product} />	
							
				</Switch>
				<Route path="/" exact component={Footer} />
	    	
		</div>
	 	</Router>
     );
  }
}

export default DieuHuong;
