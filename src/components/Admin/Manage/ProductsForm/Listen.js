import React, { Component } from 'react';
import { firebaseConnect } from '../../../../FirebaseConnect';
import callApi from '../../../../ApiCaller/Api';

class Listen extends Component {
    constructor(props){
        super(props);
        this.nodeData = firebaseConnect.database();
        this.state={
            Data:[]
        }
    }
    ListenData (nodeData){
        var items =[];
        this.nodeData.ref('Sanpham').child('SachBao').on('child_added',(snapshot)=>{
            items.push({
                name:snapshot.val(),
                _key:snapshot.key
            });
            this.setState({
               Data: items
            })
        })
    }
    onClick =() =>{
        var nodeData = firebaseConnect.database().ref('Sanpham');
        nodeData.orderByKey().on("child_added", function(snapshot) {
            var _key = snapshot.key;
           console.log(_key);
        });
    }
    showproducts(){
        callApi('Sanpham','GET',null).then(res =>{
            console.log(res);
        });
    }
    render() {
        return (
            <div>
                
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input type="text" name="name" className="form-control" placeholder="name" onChange={ () => this.ListenData(this.props.nodeData) }/>
                    <button onClick={()=> this.onClick()}>Save</button>
                </div>
                <form>
                    {this.showproducts()}
                </form>
            </div>
        );
    }
}

export default Listen;