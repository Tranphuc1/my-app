import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
import { connect } from 'react-redux';
class InputComment extends Component {
    constructor(props){
        super(props);
        this.state={
            txtComment:'',
            activeInput:true
        }
    }
    componentWillMount(){
        callApi('Database/Danhgia','GET',null).then(res=>{
            var {authUser} = this.props;
            var key =Object.keys(res.data);
            key.map((key)=>{
                callApi(`Database/Danhgia/${key}`,'GET',null).then(res=>{
                var A =_.toArray(res.data);
                var email =_.get(authUser,'email');
                var name =_.get(A,'uid');
                if(email==name){
                    this.setState({
                        activeInput : false
                    });
                }
            });
        });
    });
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
            var item ={};
                item.txtComment = txtComment;
                item.authUser = authUser;
                // if(item.txtComment != ''){
                //     callApi(`Database/Sanpham/${keypd1}/Comment`,'POST',item).then(res =>{
                //     });
                // }else{
                //     alert('Bạn chưa nhận xét !!')
                // }
            // setTimeout((event) => {
            //     window.location.reload();
            // }, 1000);
            }
        showInput =()=>{
            var {activeInput} = this.state;
            if(activeInput){
                return <input type="text" name="txtComment" onChange={ (e) => this.changedData(e) } placeholder="Hãy để lại ý kiến của bạn về sản phẩm" style={{border:'solid 1px',height:'35px'}} />
            }
        }
        showButton=()=>{
            var {activeInput} = this.state;
            if(activeInput){
                return <button type="button" className="btn btn-warning" onClick={ (e) => this.submitComment(e) }  >Comment</button>
            }
        }
    render() {
        var {authUser}= this.props;
        console.log(authUser);
        return (
            <div className="inputComment" style={{width:'1200px',display:'flex'}}>
                {this.showInput()}
                {this.showButton()}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(InputComment);