import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import withAuthentication from './components/Admin/Session/withAuthentication';
import DieuHuong from './components/Router/DieuHuong';
//
import './assets/css/style.min.css';

class App extends Component {
	
  render() {
    return (
		<div className="Container">
    	<Router>
	    	<div className="App">
		    	<div className="container-fluid">
			 		<DieuHuong />
		    	</div>
	 		</div>
	 	</Router>
		</div>
     );
  }
}

export default withAuthentication(App);
