import React, { Component } from 'react';
import { firebaseConnect } from '../../../../FirebaseConnect';
import _ from 'lodash';


var nodeData = firebaseConnect.database().ref('/Sanpham');
const storage = firebaseConnect.storage();

class PushForm extends Component {
    constructor(props){
        super(props);
        this.state ={
          key:'',
          name:'',
          author: '',
          kind:'',
          rating:'',
          description:'',
          img:null,
          price:null,
          url:'',
          progress: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
      }
      componentDidMount(){
        nodeData.on('value',(snapshot) =>{
          var arr = Object.keys(snapshot.val());
          console.log(_.last(arr));
          this.setState({
            key : _.last(arr)
          });
          
        })
      }
      handleChange = e => {
        if (e.target.files[0]) {
          const img = e.target.files[0];
          this.setState(() => ({img}));
        }
      }
      handleUpload = () => {
        const {img} = this.state;
        const uploadTask = storage.ref(`images/${img.name}`).put(img);
        uploadTask.on('state_changed', 
        (snapshot) => {
          // progrss function ....
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          this.setState({progress});
        }, 
        (error) => {
             // error function ....
          console.log(error);
        }, 
      () => {
          // complete function ....
          storage.ref('images').child(img.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
          })
        });
    }
  
      renderShowsTotal(start, to, total) {
        return (
          <p style={ { color: 'red' } }>
            From { start } to { to }, totals is { total }&nbsp;&nbsp;
          </p>
        );
      }
      changedData = (event) => {
        const target = event.target
        const name = target.name;
        const value = target.value;
        this.setState(() => ({
          [name] : value
        }));
      }
      submitProduct = (event) =>{
        event.preventDefault();
        const {key,name,author,kind,rating,description,price,url} = this.state;
        const item ={};
          item.key = key;
          item.name = name;
          item.author = author;
          item.kind = kind;
          item.rating = rating;
          item.description = description;
          item.price = price;
          item.url = url;
          this.add(item);
      }
        add=(item)=>{
          nodeData.push(item)
          alert('OK nha ..')
          
        }
    render() {
        var {name,author,kind,rating,description,price,url} = this.state;
        return (

                <div className="panel-panel waring">
                    <div className="card-header" style={{color:'blue'}}>
                        <h4>Sản phẩm</h4>
                    </div>
                    <div className="panel-body">
                        <form  className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <div className="form-group">
                                <label>Ảnh</label>
                                <input type="file" name="img" className="form-control"  onChange={this.handleChange}/>
                                <a name="" id="" className="btn btn-success" role="button" onClick={this.handleUpload} style={{textAlign:'center'}}>UPLOAD</a>
                                <progress style={{width:350}} value={this.state.progress} max="100"/>
                                
                            </div>
                            <div className="form-group">
                                <label value={url} >Coppy URL:</label>
                                <label style={{border:'solid 1px'}}><p>{this.state.url}</p></label>
                                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                            </div>
                            <div className="form-group" >
                                <label htmlFor="name">Tên Sản Phẩm</label>
                                <input type="text" name="name" value={name} onChange={ (e) => this.changedData(e) } placeholder="Nhập Tên Sản Phẩm"  />
                            </div>
                        
                            <div className="form-group">
                                <label htmlFor="author">Tên Tác Giả</label>
                                <input type="text" name="author" className="form-control" placeholder="Nhập Tên Tác Giả" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <form>
                                <label >Thể Loại</label>
                                <select className="form-control" value={kind}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </form>
                            <div className="form-group">
                                <label htmlFor="price">Giá</label>
                                <input type="money" name="price" className="form-control" placeholder="Giá Tiền VNĐ" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Mô Tả</label>
                                <input type="text" name="description" className="form-control" placeholder="Mô Tả" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="URL">URL</label>
                                <input type="string" name="url" className="form-control" placeholder="Vui lòng copy URL ảnh bên trên" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Number">Rating</label>
                                <input type="rating" name="rating" min="1" max="5" className="form-control" placeholder="Nhập Mật Khẩu" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={ (e) => this.submitProduct(e) }>Thêm</button>
                        </form>
                    </div>
                </div>
        );
    }
}

export default PushForm;