import React, { Component } from 'react';
import Form from '../Form/UserForm';
import Table from '../Table/Table';
import EditUser from './EditUser';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {actShowAllUser} from '../../../Products/actions/actions';
import callApi from '../../../../ApiCaller/Api';
var _ = require('lodash');
class UserResult extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        statusForm : true
      }
    }
    componentDidMount(){
      callApi('User','GET',null).then(res=>{
        this.props.actShowUser(_.toArray(res.data));
      })
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
          <EditUser />
          <div className="container" style={{display: '-webkit-inline-box'}}>
            <Table userData ={User} changedButton = {this.state.statusForm} FromToogle = { (e) => this.changeStatusForm(e)}></Table>
            { this.showForm() } 
          </div>
        </div>
      </div>
      );
    }
  }
UserResult.propTypes = {
  User : PropTypes.arrayOf(
      PropTypes.shape({
          key : PropTypes.string.isRequired,
          username : PropTypes.string.isRequired,
          password : PropTypes.string.isRequired,
      })
  ).isRequired,
  actShowUser : PropTypes.func.isRequired
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