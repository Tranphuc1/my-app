import React, { Component } from 'react';
import Nav from '../Nav/Nav';
// import Table from '../Table/Table';
import Form from '../Form/Form';
import Table from '../Table/Table';
import Header from '../../../headerComponents/header';

class App1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        statusForm : false
      };
    }
  
    showForm = () => {
      if (this.state.statusForm) {
        return <Form FromToogle = { (e) => this.changeStatusForm(e)}></Form>
      }
    }
  
    changeStatusForm = (event) => {
      event.preventDefault();
      this.setState({
        statusForm: !this.state.statusForm
      });
    }
  
    // addAction = (item) => {
    //   this.state.usersData.push(item);
  
    //   this.setState({
    //     usersData : this.state.usersData
    //   });
    // }
    
    render() {
      return (
        <div className="App">
        <div className="container">
          <Header/>
          <Nav></Nav>
          <div className="container" style={{display: '-webkit-inline-box'}}>
            <Table changedButton = {this.state.statusForm} FromToogle = { (e) => this.changeStatusForm(e)}></Table>
            { this.showForm() } 
          </div>
        </div>
      </div>
      );
    }
  }
  

export default App1;