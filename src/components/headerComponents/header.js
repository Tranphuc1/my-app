import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.png';
class Header extends Component {
  render() {
    return (
 		<header>
 			<Router>
				  <div id="header">
					    <div className="top_header">       
					        <div className="mainlogo">
					          <div className="block banner " id="banner_mainlogo">
					          <div className="blockcontent">
					          <a title="Logo chính" target="_self" href="/">
					          <img src={logo} border={0} title="Logo chính" width={220} height={44} /></a></div></div>
					        </div>
						</div>
					</div>
			</Router>
 		</header>
     );
  }
}

export default Header;
