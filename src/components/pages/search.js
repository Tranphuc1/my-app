import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
		<div className="container-center">
    <div className="Search1" style={{width: '40%'}}>
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
