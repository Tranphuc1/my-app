import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Search extends Component {
  constructor(props){
    super(props);
    this.state ={
      tempValue:''
    }
  }
  isChange =(event) =>{
    this.setState({
      tempValue:event.target.value
    })
  }
  render() {
    var {tempValue} = this.state;
    var LinkSearch = `/${tempValue}/SearchChildren`
    return (
			<div className="searchform" method="get" style={{display:'flex'}}>
			  <input className="searchbox" type="text" name="search" onChange ={(event) => this.isChange(event)} />
        &nbsp;<Link to={LinkSearch}><button type="button" className="button-search">Tìm</button></Link>
			</div>
     );
  }
}
export default Search;
