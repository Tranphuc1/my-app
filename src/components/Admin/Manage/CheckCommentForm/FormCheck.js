import React, { Component } from 'react';
import CommentChilden from './CommentChilden';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
class FormCheck extends Component {
    constructor(props){
        super(props);
        this.state =({
            key:[]
        })
    }
    componentWillMount(){
        callApi('Database/Danhgia','GET',null).then((res)=>{
            var key = Object.keys(res.data);
            this.setState({
                key:key
            })
        });
    }
    showComment=()=>{
        var result='';
        var {key} = this.state;
        if (key.length > 0){
           result = key.map((key,index)=>{
                return (
                <CommentChilden
                    key={index}
                    keys={key}
                    index={index}
                />
                );
            });
        }
        return result;
    }
    render() {
        return (
            <div className="CheckComment" >
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Sản Phẩm</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showComment()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FormCheck;