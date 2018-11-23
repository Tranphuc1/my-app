import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import {firebaseConnect} from "./firebaseConnect";
//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import DieuHuong from './components/Router/DieuHuong';
//
import './assets/css/style.min.css';
import {firebaseConnect}  from './FirebaseConnect';

class App extends Component {
  render() {
	  console.log(firebaseConnect);
    return (
    	<Router>
	    	<div className="App">
		    	<div className="container-fluid">
					<Header/>
			 		<DieuHuong />
					 <Footer/>
		    	</div>
	 		</div>
	 	</Router>
     );
  }
}

export default App;
