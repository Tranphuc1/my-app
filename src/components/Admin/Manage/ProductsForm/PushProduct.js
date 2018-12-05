import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { firebaseConnect } from '../../../../FirebaseConnect';

var nodeData = firebaseConnect.database().ref('/Sanpham');
var products = [];
const storage = firebaseConnect.storage();
function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ',
      author: 'traphuc',
      kind:'',
      rating:'5',
      description:'tranphuc',
      img:'',
      url:'',
      price:i
    });
  }
}
addProducts(50);

export default class PushProduct extends React.Component {
    constructor(props){
      super(props);
      this.state ={
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
      // const img = event.target.files[0];
      const name1 = target.name;
      const value = target.value;
      this.setState(() => ({
        [name1] : value
      }));
      // if (event.target.files[0]) {
      //   const img = event.target.files[0];
      //   this.setState(() => ({
      //     img
      //   }));
      // }
      // this.handleChange(event);
    }
    submitProduct = (event) =>{
      event.preventDefault();
      const {name,author,kind,rating,description,price,url} = this.state;
      const item ={};
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
      const options = {
        page: 2,  // which page you want to show as default
        sizePerPageList: [ {
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: 'All', value: products.length
        } ], // you can change the dropdown list for size per page
        sizePerPage: 10,  // which size per page you want to locate as default
        pageStartIndex: 0, // where to start counting the pages
        paginationSize: 3,  // the pagination bar size.
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
        firstPage: 'First', // First page button text
        lastPage: 'Last', // Last page button text
        prePageTitle: 'Go to previous', // Previous page button title
        nextPageTitle: 'Go to next', // Next page button title
        firstPageTitle: 'Go to first', // First page button title
        lastPageTitle: 'Go to Last', // Last page button title
        paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
        paginationPosition: 'top'  // default is bottom, top and both is all available.
      };
  
      return (
        <div className="PushProduct" >
            <button type="button" className="btn btn-info">Thêm Sản Phẩm</button>
            
            <div className="col-xs-4 col-sm4 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        Sản phẩm
                    </div>
                    
                    <div className="card-block">
                        <form method="POST">
                        <div className="form-group">
                                <label>Ảnh</label>
                                <input type="file" name="img" className="form-control"  onChange={this.handleChange}/>
                                <a name="" id="" className="btn btn-success" role="button" onClick={this.handleUpload} style={{textAlign:'center'}}>UPLOAD</a>
                                <progress style={{width:350}} value={this.state.progress} max="100"/>
                                
                            </div>
                            <div className="form-group">
                                <label value={this.state.url} >Coppy URL:</label>
                                <label style={{border:'solid 1px'}}><p>{this.state.url}</p></label>
                                
                                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                                
                            </div>
                        </form>
                        <form method="POST" >
                            <div className="form-group" >
                                <label htmlFor="name">Tên Sản Phẩm</label>
                                <input type="text" name="name" className="form-control" placeholder="Nhập Tên Sản Phẩm" onChange={ (e) => this.changedData(e) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="kind">Thể Loại</label>
                                <input type="text" name="kind" className="form-control" placeholder="Nhập Loại Sách" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            {/* <div class="dropdown open">
                              <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                    Dropdown
                                  </button>
                              <div class="dropdown-menu" aria-labelledby="triggerId">
                                <button class="dropdown-item" href="#">Action</button>
                                <button class="dropdown-item disabled" href="#">Disabled action</button>
                              </div>
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="author">Tên Tác Giả</label>
                                <input type="text" name="author" className="form-control" placeholder="Nhập Tên Tác Giả" onChange={ (e) => this.changedData(e) }/>
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
                            <button type="submit" className="btn btn-primary" onClick={ (e) => this.submitProduct(e) }>Thêm</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-20 col-lg-8">
              <BootstrapTable data={ products } pagination={ true } options={ options }>
                    <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'> Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='author'> author</TableHeaderColumn>
                    <TableHeaderColumn dataField='rating'> rating</TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>description</TableHeaderColumn>
                    <TableHeaderColumn dataField='img'> img</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'> Price</TableHeaderColumn>
              </BootstrapTable >
            </div>
        </div>
      );
    }
  }
