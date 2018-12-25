import React, { Component } from 'react';
import Form from '../Form/UserForm';
import Table from '../Table/Table';
import { connect } from 'react-redux';
import {actShowAllUser} from '../../../Products/actions/actions';
import {auth1} from '../../../../FirebaseConnect2';
var _ = require('lodash');
class UserResult extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        statusForm : true,
        users:[]
      }
    }
    // componentDidMount(){
    //   callApi('User','GET',null).then(res=>{
    //     this.props.actShowUser(_.toArray(res.data));
    //   })
    // }
    componentDidMount() {
      auth1.users().on('value', snapshot => {
        const usersObject = snapshot.val();
        const usersList = Object.keys(usersObject).map(key => ({
          ...usersObject[key],
          uid: key,
        }));
        this.props.actShowUser(usersList);
      });
     
    }
    changeStatusForm = (event) => {
      event.preventDefault();
      this.setState({
        statusForm: this.state.statusForm
      });
    }
    showForm = () => {
      if (this.state.statusForm) {
        return <Form formToogle={ (e) => this.changeStatusForm(e) }></Form>
      }
    }
    changeStatusForm = (event) => {
      event.preventDefault();
      this.setState({
        statusForm : !this.state.statusForm
      });
    }

    render() {
      var {User} = this.props;
      return (
        <div className="App">
        <div className="container">
          {/* <EditUser /> */}
          <div className="container" style={{display: '-webkit-inline-box'}}>
            <Table userData ={User} changedButton = {this.state.statusForm} FromToogle = { (e) => this.changeStatusForm(e)}></Table>
            { this.showForm() } 
          </div>
        </div>
      </div>
      );
    }
  }
const mapStateToProps = (state) =>{
  return {
    User: state.User
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actShowUser:(User)=>{
      dispatch(actShowAllUser(User));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserResult);