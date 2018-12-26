import React, { Component } from 'react';

class GetComment extends Component {
    showRating = rating => {
		let result = [];
		for (let index = 0; index < rating; index++) {
			result.push(<i key={index} className="fas fa-star" style={{color:'#ffa000'}}/>);
		}
		for (let index = 0; index < 5 - rating; index++) {
			result.push(<i key={index + 5} className="far fa-star" style={{color:'#ffa000'}}/>);
		}
		return result;
	};
    render() {
        var {comment} = this.props;
        return (
            <div className="showComment" style={{display:'inline'}}>
                <ul className="rating">
                    <li>{this.showRating(comment.rating)}</li>
                </ul>
                {comment.name}:{comment.txtComment}&nbsp;
                <br/>
            </div>
        );
    }
}

export default GetComment;