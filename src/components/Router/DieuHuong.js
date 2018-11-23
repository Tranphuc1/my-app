import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//components
import Product from './../Product/Product';
import homePage from './../pages/homePage';
import Navigation from './Navigation';
import Singup from '../pages/Signup';
//

class DieuHuong extends Component {
  render() {
    return (
    	<Router>
    	<div>
				<Navigation/>
				<Switch>
							<Route path="/product" exact component={Product} />						
							<Route path="/" exact component={homePage} />						
							<Route exact component={Product} />
				</Switch>
				<Switch>
					<Route path="/Signup" exact component={Singup}/>
				</Switch>
	    	
		</div>
	 	</Router>
     );
  }
}

export default DieuHuong;
