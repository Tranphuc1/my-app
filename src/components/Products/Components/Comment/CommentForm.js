import React from 'react';
import { connect } from 'react-redux';
import ShowComment from './showComment';
const CommentForm = ({ authUser,keypd }) =>
	<div className="UserName">
        <ShowComment keypd ={keypd}/>
        {/* <InputComment authUser={authUser.email} keypd ={keypd}/> */}
	</div>

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    keypd: state.keypd
});
export default connect(mapStateToProps)(CommentForm);