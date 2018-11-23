import React, { Component } from 'react';
import Demo from './Menu';
import Slider from './slideContener';
import Search from './search';
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
	    	</div>
	    </container>
     );
  }
}

export default Homepage;
