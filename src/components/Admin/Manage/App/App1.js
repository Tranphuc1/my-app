import React, { Component } from 'react';
import Navvar from '../Nav/Nav';
// import Table from '../Table/Table';
// var noteData  = firebaseConnect.database().ref('User');
//  noteData.once('value').then(function(snapshot){});
class App1 extends Component {
  logout(e){
    e.preventDefault()
    this.props.history.push('/Signup')
  }

    render() {
      return (
        <div className="App">
        <div className="container">
        <button onClick={e =>this.logout(e)} type="button" className="btn btn-danger">LogOut</button>
          <Navvar/>
          </div>
        </div>
      );
    }
  }
export default App1;