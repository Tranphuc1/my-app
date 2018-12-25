import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/Login';
import CommentForm from './CommentForm';
import callApi from '../../../../ApiCaller/Api';
import _ from 'lodash';
class Comment extends Component {
    constructor(props){
        super(props);
        this.state=({
          role:''
        })
      }
    showKey=()=>{
    var {authUser} = this.props;
    var key =_.get(authUser, ['uid']);
    // console.log(key);
    callApi(`users/${key}`,'GET',null).then(res=>{
        var data1 = res.data;
        this.setState({
            role:_.get(data1,['role'])
        })
    })
    }
    renderAdmin=()=>{
        var {role} = this.state;
        if(role == '1'){
            return <NavigationAuth/>
        }if (role == '2'){
            return <NavigationAuth/>
        }
        if(role =='3'){
            return <DisConnect/>
        }
        return <NavigationNonAuth/>
    }
    render(){
        return (
        <div>
            <h4 style={{borderBottom:'#e4e4e4 solid 1px'}}>Gửi Nhận Xét Của Bạn</h4>
            <div className="menu-group" style={{width:'100%', height : '200px',display:'-webkit-box'}}>
            {this.showKey()}
            {this.renderAdmin()}
            </div>
        </div>
        );
    }
}
const NavigationAuth = () =>
    <div>
        <div className="rate">
            <label>1. Đánh giá của bạn về sản phẩm này: </label> 
            <ul className="rating">
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
            </ul>    
        </div>
        <CommentForm />
    </div>
const NavigationNonAuth = () =>
    <div>
        <Link to={routes.SIGN_IN}> Đăng Nhập </Link><a> để viết nhận xét !!!</a>  
    </div>
const DisConnect = () =>
    <div className="dis">
        <a>Tài khoản của bạn bị khóa !!</a>
    </div>
const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Comment);
