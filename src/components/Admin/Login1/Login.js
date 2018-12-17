import React, { Component } from 'react';
import Signup from './Signup';
import App1 from '../Manage/App/App1';
import { firebaseConnect } from '../../../FirebaseConnect';
class Login extends Component {
	constructor() {
		super();
		this.state = ({
		  user: null,
		});
		this.authListener = this.authListener.bind(this);
	  }
componentDidMount() {
		this.authListener();
	  }
authListener() {
    firebaseConnect.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
    	<div className="LoginForm">
    	{this.state.user ? ( <App1 />) : (<Signup />)}
    	</div>
     );
  }
}
export default Login;
