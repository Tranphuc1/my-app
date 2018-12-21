import React, { Component } from 'react';

class GetComment extends Component {
    render() {
        var {comment} = this.props;
        return (
            <div className="showComment" style={{display:'inline'}}>
                {comment.authUser}:{comment.txtComment}&nbsp;
                <br/>
            </div>
        );
    }
}

export default GetComment;