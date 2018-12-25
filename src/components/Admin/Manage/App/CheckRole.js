import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import callApi from '../../../../ApiCaller/Api';
class CheckRole extends Component {
    constructor(props){
        super(props);
        this.state = ({
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
    render() {
        return (
            <div>
                {this.showKey()}
                {/* <UserLogin authUser={authUser} /> */}
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        authUser: state.sessionState.authUser
    }
}
export default connect(mapStateToProps)(CheckRole);