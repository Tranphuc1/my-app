import React, { Component } from 'react';
import AdminProduct from './AdminProduct';

class ShowProduct extends Component {
    MappingData = () =>{
        const sProducts = this.props.Data.map((value,key) =>{
            return <AdminProduct 
            key={key} 
            author={value.author} 
            kind={value.kind}
            url ={value.url}
            price={value.price}
            rating={value.rating}
            description={value.description}
            >{value.name}</AdminProduct>
        });
        return sProducts;
    }
    render() {
        return (
            <div className="showProduct" >
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>Product Name</th>
                        <th>Kind</th>
                        <th>author</th>
                        <th>description</th>
                        <th>Image</th>
                        <th>price</th>
                        <th >rating</th>
                        <th className="text-center" colSpan={2}>Quyền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.MappingData()}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShowProduct;