import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';
import { firebaseConnect } from '../../../../FirebaseConnect';

class GetCommentAD extends Component {
    DeleteComment=()=>{
        var {keys} = this.props;
        callApi(`Database/Danhgia/${keys}`,'GET',null).then(res=>{
            var key = Object.keys(res.data);
            if(key.length>0){
                key.map((key)=>{
                    firebaseConnect.database().ref(`Database/Danhgia/${keys}/${key}`).set(null).then(res=>{
                        // var key1=Object.keys(res.data);
                        alert('thành công')
                    })
                })
            }
            
        })
        // setTimeout(() => {
        //         window.location.reload();
        // }, 1000);
    }
    showRating2 = rating => {
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
        var {comment,keys} = this.props;
        return (
            <div className="showComment" style={{display:'-webkit-box'}}>
                <div className="showComment" style={{fontSize:15,width:'90%',border:'solid 1px #ccc666'}}>
                    <div><h4>{comment.name}</h4></div>
                    <ul className="rating">
                    <li>{this.showRating2(comment.rating)}</li>
                    </ul>
                    {comment.txtComment}
                </div>
                <div className="btnDelete" style={{width:'10%'}}>
                    <button type="button" className="btn btn-danger" onClick={()=>{this.DeleteComment()}}>Xóa</button>
                </div>
                <br/>
            </div>
        );
    }
}

export default GetCommentAD;