import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import {firebaseConnect} from "./firebaseConnect";
//components
import Navigation from './components/Router/Navigation';
import DieuHuong from './components/Router/DieuHuong';
//
import './assets/css/style.min.css';
import {firebaseConnect}  from './FirebaseConnect';

class App extends Component {
  render() {
	  console.log(firebaseConnect);
    return (
		<div className="Container">
    	<Router>
	    	<div className="App">
		    	<div className="container-fluid">
			 		<DieuHuong />
					<Navigation/>
		    	</div>
	 		</div>
	 	</Router>
		</div>
     );
  }
}

export default App;
