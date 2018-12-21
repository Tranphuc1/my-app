import React, { Component } from 'react';
import * as Message from '../constants/Message';
import {Link } from 'react-router-dom';
import _ from 'lodash';
import NumberFormat from 'react-number-format';
class Product extends Component {
	render() {
		const { product } = this.props;
		let linkToDetail = `/${product.key}/ProductDetail`
		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="card text-center card-cascade narrower">
				<Link to={linkToDetail} >
					<div className="view overlay hm-white-slight z-depth-1" style ={{ height:'180px',width:'180px'}}>
						<img className="img-fluid" src={product.url} alt={product.name} style={{width:'180px',height:'180px'}}/>
					</div>
				</Link>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
							<Link to={linkToDetail}>
							{product.name}
							</Link>
							</strong>
						</h4>
						<ul className="rating">
							<li>{this.showRating(product.rating)}</li>
						</ul>
						<p className="card-text">{product.author}</p>
						<div className="card-footer">
							<span className="final-price">
								<NumberFormat 
									value={product.price*0.75} 
									displayType={'text'} 
									thousandSeparator={true} 
									suffix={' đ'} />
								</span>
							<span className="price-regular">
							<br/>
							<NumberFormat 
								value={product.price} 
								displayType={'text'}
								thousandSeparator={true} 
								suffix={' đ'} />
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
	onAddToCart = (product) => {
		const { onAddToCart, onChangeMessage } = this.props;
		onAddToCart(product);
		onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
	};
	showRating = rating => {
		let result = [];
		for (let index = 0; index < rating; index++) {
			result.push(<i key={index} className="fa fa-star" />);
		}
		for (let index = 0; index < 5 - rating; index++) {
			result.push(<i key={index + 5} className="fa fa-star-o" />);
		}
		return result;
	};
}

export default Product;