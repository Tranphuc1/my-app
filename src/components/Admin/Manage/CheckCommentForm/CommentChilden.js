import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import GetCommentAD from './GetCommentAD';
class CommentChilden extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            comment:[],
            url:''
        }
    }
    componentWillMount(){
        var {keys} = this.props;
        callApi(`Database/Sanpham/${keys}/`,'GET',null).then(res=>{
            var name = res.data.name;
            var url = res.data.url;
                this.setState({
                    name:name,
                    url:url
            });
        });
        callApi(`Database/Danhgia/${keys}`,'GET',null).then((res)=>{
            var A =_.toArray(res.data);
                    this.setState({
                        comment : A
                    });
        })
    }
    ShowComment2 =()=>{
        var {comment} = this.state;
        var {keys} = this.props;
        var result=null;
        if(comment.length>0){
            result= comment.map((comment,index)=>{
            return <GetCommentAD 
                key={index}
                keys={keys}
                comment={comment} 
            />
            });
        }
        return result;
    }
    render() {
        var {name,url} = this.state;
        return (
            <tr className="tbody">
                <td style={{fontSize:15,display:'grid'}}>{name}<img src={url}  height="100" width="100"/></td>
                <td>
                {this.ShowComment2()}
                </td>
            </tr>
        );
    }
}

export default CommentChilden;