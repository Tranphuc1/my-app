import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { firebaseConnect } from '../../../../FirebaseConnect';


// var uploader = document.getElementById('uploader');
// var fileButton =document.getElementById('fileButton');
// var storeURl = 'Sanpham/';
var nodeData = firebaseConnect.database().ref('/Sanpham');
// var storeRef = firebaseConnect.storage().ref(storeURl + files.name);
const products = [];

//listen file 
// fileButton.addEventListener('change',function(e){
//   //get file
//     var file = e.target.value[0];

//   // create store ref
     
//    

//   //upload file

//     var task = storeRef.put(file);
  
//     //update file

//     task.on('state_changed',
//         function progress(snapshot){
//             var percenter = (snapshot.bytesTransferred /
//             snapshot.totalBytes)*100;
//             uploader.value = percenter;
//         },

//         function error(err){

//         },

//         function complete(){

//         }
//     );


// });
function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ',
      author: 'tramphuc',
      kind:'',
      rating:'5',
      description:'tranphuc',
      img:'',
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
        price:null
      }
    }
    renderShowsTotal(start, to, total) {
      return (
        <p style={ { color: 'red' } }>
          From { start } to { to }, totals is { total }&nbsp;&nbsp;
        </p>
      );
    }
    changedData = (event) => {
      const target = event.target;
      const name1 = target.name;
      const value = target.value;
      this.setState({
          [name1] : value,
          img : event.target.files[0]
      });
      console.log(event.target.files[0]);
    }
    submitProduct = (event) =>{
      event.preventDefault();
      event.target.reset();
      const {name,author,kind,rating,description,img,price} = this.state;
      const item ={};
        item.name = name;
        item.author = author;
        item.kind = kind;
        item.rating = rating;
        item.description = description;
        item.price = price;
        item.img = img;
        this.add(item);
    }
      add=(item)=>{
        nodeData.push(item)
        storeRef.put(item)
        alert('them du lieu thanh cong')
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
            <button type="button" class="btn btn-info">Thêm Sản Phẩm</button>
            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <BootstrapTable data={ products } pagination={ true } options={ options }>
                
                    <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'> Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='author'> author</TableHeaderColumn>
                    <TableHeaderColumn dataField='rating'> rating</TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>description</TableHeaderColumn>
                    <TableHeaderColumn dataField='img'> img</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'> Price</TableHeaderColumn>
              </BootstrapTable >
            </div> */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header">
                        Sản Phẩm
                    </div>
                    <div className="card-block">
                        <form method="POST" onSubmit={ (e) => this.submitProduct(e) }>
                            <div className="form-group">
                                <label htmlFor="name">Tên Sản Phẩm</label>
                                <input type="text" name="name" className="form-control" placeholder="Nhập Tên Sản Phẩm" onChange={ (e) => this.changedData(e) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="kind">Thể Loại</label>
                                <input type="text" name="kind" className="form-control" placeholder="Nhập Loại Sách" onChange={ (e) => this.changedData(e) }/>
                            </div>
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
                                <label>Ảnh</label>
                                <input type="file" name="img" className="form-control" onChange={ (e) => this.changedData(e) }/>
                                <progress style={{width: 550 }} value="0" max="100" id="uploader">0%</progress>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Number">Rating</label>
                                <input type="number" name="quantity" min="1" max="5" className="form-control" placeholder="Nhập Mật Khẩu" onChange={ (e) => this.changedData(e) }/>
                            </div>
                            <button type="submit" className="btn btn-primary" >Thêm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
