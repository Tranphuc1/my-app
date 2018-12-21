import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/Login';
import CommentForm from './CommentForm';

const Comment  = ({authUser}) => 
        <div>
            <h4>Gửi Nhận Xét Của Bạn</h4>
            <div className="menu-group" style={{width:'100%', height : '200px',display:'-webkit-box'}}>
                {authUser ? <NavigationAuth/> : <NavigationNonAuth/>}
            </div>
        </div>
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
const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(Comment);
