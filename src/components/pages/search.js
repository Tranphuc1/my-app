import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
			<form className="searchform" action method="get">
			  <input className="searchbox"  type="text" name="s"  />
			  <input className="searchsubmit" type="submit" defaultValue="Tìm" />
			</form>
     );
  }
}

export default Search;
