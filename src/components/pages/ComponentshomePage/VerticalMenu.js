import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class VerticalMenu extends Component {
    
    render() {
        var {kind} = this.props;
        return (
            <div>
                <br/>
               <ul>  
				<li>
                <Link to={`/${kind}/MenuProducts`}>{kind}</Link>
				</li>
			</ul>
            
          </div>
        );
    }
}

export default VerticalMenu;