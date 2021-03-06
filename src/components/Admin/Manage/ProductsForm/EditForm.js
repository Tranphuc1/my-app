import React, { Component } from 'react';
import callApi from '../../../../ApiCaller/Api';

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state ={
          key:'',
          name:'',
          author: '',
          kind:'',
          rating:null,
          description:'',
          quantity:null,
          price:null,
          url:''
        }
    }
    componentWillMount(){
        var {match} = this.props;
        if(match){
            var key = match.params.key;
            callApi(`Database/Sanpham/${key}`,'GET',null).then(res=>{
                var data = res.data;
                this.setState({
                    key: data.key,
                    name: data.name,
                    author : data.author,
                    kind : data.kind,
                    rating: data.rating,
                    description : data.description,
                    quantity: data.quantity,
                    url: data.url,
                    price: data.price
                })
            })
        }
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
        const {key,name,author,kind,rating,description,quantity,price,url} = this.state;
        const item ={};
         item.key= key;
          item.name = name;
          item.author = author;
          item.kind = kind;
          item.rating = rating;
          item.description = description;
          item.quantity = quantity;
          item.price = price;
          item.url = url;
          var {match} = this.props;
            if(match){
            var key1 = match.params.key;
            callApi(`Database/Sanpham/${key1}`,'PUT',item).then(res =>{
                history.goBack();
            });
        }
        }
    render() {
        var {history} = this.props;
        var {name,kind,author,description,rating,quantity,price,url} =this.state;
        return (
            <div className="panel-panel waring">
                    <div className="card-header" style={{color:'blue'}}>
                        <h4>Sản phẩm</h4>
                    </div>
                    <div className="panel-body">
                        <form  className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <div className="form-group" >
                                <label htmlFor="name">Tên Sản Phẩm</label>
                                <input type="text" name="name" value={name}  onChange={ (e) => this.changedData(e) } placeholder="Nhập Tên Sản Phẩm"  />
                            </div>
                        
                            <div className="form-group">
                                <label htmlFor="author">Tên Tác Giả</label>
                                <input type="text" name="author" value={author}  className="form-control" placeholder="Nhập Tên Tác Giả" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label >Thể Loại</label>
                                <br/>
                                <select style={{width:'225px',height:"25px"}} value={kind} onChange={ (e) => this.changedData(e) } name="kind">
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
                                <input type="money" name="price" value={price}  className="form-control" placeholder="Giá Tiền VNĐ" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Mô Tả</label>
                                <input type="text" name="description" value={description} className="form-control" placeholder="Mô Tả" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Số Lượng</label>
                                <input type="text" name="quantity" value={quantity} className="form-control" placeholder="Số Lượng" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="URL">URL</label>
                                <input type="string" name="url" value={url}  className="form-control" placeholder="Vui lòng copy URL ảnh bên trên" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Number">Rating</label>
                                <input type="rating" name="rating" value={rating}  min="1" max="5" className="form-control" placeholder="Nhập Rating" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <button type="submit" className="btn btn-danger" onClick={() => history.push("/App1/PushProduct")}>Trở Về</button>                            
                            <button type="submit" className="btn btn-primary" onClick={ (e) => this.submitProduct(e) }>Lưu</button>
                        </form>
                    </div>
                </div>
        )
    }
}

export default EditForm;