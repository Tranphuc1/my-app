import React, { Component } from 'react';

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
    //     getData = () => {
    //     if(this.state.data)
    //     {
    //         return this.state.data.map((value,key) => {
    //             return (
    //                 <Product 
    //                 key={key}
    //                 name={value.name}
    //                 url={value.url}
    //                 kind={value.kind}
    //                 price={value.price}
    //                 description={value.description}
    //                 author={value.author}
    //                 rating={value.rating}
    //                 ></Product>
    //             )
    //         })
    //     }
    // }
    render() {
        return (
            <section className="section" >
                <h1 className="section-heading" >Danh Sách Sản Phẩm</h1>
                <div className="row"> 
                    {this.props.children}
                </div>
            </section>
        );
    }
}
export default Products;
