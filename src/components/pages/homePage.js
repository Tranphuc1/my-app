import React, { Component } from 'react';
import Demo from './Menu';
import Slider from './slideContener';
import Search from './search';
import {Link} from 'react-router-dom';
class Homepage extends Component {
	
  render() {
    return (
    	<container>
	    	<div className="container">
	    		<a className="glyphicon glyphicon-th-list"> Danh Mục Sản Phẩm</a>
	    		<a className="glyphicon glyphicon-earphone" style={{left: '70%'}}> HotLine:0988888888</a>
					<Search/>
	    		<Demo/>
	    		<Slider />
					<button type="button" className="btn btn-default" style={{position: 'absolute', top: 0,
    right: 150}}><Link to="/Signup">Trang Admin</Link></button>
	    	</div>
	    </container>
     );
  }
}

export default Homepage;
