import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentChilden from './CommentChilden';
class FormCheck extends Component {
    constructor(props){
        super(props);
        this.state =({
            authUser:'',
        })
    }
    showComment=()=>{
        var result = null;
        var { products }=this.props;
        if(products.length>0){
            result = products.map((product,index)=>{
                return <CommentChilden
                    key={index}
                    product={product}
                />
            })
        }
        return result;
    }
    render() {
        var { products }=this.props;
        return (
            <div className="CheckComment" >
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="tbody">
                        {/* {this.showComment()} */}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        products : state.products
    }
}
export default connect(mapStateToProps,null)(FormCheck);