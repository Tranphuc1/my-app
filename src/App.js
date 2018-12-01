import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import {firebaseConnect} from "./firebaseConnect";
//components
import DieuHuong from './components/Router/DieuHuong';
import Navigation from './components/Router/Navigation';
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
					<Navigation/>
		    	</div>
	 		</div>
	 	</Router>
		</div>
     );
  }
}

export default App;
