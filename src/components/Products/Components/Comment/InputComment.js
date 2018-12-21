import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';
class InputComment extends Component {
    
    constructor(props){
        super(props);
        this.state={
            txtComment:''
        }
    }
    changedData = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState(() => ({
          [name] : value
        }));
      }
      submitComment = (event) =>{
            event.preventDefault();
            const {txtComment} = this.state;
            const {authUser} = this.props;
            var {keypd} = this.props;
            var keypd1 = keypd.join('');
            const item ={};
                item.txtComment = txtComment;
                item.authUser = authUser;
                callApi(`Database/Comment/${keypd1}`,'POST',item).then(res =>{
                });
            }
        
    render() {
        return (
            <div className="inputComment" style={{width:'1200px',border:'1px',display:'flex'}}>
                <input type="text" name="txtComment" onChange={ (e) => this.changedData(e) } placeholder="Hãy để lại ý kiến của bạn về sản phẩm" style={{border:'solid 1px',height:'35px'}} />
                <button type="button" className="btn btn-warning" onClick={ (e) => this.submitComment(e) }>Comment</button>
            </div>
        );
    }
}

export default InputComment;