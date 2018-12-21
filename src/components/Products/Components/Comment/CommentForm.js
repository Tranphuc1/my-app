import React from 'react';
import { connect } from 'react-redux';
import ShowComment from './showComment';
import InputComment from './InputComment';
const CommentForm = ({ authUser,keypd }) =>
    
	<li className="UserName">
        <ShowComment keypd ={keypd}/>
        <InputComment authUser={authUser.email} keypd ={keypd}/>
	</li>

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    keypd: state.keypd
});
export default connect(mapStateToProps)(CommentForm);