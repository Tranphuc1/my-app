import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import {firebaseConnect} from "./../firebaseConnect";
//components
import App from './../App';
//


class App extends Component {
	contructor(props){
	super(props);
	this.state ={
		user:{},
	}
}
componentsDidMount(){
	this.authListener();
}
authListener(){
    		fire.auth().onAuthSateChanged((user) => {
    			if(user){
    				this.setState({user});

    			}else{
    				this.setState({user:null});
    			}
    		});
    	}
  render() {
    return (
    	<div className="LoginForm">
    	{this.state.user ? (<App />) : (<LoginForm/>) }
    	</div>
     );
  }
}

export default App;
