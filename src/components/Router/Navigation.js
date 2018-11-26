import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signup from '../Admin/Login/Signup';

//components
//

class DieuHuong extends Component {
  render() {
    return (
    	<Router>
    	<div>
				<Switch>
                    {/* <Route path="/Signup" exact component={Signup} />														 */}
				</Switch>
		</div>
	 	</Router>
     );
  }
}

export default DieuHuong;
