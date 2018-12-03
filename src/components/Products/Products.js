import React, { Component } from 'react';
// import { firebaseConnect } from '../../FirebaseConnect';


// var nodeData= firebaseConnect.database().ref("/Sanpham");
class Products extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         data :[]
    //     }
    // }
    // componentWillMount(){
    //     nodeData.on('value',(notes) => {
    //         var arrayData =[];
    //         notes.forEach(Element =>{
    //             const key = Element.key;
    //             const name = Element.val().name;
    //             const author = Element.val().author;
    //             const kind = Element.val().kind;
    //             const rating = Element.val().rating;
    //             const description = Element.val().description;
    //             const price = Element.val().price;
    //             const url = Element.val().url;
    //             arrayData.push({
    //                 key:key,
    //                 name:name,
    //                 author:author,
    //                 kind:kind,
    //                 rating:rating,
    //                 description:description,
    //                 price:price,
    //                 url:url
    //             })
    //         });
    //         this.setState({
    //             data:arrayData
    //         });
    //     })
    // }
    // getData = () => {
    //     console.log(this.state.data)
    // }
    render() {
        // {
        //     this.getData()
        // }
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row"> 
                    {/* {this.props.children} */}
                </div>
            </section>
        );
    }
    // showProduct(products){
    //     var result = null;
    //         if(products.length > 0){
    //             result = products.map((product,index) => {
    //             return <Product key={index} product={product} />;
    //             });
    //         }
    //     return result;
    // }
    // showProduct(products){
    //     var result = null;
    //     if(products.length > 0 ){
    //         console.log("333");
    //         result = products.map((Product,index) => {
    //             return <Product key={index}/>
    //         });
    //     }
    //     return result;
    // }

}
export default Products;
