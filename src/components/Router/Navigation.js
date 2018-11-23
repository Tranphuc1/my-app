import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Singup from '../pages/Signup';

//components
//

class DieuHuong extends Component {
  render() {
    return (
    	<Router>
    	<div>
				<Switch>
                    <Route path="/Signup" exact component={Singup} />														
				</Switch>
		</div>
	 	</Router>
     );
  }
}

export default DieuHuong;
