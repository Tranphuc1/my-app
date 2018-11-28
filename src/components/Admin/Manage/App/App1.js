import React, { Component } from 'react';
import Nav from '../Nav/Nav';
// import Table from '../Table/Table';
import Form from '../Form/Form';
import Table from '../Table/Table';
import Mydata from '../data.json';
import Header from '../../../headerComponents/header';
import { firebaseConnect } from '../../../../FirebaseConnect';
// var noteData  = firebaseConnect.database().ref('User');
//  noteData.once('value').then(function(snapshot){});
class App1 extends Component {
    constructor(props) {
      super(props);
      this.nodeData = firebaseConnect.database().ref('/User');
      this.state = {
        statusForm : false,
        usersData: Mydata
      }
    }
  
    // componentDidMount(){
    //   var NodeData = firebaseConnect.database().ref('/Sanpham');
    //   NodeData.once('value').then(function(snapshot){
    //     console.log(snapshot.val())
    //   });
    // }
    // showForm = () => {
    //   if (this.state.statusForm) {
    //     return <Form FromToogle = { (e) => this.changeStatusForm(e)} add={(item)=> this.addAction(item)}></Form>
    //   }
    // }
  
    // changeStatusForm = (event) => {
    //   event.preventDefault();
    //   this.setState({
    //     statusForm: !this.state.statusForm
    //   });
    // }
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
    this.nodeData.push(item)
    // this.state.usersData.push(item);

    // this.setState({
    //   usersData : this.state.usersData
    // });
  }

    render() {

      this.nodeData.once('value').then(function(snapshot){
        console.log(snapshot.val());
      })
      return (
        <div className="App">
        <div className="container">
          <Header/>
          <Nav></Nav>
          <button onClick={this.logout}>Logout</button>
          <div className="container" style={{display: '-webkit-inline-box'}}>
            <Table userData ={this.state.usersData} changedButton = {this.state.statusForm} FromToogle = { (e) => this.changeStatusForm(e)}></Table>
            { this.showForm() } 
          </div>
        </div>
      </div>
      );
    }
  }
  

export default App1;