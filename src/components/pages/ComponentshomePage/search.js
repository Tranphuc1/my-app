import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
			<div className="searchform" action method="get" style={{display:'flex'}}>
			  <input className="searchbox"  type="text" name="s"  />
          <button type="button" className="button-search" >Tìm</button>
			</div>
     );
  }
}

export default Search;
