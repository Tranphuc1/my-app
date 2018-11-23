import React, { Component } from 'react';
class Singup extends Component {
  render() {
    return (
    	<form>
    		<div className="form-group">
    			<label className="control-label">UserName</label>
    			<input type="text" name="UserName" className="form-control"></input>
    		</div>
    		<div className="form-group">
    		 <button type="button" class="btn btn-primary">Singup</button>
    	</form>
    	     );
  }
}

export default Singup;
