import React, { Component } from 'react';
import Search from './ComponentshomePage/search';
import Menu from './ComponentshomePage/Menu';
import SimpleSlider from './ComponentshomePage/slideContener';
import ProductsContainer from '../Products/Containers/ProductsContainer';
class Homepage extends Component {
	
  render() {
    return (
	    	<div className="Container-center" >
				<button type="button" className="btn btn-default" style={{position: 'absolute', top: 0,right: 150}} ><a href ="/Signup" >Trang Admin</a></button>
	    		<a className="glyphicon glyphicon-th-list" style={{left: '40px'}}> Danh Mục Sản Phẩm</a>
	    		<a className="glyphicon glyphicon-earphone" style={{left: '70%'}}> HotLine:0988888888</a>
					<div>
						<Search/>
						<div className="menu-group" style={{width:'100%',height : '400px',display:'-webkit-box'}}>
						<Menu />
						<SimpleSlider />
						</div>
						<ProductsContainer/>
					</div>

	    	</div>
     );
  }
}

export default Homepage;
