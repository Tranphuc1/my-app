import React, { Component } from 'react';
import _ from 'lodash';
import NumberFormat from 'react-number-format';
class Product extends Component {
	render() {
		const { product } = this.props;
		let linkToDetail = `/ProductDetail/${product.key}`
		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="card text-center card-cascade narrower">
				<a href={linkToDetail} >
					<div className="view overlay hm-white-slight z-depth-1" style ={{ height:'180px',width:'180px'}}>
						<img className="img-fluid" src={product.url} alt={product.name} style={{width:'180px',height:'180px'}}/>
					</div>
				</a>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
							<a href={linkToDetail}>
							{product.name}
							</a>
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
	showRating = rating => {
		let result = [];
		for (let index = 0; index < rating; index++) {
			result.push(<i key={index} className="fa fa-star" />);
		}
		for (let index = 0; index < 5 - rating; index++) {
			result.push(<i key={index + 5} className="far fa-star" />);
		}
		return result;
	};
}

export default Product;