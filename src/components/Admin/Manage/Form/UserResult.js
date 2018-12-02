import React, { Component } from 'react';
import Form from '../Form/UserForm';
import Table from '../Table/Table';
import Mydata from '../data.json';
import { firebaseConnect } from '../../../../FirebaseConnect';
var nodeData = firebaseConnect.database().ref('/User');
class UserResult extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        statusForm : true,
        usersData: Mydata
      }
    }
    showForm = () => {
      if (this.state.statusForm) {
        return <Form FromToogle = { (e) => this.changeStatusForm(e)} add={(item)=> this.addAction(item)}></Form>
      }
    }
  
    changeStatusForm = (event) => {
      event.preventDefault();
      this.setState({
        statusForm: this.state.statusForm
      });
    }
    showForm = () => {
      if (this.state.statusForm) {
        return <Form formToogle={ (e) => this.changeStatusForm(e) } add={ (item) => this.addAction(item) }></Form>
      }
    }
  
    changeStatusForm = (event) => {
      event.preventDefault();
      this.setState({
        statusForm : !this.state.statusForm
      });
    }
  addAction = (item) => {
    nodeData.push(item)
    alert('thêm dữ liệu thành công' + JSON.stringify(item)+"thành công")
  }

    render() {
      return (
        <div className="App">
        <div className="container">
          <div className="container" style={{display: '-webkit-inline-box'}}>
            <Table userData ={this.state.usersData} changedButton = {this.state.statusForm} FromToogle = { (e) => this.changeStatusForm(e)}></Table>
            { this.showForm() } 
          </div>
        </div>
      </div>
      );
    }
  }
export default UserResult;