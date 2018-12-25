import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import GetComment from './GetComment';
class ShowComment extends Component {
    constructor(props){
        super(props);
        this.state={
            comment:[]
        }
    };
    componentWillMount(){
        var {keypd} = this.props;
        var keypd1 = keypd.join('');
        callApi(`/Database/Sanpham/${keypd1}/Comment`,'GET',null).then(res=>{
            var A =_.toArray(res.data);
            this.setState({
                comment : A
            });
        })
    }
    ShowComment =()=>{
        var {comment} = this.state;
        var result=null;
        if(comment.length>0){
            result= comment.map((comment,index)=>{
            return <GetComment 
                key={index}
                comment={comment} 
            />
            });
        }
        return result;
    }
    render() {
        return (
            <div className="showComment" >
                {this.ShowComment()}
            </div>
        );
    }
}

export default ShowComment;