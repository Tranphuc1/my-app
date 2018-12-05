import React, { Component } from 'react';
import * as Message from '../constants/Message';

class Product extends Component {
	render() {
		const { product } = this.props;
		return (
			<div className="col-lg-4 col-md-6 mb-r">
				<div className="card text-center card-cascade narrower">
					<div className="view overlay hm-white-slight z-depth-1">
						<img src={product.url} className="img-fluid" alt={product.name} />
						<a>
							<div className="mask waves-light waves-effect waves-light" />
						</a>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
								<a>{product.name}</a>
							</strong>
						</h4>
						<ul className="rating">
							<li>{this.showRating(product.rating)}</li>
						</ul>
						<p className="card-text">{product.price}</p>
						<div className="card-footer">
							<span className="left">{product.price}$</span>
							<span className="right">
								<a
									className="btn-floating blue-gradient"
									data-toggle="tooltip"
									data-placement="top"
									data-original-title="Add to Cart"
									onClick={() => this.onAddToCart(product)}
								>
									<i className="fa fa-shopping-cart" />
								</a>
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
