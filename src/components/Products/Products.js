import React, { Component } from 'react';
import { firebaseConnect } from '../../FirebaseConnect';
class Products extends Component {
    componentWillMount(){
        
    }
    getData = () =>{
        var data= firebaseConnect.database().ref('/Sanpham');
        
            data.on('value',(product)=>{ 
                var ArrayData = [];
                product.forEach(element =>{
                    const author = element.val().author;
                    const description = element.val().description;
                    const name = element.val().name;
                    const inventory = element.val().inventory;
                    const price = element.val().price;
                    const rating = element.val().rating;
                    ArrayData.push({
                        author:author,
                        description:description,
                        inventory:inventory,
                        name:name,
                        price:price,
                        rating:rating
                    })
                });
                console.log(product.val());
                console.log(ArrayData);
            })
    }
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row"> 
                {
                    this.getData()  
                }
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
