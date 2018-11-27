import React, { Component } from 'react';
import Nav from '../Nav/Nav';
// import Table from '../Table/Table';
import Form from '../Form/Form';
import Table from '../Table/Table';
import Header from '../../../headerComponents/header';
import Mydata from '../data.json';
class App1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        statusForm : false,
        usersData: Mydata
      };
    }
  
    showForm = () => {
      if (this.state.statusForm) {
        return <Form FromToogle = { (e) => this.changeStatusForm(e)} add={(item)=> this.addAction(item)}></Form>
      }
    }
  
    changeStatusForm = (event) => {
      event.preventDefault();
      this.setState({
        statusForm: !this.state.statusForm
      });
    }
  
    addAction = (item) => {
      this.state.usersData.push(item);
  
      this.setState({
        usersData : this.state.usersData
      });
    }
    
    render() {
      return (
        <div className="App">
        <div className="container">
          <Header/>
          <Nav></Nav>
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