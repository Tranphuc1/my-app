import React, { Component } from 'react';
import Navvar from '../Nav/Nav';
import { connect } from 'react-redux';
import * as routes from '../../../Products/constants/Login';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import callApi from '../../../../ApiCaller/Api';
class App1 extends Component {
  constructor(props){
    super(props);
    this.state=({
      role:''
    })
  }
  // logout(e){
  //   e.preventDefault()
  //   this.props.history.push('/Signup')
  // }
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
      }else{
        return <NavigationNonAuth/>
      }
    }
    render() {
        
      return (
        <div className="App">
        <div className="container">
          {this.showKey()}
          {this.renderAdmin()}
          </div>
        </div>
      );
    }
  }
const NavigationAuth = () =>
  <div className="container">
    <Navvar/>
	</div>
const NavigationNonAuth = () =>
	<ul className="navbar-nav ml-auto">
		<li className="nav-item">
			<Link className="nav-link" to={routes.SIGN_IN}>
				<button type="button" className="btn btn-warning" >Đăng Nhập</button>
			</Link>
		</li>
	</ul>
const mapStateToProps = (state) =>{
  return {
    authUser: state.sessionState.authUser
  }
}
export default connect(mapStateToProps)(App1);