import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
    <div className="Search1">
 		<div className="search" style={{width: '40%'}}>
			<form className="searchform" action method="get">
			  <input className="searchbox"  type="text" name="s"  />
			  <input className="searchsubmit" type="submit" defaultValue="Tìm" />
			</form>
		</div>
	</div>
     );
  }
}

export default Search;
