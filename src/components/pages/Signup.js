import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
class Singup extends Component {
  render() {
    return (
    	<Router>
	    		<div className="row">
	    			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
	    				<button type="button" className="btn btn-large btn-block btn-danger" 
	    				>Singup
	    				</button>  			
				         </div>
	    		</div>
	    </Router>
     );
  }
}

export default Singup;
