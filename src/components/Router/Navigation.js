import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signup from '../Admin/Login/Signup';
import App1 from '../Admin/Manage/App/App1';
import Nav from '../Admin/Manage/Nav/Nav';
import componentName from '../Admin/Manage/ProductsForm/PushProduct';

//components
//

class navaigation extends Component {
  render() {
    return (
			<div>
    	<Router>	
										<Route exact path="/Nav" component={Nav} />
                    <Route path="/Signup" exact component={Signup} />
										<Route path ="/App1" exact component={App1}/>	
										<Route path ="/Component" component={componentName}/>					
	 	</Router>
		 </div>
     );
  }
}

export default navaigation;
