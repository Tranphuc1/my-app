import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
class Singup extends Component {
  render() {
    return (
    	<Router>
	    		<div>
							<button type="button" className="btn btn-default" style={{position: 'absolute', top: 0,
    right: 150}}><a href="/Signup">Singup</a></button>	 
	    		</div>
	    </Router>
     );
  }
}

export default Singup;
