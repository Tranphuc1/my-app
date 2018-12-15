import React, { Component } from 'react';
import { firebaseConnect } from '../../../../FirebaseConnect';
import PropTypes from 'prop-types';
import callApi from '../../../../ApiCaller/Api';
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
              this.setState({url});
          })
        });
    }
      changedData = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState(() => ({
          [name] : value
        }));
      }
      submitProduct = (event) =>{
        event.preventDefault();
        var {history} = this.props;
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
            callApi('Database/Sanpham','POST',item).then(res =>{
                history.goBack();
            });
        }
    render() {
        var {history} = this.props;
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
                                
                                <button type="button" onClick={this.handleUpload} className="btn btn-success">UPLOAD</button>
                                <br/>
                                <progress style={{width:350}} value={this.state.progress} max="100"/>
                            </div>
                            <div className="form-group">
                                <label name="url" >Coppy URL:</label>
                                <br/>
                                <label style={{border:'solid 1px'}}><p>{this.state.url}</p></label>
                                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                            </div>
                            <div className="form-group" >
                                <label htmlFor="name">Tên Sản Phẩm</label>
                                <input type="text" name="name" onChange={ (e) => this.changedData(e) } placeholder="Nhập Tên Sản Phẩm"  />
                            </div>
                        
                            <div className="form-group">
                                <label htmlFor="author">Tên Tác Giả</label>
                                <input type="text" name="author" className="form-control" placeholder="Nhập Tên Tác Giả" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label >Thể Loại</label>
                                <br/>
                                <select style={{width:'225px',height:"25px"}} onChange={ (e) => this.changedData(e) } name="kind">
                                    <option value>---Chọn---</option>
                                    <option value="Sách Kinh Tế">Sách Kinh Tế</option>
                                    <option value="Văn Học Nước Ngoài">Văn Học Nước Ngoài</option>
                                    <option value="Kỹ Năng Sống">Kỹ Năng Sống</option>
                                    <option value="Sách Tuổi Teen">Sách Tuổi Teen</option>
                                    <option value="Học Ngoại Ngữ">Học Ngoại Ngữ</option>
                                    <option value="Sách Thiếu Nhi">Sách Thiếu Nhi</option>
                                    <option value="Phương Thức Đời Sống">Phương Thức Đời Sống</option>
                                </select>
                            </div>
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
                            <button type="submit" className="btn btn-danger" onClick={(e) => history.goBack(e)}>Trở Về</button>                            
                            <button type="submit" className="btn btn-primary" onClick={ (e) => this.submitProduct(e) }>Lưu</button>
                        </form>
                    </div>
                </div>
        );
    }
}
PushForm.propTypes = {
    key: PropTypes.arrayOf(
        PropTypes.shape({
            key : PropTypes.string.isRequired
        })
    ).isRequired,
    actGetKey : PropTypes.func.isRequired
}

export default PushForm;