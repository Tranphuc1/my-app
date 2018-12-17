import React, { Component } from 'react';
import Pagination from '../../Pagination/Pagination';
import Product from './Product';
import _ from 'lodash';
class MenuHorizontal extends Component {
    constructor(props){
        super(props);
        this.state ={
            products:[],
            allProducts:[],
            currentProducts:[],
            currentPage:null,
            totalPages:null
        };
    }
    componentDidMount(){
        var {products} = this.props;
        var {kind} = this.props;
        const {data: allProducts = [] } = this.state.products;
        this.setState({
            allProducts
        });
        var Filtered = products.filter(product => product.kind === kind);
        this.setState({
            products : Filtered
        })
    }
    onPageChanged = data => {
        var { products } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentProducts = products.slice(offset, offset + pageLimit);
        this.setState({ currentPage, currentProducts, totalPages });
    }
    render() {
        var {products} = this.state;
        var {kind} = this.props;
        var { onAddToCart, onChangeMessage } = this.props;
        const { currentProducts, currentPage, totalPages } = this.state;
        const totalProducts = products.length;
        if (totalProducts === 0) return null;
        const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();
        return (
            <div className="Container-center">
                    <div className="menu-group" style={{width:'100%', height : '600px'}}>
                            <div className="banner" style={{ width:'100%',height:'40px',display:'-webkit-box',marginTop:'10px',background:'#e4e4e4'}}> 
                                <div className="MenuBaner" style={{width:'200px'}}>
                                    <h4><a className="title" style={{color:'#00cc66'}}>{kind}</a></h4>
                                </div>
                            </div>
                            <div className="container mb-5">
                                <div className="row ">
                                    <div className="w-100 d-flex flex-row flex-wrap align-items-center justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                        <h4 className={headerClass}>
                                            <strong className="text-secondary">{totalProducts}</strong>{" "}
                                            Product
                                        </h4>
                                        {currentPage && (
                                            <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                                            Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                                            <span className="font-weight-bold">{totalPages}</span>
                                            </span>
                                        )}
                                        </div>
                                        <div className="form-group">
                                            <Pagination totalRecords={totalProducts} pageLimit={4} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                                        </div>
                                    </div>
                                        {currentProducts.map((product,index) =>{return <Product key={index} products={products} kind ={kind} product={product} onAddToCart = {onAddToCart} 
                                        onChangeMessage = {onChangeMessage}/>})}
                                </div>
                            </div>
					</div>
            </div>
        );
    }

}
export default MenuHorizontal;